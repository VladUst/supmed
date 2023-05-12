import React, { memo, useState } from 'react';
import { classNames, Text } from '../../../shared';
import cls from './ResultNote.module.scss';
import CreateIcon from '@mui/icons-material/Create';
import { Button, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Switch, TextField } from '@mui/material';
import axios from 'axios';
import Select from '@mui/material/Select';
import DiagnosticIcon from '@mui/icons-material/Settings';
interface ResultNoteProps {
  className?: string
}
export const ResultNote = memo((props: ResultNoteProps) => {
  const { className } = props;
  const [doctor, setDoctor] = useState<string>('');
  const [symptoms, setSymptoms] = useState<string>('');
  const [diagnosis, setDiagnosis] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('');
    const url = 'http://127.0.0.1:8000/api/diagnosis-create/';
    const response = await axios.post(url, {
      doctor, symptoms, diagnosis, description
    });
    if (response.data) {
      setStatus('Успешно сохранено');
    }
  }

  return (
      <form className={classNames(cls.ResultNote, {}, [className])}
            method="post"
            onSubmit={handleSubmit}
      >
          <label>Зафиксируйте окончательный диагноз: </label>
          <div className={cls.mainForm}>
              <TextField value={symptoms}
                         onChange={e => { setSymptoms(e.target.value); }}
                         label="Симптомы"
                         variant="outlined" />
              <TextField value={diagnosis}
                         onChange={e => { setDiagnosis(e.target.value); }}
                         label="Диагноз"
                         variant="outlined" />
              <TextField value={doctor}
                         onChange={e => { setDoctor(e.target.value); }}
                         label="Имя врача"
                         variant="outlined"/>
          </div>
          <textarea
              value={description}
              placeholder={'Подробное описание'}
              onChange={e => { setDescription(e.target.value); }}
              rows={2}
              cols={40}
          />
          <label>Для дигноза <b>Type 1 diabetes mellitus</b> найдена таблица диагностики.
              Пожалуйста, уточните дополнительные параметры: </label>
          <div className={cls.additionalForm}>
              <FormControlLabel control={<Switch defaultChecked />} label="Ожирение" />
              <FormControlLabel control={<Switch defaultChecked />} label="Кетоацидоз" />
              <FormControlLabel control={<Switch defaultChecked />} label="Полипноэ" />
              <FormControlLabel control={<Switch defaultChecked />} label="Полифагия" />
              <TextField label="Возраст"
                         variant="outlined" />
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Пол</InputLabel>
                  <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={'Мужской'}
                  label="Пол"
              >
                      <MenuItem>Мужской</MenuItem>
                      <MenuItem>Женский</MenuItem>
                  </Select>
              </FormControl>
              <TextField label="Уровень тиреотропного гормона, мЕд/л"
                         variant="outlined"/>
          </div>
          <div className={cls.specificBtn}>
              <Button
                  startIcon={<DiagnosticIcon/>}
                  endIcon={<DiagnosticIcon/>}
                  variant="contained"
              >
                  Специфичная диагностика
              </Button>
          </div>

          <div className={cls.diagnosticResult}>
              <Text title={'Результаты специфичной диагностики'} align={'center'}/>
              <p className={cls.resSubtitle}>Вывод онтологии: <b>Диабет 1 типа</b></p>
              <p className={cls.resSubtitle}>Прогнозы модели: </p>
              <ul>
                  <li style={{ color: '#058b30' }}>Диабет 1 типа - 87%</li>
                  <li style={{ color: '#058b30' }}>Диабет 2 типа - 70%</li>
                  <li style={{ color: '#b3530f' }}>Связанный с недостаточностью питания - 40%</li>
                  <li style={{ color: '#7b0223' }}>Другая форма - 5%</li>
              </ul>
          </div>
          {status && <Text text={status} align={'center'}/>}
          <div className={cls.btns}>
              <Button type="submit" variant="contained" endIcon={<CreateIcon />}>Сохранить</Button>
          </div>
      </form>
  );
});

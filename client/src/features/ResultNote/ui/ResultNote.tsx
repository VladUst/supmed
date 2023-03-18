import React, { memo, useState } from 'react';
import { classNames, Text } from '../../../shared';
import cls from './ResultNote.module.scss';
import CreateIcon from '@mui/icons-material/Create';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
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
          <div className={cls.wrapper}>
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
          {status && <Text text={status} align={'center'}/>}
          <div className={cls.btns}>
              <Button type="submit" variant="contained" endIcon={<CreateIcon />}>Сохранить</Button>
          </div>
      </form>
  );
});

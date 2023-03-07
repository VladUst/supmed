import React, { memo, useState } from 'react';
import { classNames } from '../../../shared';
import cls from './ResultNote.module.scss';
import CreateIcon from '@mui/icons-material/Create';
import { Button, TextField } from '@mui/material';
interface ResultNoteProps {
  className?: string
}
export const ResultNote = memo((props: ResultNoteProps) => {
  const { className } = props;
  const [doctor, setDoctor] = useState<string>('');
  const [symptoms, setSymptoms] = useState<string>('');
  const [diagnosis, setDiagnosis] = useState<string>('');
  const [details, setDetails] = useState<string>('');
  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // fetch('/some-api', { metshod: form.method, body: formData });
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
              value={details}
              placeholder={'Подробное описание'}
              onChange={e => { setDetails(e.target.value); }}
              rows={2}
              cols={40}
          />
          <div className={cls.btns}>
              <Button type="submit" variant="contained" endIcon={<CreateIcon />}>Сохранить</Button>
          </div>
      </form>
  );
});

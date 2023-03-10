import React, { memo, useState } from 'react';
import { classNames } from '../../../shared';
import cls from './ProcessAnamnesis.module.scss';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';

interface ProcessAnamnesisProps {
  className?: string
}
export const ProcessAnamnesis = memo((props: ProcessAnamnesisProps) => {
  const { className } = props;
  const [text, setText] = useState<string>('');
  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(text);
    // fetch('/some-api', { method: form.method, body: formData });
  }

  return (
      <form className={classNames(cls.ProcessAnamnesis, {}, [className])}
            method="post"
            onSubmit={handleSubmit}
      >
          <label>Введите анамнез:</label>
          <textarea
                value={text}
                onChange={e => { setText(e.target.value); }}
                rows={5}
                cols={40}
            />
          <div className={cls.btns}>
              <Button type="reset" variant="outlined" color="error" onClick={e => { setText(''); }}>Очистить</Button>
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>Обработать</Button>
          </div>
      </form>
  );
});

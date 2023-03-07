import cls from './DiseasesDignostic.module.scss';
import { classNames } from '../../../shared';
import React, { memo, useState } from 'react';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
interface DiseasesDiagnosticProps {
  className?: string
}

export const DiseasesDiagnostic = memo((props: DiseasesDiagnosticProps) => {
  const { className } = props;
  const [text, setText] = useState<string>('');
  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(text);
    // fetch('/some-api', { method: form.method, body: formData });
  }

  return (
      <form className={classNames(cls.DiseasesDiagnostic, {}, [className])}
              method="post"
              onSubmit={handleSubmit}
        >
          <label>Введите перечень симптомов</label>
          <textarea
                value={text}
                onChange={e => { setText(e.target.value); }}
                rows={5}
                cols={40}
            />
          <div className={cls.btns}>
              <Button type="submit"
                      variant="contained"
                      endIcon={<SendIcon />}
                      onClick={e => { setText(''); }}
              >
                  Онтология
              </Button>
              <Button type="submit"
                      variant="contained"
                      endIcon={<SendIcon />}
              >
                  Машинное обучение
              </Button>
          </div>
      </form>
  );
});

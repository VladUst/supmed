import React, { memo, useState } from 'react';
import { classNames } from '../../lib/classNames';
import cls from './TextArea.module.scss';
interface TextAreaProps {
  className?: string
  label: string
  rows: number
  cols: number
}
export const TextArea = memo((props: TextAreaProps) => {
  const { className, label, rows, cols } = props;
  const [text, setText] = useState<string>('');
  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(text);
    // fetch('/some-api', { method: form.method, body: formData });
  }

  return (
      <form className={classNames(cls.TextArea, {}, [className])} method="post" onSubmit={handleSubmit}>
          <label>
              {label}
          </label>
          <textarea
              value={text}
              onChange={e => { setText(e.target.value); }}
              rows={rows}
              cols={cols}
          />
          <div className={cls.btns}>
              <button type="reset" onClick={e => { setText(''); }}>Reset edits</button>
              <button type="submit">Save post</button>
          </div>
      </form>
  );
});

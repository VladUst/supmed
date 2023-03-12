import { memo } from 'react';
import { classNames } from '../../lib/classNames';
import cls from './Text.module.scss';
export type textAlign = 'left' | 'center' | 'right';
interface TextProps {
  className?: string
  title?: string
  text?: string
  align?: textAlign
}

export const Text = memo((props: TextProps) => {
  const { className, text, title, align = 'left' } = props;
  return (
      <div className={classNames(cls.Text, {}, [className, cls[align]])}>
          {title && <h4 className={cls.title}>{title}</h4>}
          {text && <p className={cls.text}>{text}</p>}
      </div>
  );
});

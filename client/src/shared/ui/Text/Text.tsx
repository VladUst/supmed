import { memo } from 'react';
import { classNames } from '../../lib/classNames';
import cls from './Text.module.scss';
interface TextProps {
  className?: string
  title?: string
  text?: string
}

export const Text = memo((props: TextProps) => {
  const { className, text, title } = props;
  return (
      <div className={classNames(cls.Text, {}, [className])}>
          {title && <h4 className={cls.title}>{title}</h4>}
          {text && <p className={cls.text}>{text}</p>}
      </div>
  );
});

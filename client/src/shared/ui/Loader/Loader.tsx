
import cls from './Loader.module.scss';
import { classNames } from '../../lib/classNames';
interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => {
  return (
      <div className={classNames(cls.Loader, {}, [className])}>
          <div/>
          <div/>
          <div/>
          <div/>
      </div>
  );
};

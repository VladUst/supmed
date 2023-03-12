import cls from './PageLoader.module.scss';
import { classNames, Loader } from '../../shared';

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
      <div className={classNames(cls.PageLoader, {}, [className])}>
          <Loader/>
      </div>
  );
};

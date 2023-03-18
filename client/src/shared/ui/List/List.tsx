import cls from './List.module.scss';
import { classNames } from '../../lib/classNames';
interface ListProps<T> {
  className?: string
  items: T[] | undefined
  renderItem: (item: T) => React.ReactNode
}

export function List<T> (props: ListProps<T>) {
  return (
      <div className={classNames(cls.List, {}, [props.className])}>
          {props.items?.map(props.renderItem)}
      </div>
  );
};

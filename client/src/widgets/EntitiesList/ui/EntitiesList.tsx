import {
  List
} from '@mui/material';
import { memo } from 'react';
import { classNames } from '../../../shared';
import cls from './EntititesList.module.scss';
import { type EntityItem, UMLSEntity } from '../../../entities';

interface EntitiesListProps {
  className?: string
  items?: EntityItem[]
}
export const EntitiesList = memo((props: EntitiesListProps) => {
  const { className, items } = props;
  return (
      <List
          className={classNames(cls.EntitiesList, {}, [className])}
          subheader={'Извлеченные сущности'}
      >
          {items?.map((item) => (
              <UMLSEntity key={item.info.CUI} item={item} />
          ))}
      </List>
  );
});

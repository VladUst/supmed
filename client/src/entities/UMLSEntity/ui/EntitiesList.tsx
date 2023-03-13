import {
  List
} from '@mui/material';
import { memo } from 'react';
import { classNames, Text } from '../../../shared';
import cls from './EntititesList.module.scss';
import { type EntityItem, UMLSEntity } from '../../index';

interface EntitiesListProps {
  className?: string
  items?: EntityItem[]
}
export const EntitiesList = memo((props: EntitiesListProps) => {
  const { className, items } = props;
  if (!items?.length) {
    return (
        <Text title={'Сущности не найдены'} align={'center'}/>
    );
  }
  return (
      <div className={classNames(cls.EntitiesList, {}, [className])}>
          <List>
              <Text title={'Извлеченные сущности:'}/>
              {items?.map((item) => (
                  <UMLSEntity key={item.info.CUI} item={item} />
              ))}
          </List>
      </div>
  );
});

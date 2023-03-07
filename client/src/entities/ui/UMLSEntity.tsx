import { type EntityItem } from '../model/EntityItem';
import { memo, useState } from 'react';
import { Collapse, ListItemButton, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import cls from './UMLSEntity.module.scss';
interface UMLSEntityProps {
  className?: string
  item: EntityItem
}
export const UMLSEntity = memo((props: UMLSEntityProps) => {
  const { className, item } = props;
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(open => !open);
  };
  return (
      <>
          <ListItemButton onClick={handleClick}>
              <ListItemText className={cls.titleText} primary={item.name} secondary={`TUI - ${item.TUI}`} />
              {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit className={cls.entityDescription}>
              <div><span>CUI: </span>{item.info?.CUI}</div>
              <div><span>Оригинальное название: </span>{item.info?.originalName}</div>
              <div><span>Определение: </span>{item.info?.definition}</div>
          </Collapse>
          <hr/>
      </>);
});

import { type EntityItem } from '../model/EntityItem';
import { memo, useCallback, useState } from 'react';
import { Collapse, ListItemButton, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import cls from './UMLSEntity.module.scss';
interface UMLSEntityProps {
  className?: string
  item: EntityItem
}
export const UMLSEntity = memo((props: UMLSEntityProps) => {
  const { item } = props;
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(open => !open);
  };
  const checkDangerTUI = useCallback((tui: string) => {
    return tui === 'T047' || tui === 'T184';
  }, []);
  return (
      <>
          <ListItemButton onClick={handleClick}>
              <ListItemText
                  className={checkDangerTUI(item.TUI) ? cls.titleDanger : cls.titleCommon}
                  primary={item.name}
                  secondary={`${item.TUI}`} />
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

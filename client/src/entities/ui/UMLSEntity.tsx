import { type EntityItem } from '../model/EntityItem';
import { memo, useState } from 'react';
import { Collapse, ListItemButton, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface UMLSEntityProps {
  className?: string
  item: EntityItem
}
export const UMLSEntity = memo((props: UMLSEntityProps) => {
  const { className, item } = props;
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(open => !open);
  };
  return (
      <>
          <ListItemButton onClick={handleClick} >
              <ListItemText primary={item.name} secondary={item.TUI} />
              {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
              <div>CUI: {item.info?.CUI}</div>
              <div>Оригинальное название: {item.info?.originalName}</div>
              <div>Определение: {item.info?.definition}</div>
          </Collapse>
      </>);
});

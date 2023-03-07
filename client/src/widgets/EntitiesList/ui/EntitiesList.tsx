import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { memo, useState } from "react";
import { type EntityItem } from "../model/types";
import { UMLSEntity } from "../../../entities";

interface EntitiesListProps {
  className?: string;
  items?: EntityItem[];
}
export const EntitiesList = memo((props: EntitiesListProps) => {
  const { className, items } = props;
  /* const [open, setOpen] = useState(true);

  const handleClick = (CUI: string) => {
    const foundedItem = items?.find(item => item.info.CUI === CUI);
  };
  const listItems = items?.map(item => {
    return (
        <div key={item.info.CUI}>
            <ListItemButton onClick={(e) => { handleClick(item.info.CUI); }} >
                <ListItemText primary={item.name} secondary={item.TUI} />
                {item.open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={item.open} timeout="auto" unmountOnExit>
                <div>CUI: {item.info?.CUI}</div>
                <div>Оригинальное название: {item.info?.originalName}</div>
                <div>Определение: {item.info?.definition}</div>
            </Collapse>
        </div>
    );
  }); */
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      {items?.map((item) => (
        <UMLSEntity key={item.info.CUI} item={item} />
      ))}
    </List>
  );
});

import { memo, useState } from 'react';
import { Button, Collapse, ListItemButton, ListItemText } from '@mui/material';
import cls from './DiagnosticTablesList.module.scss';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { type ICDListItemType } from '../model/types';
import { type ICDSectionType } from '../../ICDDiagnosis';
import { DiagnosticTable } from './DiagnosticTable';
import { type GridColDef, type GridRenderCellParams, useGridApiContext } from '@mui/x-data-grid';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';

function SelectEditInputCell (props: GridRenderCellParams) {
  const { id, value, field } = props;
  const apiRef = useGridApiContext();

  const handleChange = async (event: SelectChangeEvent) => {
    await apiRef.current.setEditCellValue({ id, field, value: event.target.value });
    apiRef.current.stopCellEditMode({ id, field });
  };

  return (
      <Select
            value={value}
            onChange={handleChange}
            size="small"
            sx={{ height: 1 }}
            native
            autoFocus
        >
          <option>Низкое</option>
          <option>Среднее</option>
          <option>Высокое</option>
      </Select>
  );
}

const renderSelectEditInputCell: GridColDef['renderCell'] = (params) => {
  return <SelectEditInputCell {...params} />;
};

const blockTableColumns = [
  {
    field: 'parameter',
    headerName: 'Признак/Влияние',
    editable: true,
    width: 170
  },
  {
    field: 'E10',
    headerName: 'I типа',
    renderEditCell: renderSelectEditInputCell,
    editable: true,
    width: 100
  },
  {
    field: 'E11',
    headerName: 'II типа',
    renderEditCell: renderSelectEditInputCell,
    editable: true,
    width: 100
  },
  {
    field: 'E12',
    headerName: 'Связанный с недостаточностью питания',
    renderEditCell: renderSelectEditInputCell,
    editable: true,
    width: 180
  },
  {
    field: 'E13',
    headerName: 'Другая форма',
    renderEditCell: renderSelectEditInputCell,
    editable: true,
    width: 120
  }
];

const blockTableRows = [
  {
    id: 1,
    parameter: 'Кетоацидоз',
    E10: 'Высокое',
    E11: 'Среднее',
    E12: 'Среднее',
    E13: 'Высокое'
  },
  {
    id: 2,
    parameter: 'Полипноэ',
    E10: 'Низкое',
    E11: 'Высокое',
    E12: 'Среднее',
    E13: 'Высокое'
  },
  {
    id: 3,
    parameter: 'Полифагия',
    E10: 'Высокое',
    E11: 'Высокое',
    E12: 'Высокое',
    E13: 'Среднее'
  }
];

const BlockItem = ({ block }: { block: ICDSectionType }) => {
  const [isBlockOpen, setIsBlockOpen] = useState(false);
  const handleBlockClick = () => {
    setIsBlockOpen(open => !open);
  };
  return (
      <div className={cls.blockItemWrapper}>
          <ListItemButton onClick={handleBlockClick}>
              <ListItemText
                  className={cls.itemText}
                  primary={block.name}
                  secondary={block.description} />
              {isBlockOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isBlockOpen} timeout="auto" unmountOnExit>
              <div className={cls.blockTableWrapper}>
                  <DiagnosticTable height={300} rows={blockTableRows} columns={blockTableColumns}/>
                  <Button
                      className={cls.rulesBtn}
                      variant="outlined"
                  >
                      Задать правила вывода
                  </Button>
              </div>

          </Collapse>
      </div>
  );
};

const chapterTableColumns = [
  {
    field: 'parameter',
    headerName: 'Признак/Влияние',
    editable: true,
    width: 170
  },
  {
    field: 'E00E07',
    headerName: 'E00-E07',
    renderEditCell: renderSelectEditInputCell,
    editable: true,
    width: 120
  },
  {
    field: 'E10E14',
    headerName: 'E10-E14',
    renderEditCell: renderSelectEditInputCell,
    editable: true,
    width: 120
  },
  {
    field: 'E15E16',
    headerName: 'E15-E16',
    renderEditCell: renderSelectEditInputCell,
    editable: true,
    width: 120
  },
  {
    field: 'E20E35',
    headerName: 'E20-E35',
    renderEditCell: renderSelectEditInputCell,
    editable: true,
    width: 120
  }
];

const chapterTableRows = [
  {
    id: 1,
    parameter: 'Возраст',
    E00E07: 'Высокое',
    E10E14: 'Высокое',
    E15E16: 'Высокое',
    E20E35: 'Высокое'
  },
  {
    id: 2,
    parameter: 'Пол',
    E00E07: 'Среднее',
    E10E14: 'Высокое',
    E15E16: 'Высокое',
    E20E35: 'Высокое'
  },
  {
    id: 3,
    parameter: 'Ожирение',
    E00E07: 'Среднее',
    E10E14: 'Низкое',
    E15E16: 'Высокое',
    E20E35: 'Высокое'
  },
  {
    id: 4,
    parameter: 'Уровень тиреотропного гормона',
    E00E07: 'Низкое',
    E10E14: 'Низкое',
    E15E16: 'Высокое',
    E20E35: 'Высокое'
  }
];

interface DiagnosticTablesListProps {
  className?: string
  item: ICDListItemType
}
export const DiagnosticTablesList = memo((props: DiagnosticTablesListProps) => {
  const { item } = props;
  const [isChapterOpen, setIsChapterOpen] = useState(false);
  const handleChapterClick = () => {
    setIsChapterOpen(open => !open);
  };
  return (
      <>
          <ListItemButton onClick={handleChapterClick}>
              <ListItemText
                    className={cls.itemText}
                    primary={`Глава ${item.name}`}
                    secondary={item.description} />
              {isChapterOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isChapterOpen} timeout="auto" unmountOnExit>
              <DiagnosticTable height={400} rows={chapterTableRows} columns={chapterTableColumns}/>
              {item.blocks?.map((block) => (
                  <BlockItem key={block.name} block={block}/>
              ))}
          </Collapse>
          <hr/>
      </>);
});

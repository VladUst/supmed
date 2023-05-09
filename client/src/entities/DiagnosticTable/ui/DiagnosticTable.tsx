import * as React from 'react';
import cls from './DiagnosticTable.module.scss';
import {
  DataGrid
} from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button } from '@mui/material';

function EditToolbar () {
  return (
      <div className={cls.btnWrapper}>
          <Button
            size="small"
            endIcon={<AddIcon/>}
        >
              Добавить
          </Button>
          <Button
            size="small"
            color="error"
            endIcon={<DeleteIcon/>}
        >
              Удалить
          </Button>
      </div>
  );
}

export interface DiagnosticTableColumns {
  field: string
  headerName: string
  renderEditCell?: any
  editable: boolean
  width: number
}
export interface DiagnosticTableProps {
  height: number
  rows: any[]
  columns: DiagnosticTableColumns[]
}
export function DiagnosticTable (props: DiagnosticTableProps) {
  return (
      <div style={{ height: props.height, width: '100%' }}>
          <DataGrid rows={props.rows} columns={props.columns} slots={{
            toolbar: EditToolbar
          }}/>
      </div>
  );
}

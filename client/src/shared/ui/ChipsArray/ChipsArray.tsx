import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

export interface ChipData {
  label: string
}
interface ChipsArrayProps {
  data: ChipData[]
  deleteHandler: (chipToDelete: ChipData) => () => void
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5)
}));

export const ChipsArray = ({ data, deleteHandler }: ChipsArrayProps) => {
  return (
      <Paper
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              listStyle: 'none',
              p: 0.5,
              m: 0
            }}
            component="ul"
            elevation={0}
        >
          {data.map((item) => {
            return (
                <ListItem key={item.label}>
                    <Chip
                        label={item.label}
                        onDelete={deleteHandler(item)}
                    />
                </ListItem>
            );
          })}
      </Paper>
  );
};

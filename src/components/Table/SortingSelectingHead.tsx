import React from 'react';
// import { visuallyHidden } from '@material-ui/utils';
import {
  Box,
  Checkbox,
  TableRow,
  TableCell,
  TableHead,
  TableSortLabel
} from '@material-ui/core';

type SortingSelectingHeadProps = {
  orderBy: string;
  rowCount: number;
  numSelected: number;
  onRequestSort: (property: string) => void;
  onSelectAllClick: (checked: boolean) => void;
  order: 'asc' | 'desc';
  headLabel: {
    id: string;
    numeric: boolean;
    disablePadding: boolean;
    label: string;
  }[];
};

export default function SortingSelectingHead({
  order,
  orderBy,
  rowCount,
  headLabel,
  numSelected,
  onRequestSort,
  onSelectAllClick
}: SortingSelectingHeadProps) {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            // @ts-ignore
            onChange={(event: any, checked: any) => onSelectAllClick(checked)}
            inputProps={{
              'aria-label': 'select all desserts'
            }}
          />
        </TableCell>
        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={() => onRequestSort(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span">
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

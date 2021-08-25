// import React, { useState } from 'react';
// import {
//   Box,
//   Table,
//   Switch,
//   Checkbox,
//   TableRow,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TablePagination,
//   FormControlLabel
// } from '@material-ui/core';
// import SortingSelectingHead from './SortingSelectingHead';
// import SortingSelectingToolbar from './SortingSelectingToolbar';
// import Scrollbar from '@components/Scrollbar';

// function createData(
//   name: string,
//   calories: number,
//   date: string,
// ) {
//   return { name, calories, date };
// }

// const SORTING_SELECTING_TABLE = [
//   createData('Cupcake', "", 1628750706),
//   createData('Donut', 452, 25.0, 51, 4.9),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
//   createData('Honeycomb', 408, 3.2, 87, 6.5),

//   createData('Oreo', 437, 18.0, 63, 4.0)
// ];

// type SortItem = {
//   name: string;
//   calories: number;
//   fat: number;
//   carbs: number;
//   protein: number;
// };

// const TABLE_HEAD = [
//   {
//     id: 'name',
//     numeric: false,
//     disablePadding: true,
//     label: '内容'
//   },
//   {
//     id: 'calories',
//     numeric: true,
//     disablePadding: true,
//     label: '类型'
//   },
//   {
//     id: 'date',
//     numeric: true,
//     disablePadding: true,
//     label: '操作时间'
//   }
// ];

// type Anonymous = Record<string | number, string>;

// function descendingComparator(a: Anonymous, b: Anonymous, orderBy: string) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order: string, orderBy: string) {
//   return order === 'desc'
//     ? (a: Anonymous, b: Anonymous) => descendingComparator(a, b, orderBy)
//     : (a: Anonymous, b: Anonymous) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array: SortItem[], comparator: (a: any, b: any) => number) {
//   const stabilizedThis = array.map((el, index) => [el, index] as const);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// export default function SortingSelecting() {
//   const [order, setOrder] = useState<'asc' | 'desc'>('asc');
//   const [orderBy, setOrderBy] = useState('calories');
//   const [selected, setSelected] = useState<string[]>([]);
//   const [page, setPage] = useState(0);
//   const [dense, setDense] = useState(false);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleRequestSort = (property: string) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (checked: boolean) => {
//     if (checked) {
//       const newSelecteds = SORTING_SELECTING_TABLE.map((n) => n.name);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (name: string) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected: string[] = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       );
//     }
//     setSelected(newSelected);
//   };

//   const handleChangePage = (newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const isSelected = (name: string) => selected.indexOf(name) !== -1;

//   // Avoid a layout jump when reaching the last page with empty SORTING_SELECTING_TABLE.
//   const emptyRows =
//     page > 0
//       ? Math.max(0, (1 + page) * rowsPerPage - SORTING_SELECTING_TABLE.length)
//       : 0;

//   return (
//     <div>
//       <SortingSelectingToolbar numSelected={selected.length} />

//       <Scrollbar>
//         <TableContainer sx={{ minWidth: 800 }}>
//           <Table size={dense ? 'small' : 'medium'}>
//             <SortingSelectingHead
//               order={order}
//               orderBy={orderBy}
//               headLabel={TABLE_HEAD}
//               numSelected={selected.length}
//               onRequestSort={handleRequestSort}
//               rowCount={SORTING_SELECTING_TABLE.length}
//               onSelectAllClick={handleSelectAllClick}
//             />
//             <TableBody>
//               {stableSort(
//                 SORTING_SELECTING_TABLE,
//                 getComparator(order, orderBy)
//               )
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => {
//                   const isItemSelected = isSelected(row.name);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                       hover
//                       onClick={(event) => handleClick(row.name)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={row.name}
//                       selected={isItemSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox checked={isItemSelected} />
//                       </TableCell>
//                       <TableCell
//                         component="th"
//                         id={labelId}
//                         scope="row"
//                         padding="none"
//                       >
//                         {row.name}
//                       </TableCell>
//                       <TableCell align="right">{row.calories}</TableCell>
//                       <TableCell align="right">{row.fat}</TableCell>
//                       <TableCell align="right">{row.carbs}</TableCell>
//                       <TableCell align="right">{row.protein}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: (dense ? 33 : 53) * emptyRows
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={SORTING_SELECTING_TABLE.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={(e, page) => handleChangePage(page)}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Scrollbar>
//     </div>
//   );
// }



import * as React from 'react';
import {tools} from '@utils/index'
import { DataGrid } from '@material-ui/data-grid';
const formatDateTime = tools.formatDateTime;

const columns = [
  { field: 'content', headerName: '内容', width: 300, align:'center', headerAlign: 'center' },
  { field: 'actionType', headerName: '类型', width: 300, align:'center', headerAlign: 'center'  },
  { field: 'actionTime', headerName: '操作时间', width: 300, align:'center', valueGetter: (params: { actionTime: number; }) => formatDateTime(params.actionTime)},
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 200,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
  //     }`,
  // },
];

function createData(
  id: number,
  content: string,
  actionType: string,
  actionTime: number
  // actionTime: <T>(key: number) => string
  // actionTime: formatDateTime(key: number)(),
) {
  return { id, content, actionType, actionTime };
}

const rows = [
  createData(1, "Create Account", 'USER_ACTION', formatDateTime(1628750796)),
];

const rows1 = [
  // createData('Create Account', "", 1628750706),
  {
      "id": 2,
      "content":"Create Account",
      "actionType":"USER_ACTION",
      "actionTime":1628750796
  },
  {
    "id": 3,
      "content":"Login to bunker",
      "actionType":"USER_ACTION",
      "actionTime":1628750799
  },
  {
    "id": 4,
      "content":"Authorized to login Platform",
      "actionType":"USER_ACTION",
      "actionTime":1628750804
  },
  {
    "id": 5,
      "content":"Create Dataset, id 3",
      "actionType":"USER_ACTION",
      "actionTime":1628750891
  },
  {
    "id": 6,
      "content":"Upload csv file",
      "actionType":"UPLOAD",
      "actionTime":1628751019
  },
  {
    "id": 7,
      "content":"Import Data",
      "actionType":"IMPORT",
      "actionTime":1628751024
  },
  {
    "id": 8,
      "content":"Bind Category",
      "actionType":"USER_ACTION",
      "actionTime":1628751094
  },
  {
    "id": 9,
      "content":"Publish Dataset, dataset id 3, datatable id 1",
      "actionType":"USER_ACTION",
      "actionTime":1628751111
  },
  {
    "id": 10,
      "content":"Login to bunker",
      "actionType":"USER_ACTION",
      "actionTime":1629869330
  },
  {
    "id": 11,
      "content":"Login to bunker",
      "actionType":"USER_ACTION",
      "actionTime":1629870298
  }
]

export default function DataTable() {
  const [size, setSize] = React.useState(5);
  const [page, setPage] = React.useState(0);
  
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangePageSize = (
    size: number
  ) => {
    setSize(size);
  };

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={size}
        checkboxSelection
        // key={key}
        // loading={true}
        rowsPerPageOptions={[5, 10, 25]}
        onPageChange={handleChangePage}
        onPageSizeChange={handleChangePageSize}
        page={page}
      />
    </div>
  );
}

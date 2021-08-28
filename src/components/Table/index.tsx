import * as React from 'react';
import {
  DataGrid,
  GridValueGetterParams,
  GridValueFormatterParams,
} from '@material-ui/data-grid';
import moment from 'moment'
import Label from '@components/Label'

function getFullName(params: GridValueGetterParams) {
  // return `${params.getValue(params.content, 'content') || ''} ${
  //   params.getValue(params.content, 'content') || ''
  // }`;
  // getValue: (id: GridRowId, field: string) => GridCellValue;
  const content = (params.value as string)
  return content
  // return <span>{content}</span>
}

const columns = [
  {
    field: 'content',
    headerName: '内容',
    width: 300,
    align: 'center',
    headerAlign: 'center',
    // valueGetter: getFullName,
  },
  {
    field: 'actionType',
    headerName: '类型',
    width: 300,
    align: 'center',
    headerAlign: 'center',
    valueGetter: getFullName,
    // valueFormatter: (params: GridValueFormatterParams) => {
    //   const actionType = params.value;
    //   return (
    //     <Label>{actionType}</Label>
    //   )
    // },
    // valueGetter: (params: GridValueFormatterParams) => {
    //   const data = (params.value as string)
    //   // const content = (params.value as string)
    //   return <span>{data}</span>
    //   // return <Label
    //   //   variant='ghost'
    //   //   color='success'
    //   //   >
    //   //   Free
    //   // </Label>
    // },
    // Label
  },
  {
    field: 'actionTime',
    headerName: '操作时间',
    width: 300,
    align: 'center',
    headerAlign: 'center',
    valueFormatter: (params: GridValueFormatterParams) => {
      const actionTime = params.value;
      const data: any = (actionTime * 1000) as unknown as string
      const valueFormatted = moment(
        parseInt(data)
      ).format('YYYY/MM/DD hh:mm:ss')
      // moment(parseInt(text * 1000)).format('YYYY/MM/DD hh:mm:ss')
      return `${valueFormatted}`;
    },
  }
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

const rows1 = [
  // createData(1, "Create Account", 'USER_ACTION', formatDateTime(1628750796)),
];

const rows = [
  // createData('Create Account', "", 1628750706),
  {
    "id": 2,
    "content": "Create Account",
    "actionType": "USER_ACTION",
    "actionTime": 1628750796
  },
  {
    "id": 3,
    "content": "Login to bunker",
    "actionType": "USER_ACTION",
    "actionTime": 1628750799
  },
  {
    "id": 4,
    "content": "Authorized to login Platform",
    "actionType": "USER_ACTION",
    "actionTime": 1628750804
  },
  {
    "id": 5,
    "content": "Create Dataset, id 3",
    "actionType": "USER_ACTION",
    "actionTime": 1628750891
  },
  {
    "id": 6,
    "content": "Upload csv file",
    "actionType": "UPLOAD",
    "actionTime": 1628751019
  },
  {
    "id": 7,
    "content": "Import Data",
    "actionType": "IMPORT",
    "actionTime": 1628751024
  },
  {
    "id": 8,
    "content": "Bind Category",
    "actionType": "USER_ACTION",
    "actionTime": 1628751094
  },
  {
    "id": 9,
    "content": "Publish Dataset, dataset id 3, datatable id 1",
    "actionType": "USER_ACTION",
    "actionTime": 1628751111
  },
  {
    "id": 10,
    "content": "Login to bunker",
    "actionType": "USER_ACTION",
    "actionTime": 1629869330
  },
  {
    "id": 11,
    "content": "Login to bunker",
    "actionType": "USER_ACTION",
    "actionTime": 1629870298
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
        // @ts-ignore
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

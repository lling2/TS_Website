import React, {
  FC,
  useEffect,
  useState
} from 'react'
// import Table from '@components/Table'
import Step from '@components/Step'
import ComboBox from '@components/ComboBox';
import {
  Button,
  TextField,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Card,
  Grid,
  Container,
  CardHeader,
  CardContent
} from '@material-ui/core'
import {
  createStyles,
  makeStyles,
  Theme,
  styled
} from '@material-ui/core/styles';
import Table from '@components/Table';

const ButtonSytle = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 1)
}));

const CardContentStyle = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end'
}))
// const SearchStyle = styled(Box)(({ theme }) => ({
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'block',
      marginTop: theme.spacing(0, 1),
    },
    formControl: {
      margin: '0 auto',
      minWidth: 450,
    },
  }),
);

const steps = [
  '选择数据集',
  '选择数据源',
  '展示数据'
];
const Import: FC<{}> = () => {
  const classes = useStyles();
  const [dataset, setDataset] = useState('');
  const [stepNumber, setStepNumber] = useState(0)

  const handleChangeDataset = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log(event.target.value, 'event.target.value')
    setDataset(event.target.value as string);
  };

  const renderContent = (data: number) => {
    // return <Button variant='contained'>{data}</Button>
    if (data === 0) {
      return renderSelectDataset();
    } else if (data === 1) {
      return renderUploadWays();
    } else if (data === 2) {
      return renderFinalDatas();
    } else {
      return <Button>data</Button>
    }
  };

  const handleUpload = (type: string, action: string): void => {
    console.log(1)
  };

  const UploadWays = [
    {
      name: 'CSV',
      actions: [
        '导入',
      ]
    },
    {
      name: 'Mysql',
      actions: [
        '导入',
        '测试'
      ]
    }
  ]
  const renderUploadWays = () => {
    return (
      <Grid container spacing={3}>
        {
          UploadWays && UploadWays.map(item =>  
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader 
                  title={item['name']} 
                  variant="subtitle2"
                />
                <CardContentStyle dir="ltr">
                  {
                    item['actions'].map(it => (
                      <ButtonSytle 
                        variant="outlined"
                        onclick={handleUpload(item['name'], it)}
                      >
                        {it}
                      </ButtonSytle>
                    ))
                  }
                </CardContentStyle>
              </Card>
            </Grid>
          )
        }
      </Grid>  
    )
  }

  const renderFinalDatas = () => {
    return (
      <Table></Table>
    )
  }

  useEffect(() => {

  }, [])

  const top100Films = [
    { title: 'dataset1', value: 1994 },
    { title: 'dataset2', value: 1972 },
    { title: 'dataset3', value: 1974 },
  ]

  const handleIsNextStep = (stepNumber: number) => {
    setStepNumber(stepNumber)
    if(stepNumber === 0) {
      // 校验dataset
      console.log(dataset, 999)
      return dataset as unknown as boolean
    } else if(stepNumber === 1) {
      // 校验上传类型

    }
  }

  const renderSelectDataset = () => (
    <Grid item xs={12} md={12} lg={12}>
      <TextField
        select
        fullWidth
        required
        size="small"
        value={dataset}
        variant="outlined"
        label="dataset"
        SelectProps={{ native: true }}
        onChange={handleChangeDataset}
        helperText="Please select your dataset"
      >
        {top100Films.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </TextField>
    </Grid>
  )

  return <Step
    stepsTitleArr={steps}
    renderContent={renderContent}
    handleIsNextStep={handleIsNextStep}
  />
}

export default Import;
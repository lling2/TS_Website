import React, { 
    useState, 
    ReactNode,
    FC, 
    memo
} from 'react';
import {
  Box,
  Step,
  Paper,
  Button,
  Stepper,
  StepLabel,
  Typography
} from '@material-ui/core';
import { JsxElement } from 'typescript';

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad'
];
interface StepProps {
    stepsTitleArr: string[],
    renderContent: (data: number) => React.ReactElement | HTMLElement,
    handleIsNextStep: (data: number) => boolean
};

const LinearAlternativeLabel: FC<StepProps> = ({
    renderContent,
    stepsTitleArr=steps,
    handleIsNextStep
}: StepProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const isStepOptional = (step: number) => step === 1;

  const handleNext = () => {
    console.log(activeStep, 'activeStep')
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    handleIsNextStep(activeStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Stepper activeStep={activeStep} alternativeLabel>
        {stepsTitleArr.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          return (
            <Step 
                key={label} 
                {...stepProps}
            >
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === stepsTitleArr.length ? (
        <>
          <Box sx={{ p: 3, my: 3, minHeight: 120, bgcolor: '#fff' }} style={{margin: '0 auto', width: '80%'}}>
            {renderContent(activeStep)}
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Box sx={{ flexGrow: 1 }} />
            <Button onClick={handleReset}>上一步</Button>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ p: 3, my: 3, minHeight: 100, bgcolor: '#fff' }}>
            <Box style={{margin: '0 auto', width: '80%'}}>
                {renderContent(activeStep)}
            </Box>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ flexGrow: 1 }} />
            <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
            >
                上一步
            </Button>
            <Button 
                variant="contained" 
                onClick={handleNext}
            >
            {activeStep === stepsTitleArr.length - 1 ? '完成' : '下一步'}
            </Button>
        </Box>
        </>
      )}
    </>
  );
}

export default memo(LinearAlternativeLabel)
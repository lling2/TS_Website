import React, { useState } from 'react';
import {
    Box,
    Step,
    Paper,
    Button,
    Stepper,
    StepLabel,
    Typography
} from '@material-ui/core';

const steps = [
    '选择数据集',
    '选择数据源',
    '展示数据'
];

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set<number>());

    const isStepSkipped = (step: number) => skipped.has(step);

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    //   if (isStepOptional(index)) {
                    //     labelProps.optional = (
                    //       <Typography variant="caption">Optional</Typography>
                    //     );
                    //   }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <>
                    <Paper sx={{ p: 3, my: 3, minHeight: 120, bgcolor: 'grey.50012' }}>
                        <Typography sx={{ my: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                    </Paper>

                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ flexGrow: 1 }} />
                        <Button onClick={handleReset}>上一步</Button>
                    </Box>
                </>
            ) : (
                <>
                    <Paper
                        sx={{ p: 3, my: 3, minHeight: 120, bgcolor: 'grey.50012' }}
                    >
                        <Typography sx={{ my: 1 }}>
                            Step {activeStep + 1}
                        </Typography>
                    </Paper>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ flexGrow: 1 }} />
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            上一步
                        </Button>
                        <Button variant="contained" onClick={handleNext}>
                            {activeStep === steps.length - 1 ? '完成' : '下一步'}
                        </Button>
                    </Box>
                </>
            )}
        </>
    );
}

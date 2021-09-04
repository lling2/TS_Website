import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { 
  alpha, 
  styled 
} from '@material-ui/core/styles';
import { 
  Box, 
  Icon 
} from '@material-ui/core';
import Logo from '../Logo';

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
}));

type Props = {
  type: 'img';
  imgSrc: string; // 支持icon/img
  imgHeight: number;
};

const LoadingScreen: FC<Props> = ({ imgHeight = 64, imgSrc, type = 'img' }: Props) => (
  <RootStyle>
    <motion.div
      initial={{ rotateY: 0 }}
      animate={{ rotateY: 360 }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        repeatDelay: 1,
        repeat: Number.POSITIVE_INFINITY,
      }}
    >
      {type === 'img' ? <Logo height={imgHeight} src={imgSrc} /> : <Icon />}
    </motion.div>

    <motion.div
      transition={{
        ease: 'linear',
        duration: 3.2,
        repeat: Number.POSITIVE_INFINITY,
      }}
      animate={{
        scale: [1.2, 1, 1, 1.2, 1.2],
        rotate: [270, 0, 0, 270, 270],
        opacity: [0.25, 1, 1, 1, 0.25],
        borderRadius: ['25%', '25%', '50%', '50%', '25%'],
      }}
    >
      <Box
        component={motion.div}
        style={{
          transition: 'linear 3.2',
        }}
        sx={{
          width: 100,
          height: 100,
          borderRadius: '25%',
          position: 'absolute',
          border: (theme) => `solid 3px ${alpha(theme.palette.primary.dark, 0.24)}`,
        }}
      />
    </motion.div>
    <motion.div
      animate={{
        scale: [1, 1.2, 1.2, 1, 1],
        rotate: [0, 270, 270, 0, 0],
        opacity: [1, 0.25, 0.25, 0.25, 1],
        borderRadius: ['25%', '25%', '50%', '50%', '25%'],
      }}
      transition={{
        ease: 'linear',
        duration: 3.2,
        repeat: Number.POSITIVE_INFINITY,
      }}
    >
      <Box
        component={motion.div}
        sx={{
          width: 120,
          height: 120,
          borderRadius: '25%',
          position: 'absolute',
          border: (theme) => `solid 8px ${alpha(theme.palette.primary.dark, 0.24)}`,
        }}
      />
    </motion.div>
  </RootStyle>
);

export default LoadingScreen;
export type { Props as LoadingScreenProps };
/*
 * @Author: your name
 * @Date: 2021-08-25 11:22:45
 * @LastEditTime: 2021-09-04 12:59:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_demo/apps/project/src/components/Scrollbar.tsx
 */
import React from 'react';
import SimpleBarReact, { Props } from 'simplebar-react';
// material
import { 
  alpha,
  styled 
} from '@material-ui/core/styles';
import { 
  Box,
  BoxProps
} from '@material-ui/core';

const RootStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden'
}));

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48)
    },
    '&.simplebar-visible:before': {
      opacity: 1
    }
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    // height: 6
  },
  '& .simplebar-mask': {
    zIndex: 'inherit'
  }
}));

// ----------------------------------------------------------------------

export default function Scrollbar({
  children,
  sx,
  ...other
}: BoxProps & Props) {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <RootStyle>
      <SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </SimpleBarStyle>
    </RootStyle>
  );
}
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import closeFill from '@iconify/icons-eva/close-fill';
import { 
  Box,
  Drawer,
  Tooltip,
  Divider,
  Typography,
  Button
} from '@material-ui/core';
// import {
//   MIconButton,
//   MFab
// } from '../@material-extend';
// import SvgIconStyle from '../SvgIconStyle';
// import SettingDirection from './SettingDirection';

const DRAWER_WIDTH = 260;

export default function Settings() {
  const [open, setOpen] = useState(false);

  const handleOpenSettings = () => {
    setOpen(true);
  };

  const handleCloseSettings = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        style={{
          marginTop: '64px'
        }}
        sx={{
          position: 'fixed',
          marginTop: '64px',
          bottom: { xs: 16, sm: 24, md: 32 },
          right: { xs: 16, sm: 24, md: 32 },
          zIndex: 999999,
        }}
      >
        <Tooltip title="Settings">
          <Button
            onClick={handleOpenSettings}
          >
            打开
          </Button>
          {/* <MFab
            color="warning"
            size="medium"
            onClick={handleOpenSettings}
            // sx={{
            //   color: (theme) => theme.palette.warning.contrastText,
            //   background: (theme) => theme.palette.gradients.warning
            // }}
          >
            <SvgIconStyle
              src="/static/icons/controls/settings.svg"
              sx={{ width: 16, height: 16 }}
            />
          </MFab> */}
        </Tooltip>
      </Box>

      <Drawer
        open={open}
        anchor="right"
        onClose={handleCloseSettings}
        // sx={{ zIndex: 1999, backgroundColor: '#fff' }}
        // PaperProps={{
        //   // sx: { width: DRAWER_WIDTH }
        // }}
        // style={{
        //   marginTop: '64px'
        // }}
      >
        <Box
          sx={{
            py: 2,
            pr: 1,
            pl: 2.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
          style={{width: '400px', marginTop: '64px'}}
        >
          <Typography variant="subtitle1">
            Settings
          </Typography>
          <Button onClick={handleCloseSettings}>
            <Icon icon={closeFill} width={20} height={20} />
          </Button>
        </Box>
        <Divider />
        <Box sx={{ pt: 3, px: 3 }}>
          form表单
        </Box>
      </Drawer>
    </>
  );
}
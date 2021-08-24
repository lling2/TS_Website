import React, {FC} from 'react';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import closeFill from '@iconify/icons-eva/close-fill';
import {
  Button,
  Box,
  Drawer,
  Tooltip,
  Divider,
  Typography
} from '@material-ui/core';

const DRAWER_WIDTH = 260;
const Settings:FC<{}> = () => {
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
        sx={{
          position: 'fixed',
          bottom: { xs: 16, sm: 24, md: 32 },
          right: { xs: 16, sm: 24, md: 32 },
          zIndex: 999
        }}
      >
        <Button
          onClick={handleOpenSettings}
        >
          打开
        </Button>
      </Box>

      <Drawer
        open={open}
        anchor="right"
        onClose={handleCloseSettings}
        // sx={{ zIndex: 1999 }}
        PaperProps={{
          // sx: { width: DRAWER_WIDTH }
        }}
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
        >
          <Typography variant="subtitle1">Settings</Typography>
          <Button onClick={handleCloseSettings}>
            <Icon
              icon={closeFill}
              width={20}
              height={20}
            />
          </Button>
        </Box>
        <Divider />

        <Box sx={{ pt: 3, px: 3 }}>
          <Box sx={{ my: 3 }} />
          <Typography variant="subtitle2">
            form表单
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

export default React.memo(Settings);
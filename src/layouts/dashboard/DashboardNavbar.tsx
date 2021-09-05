/*
 * @Author: your name
 * @Date: 2021-08-31 14:22:49
 * @LastEditTime: 2021-09-04 14:18:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vision/apps/yuri-core/src/layouts/dashboard/DashboardNavbar.tsx
 */
import React from 'react';
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
import { 
  alpha, 
  styled 
} from '@material-ui/core/styles';
import { 
  Box, 
  AppBar, 
  Hidden, 
  Toolbar, 
  IconButton 
} from '@material-ui/core';
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  // backgroundColor: '#eee',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

type DashboardNavbarProps = {
  onOpenSidebar: VoidFunction;
};

export default function DashboardNavbar({
  onOpenSidebar
}: DashboardNavbarProps) {
  return (
    <RootStyle>
      <ToolbarStyle>
        <Hidden lgUp>
          <IconButton
            onClick={onOpenSidebar}
            // sx={{ mr: 1, color: 'text.primary' }}
          >
            <Icon icon={menu2Fill} />
          </IconButton>
        </Hidden>

        <Box sx={{ flexGrow: 1 }} />
        
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Searchbar />
          <LanguagePopover />
          {/* <NotificationsPopover /> */}
          <AccountPopover />
        </Box>
      </ToolbarStyle>
    </RootStyle>
  );
}

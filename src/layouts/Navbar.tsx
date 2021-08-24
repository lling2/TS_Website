/*
 * @Author: your name
 * @Date: 2021-08-23 15:00:40
 * @LastEditTime: 2021-08-24 19:05:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_demo/apps/project/src/layouts/Navbar.tsx
 */

import React from 'react';
import { Icon } from '@iconify/react';
// import { Link } from 'react-router-dom';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import { 
  alpha,
  styled 
} from '@material-ui/core/styles';
import {
  Box,
  Button,
  AppBar,
  Hidden,
  Toolbar,
  IconButton
} from '@material-ui/core';
// components
import Logo from '../components/Logo';
// routes
// import { PATH_DASHBOARD } from '..//routes/paths';

const APPBAR_HEIGHT = 64;

const RootStyle = styled(AppBar)(({ theme }) => ({
  zIndex: 2,
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  // boxShadow: theme.customShadows.z8,
  color: theme.palette.text.primary,
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('md')]: { zIndex: 1999 }
}));

type DocsNavbarProps = {
  onOpenSidebar: VoidFunction;
};

export default function Navbar({ onOpenSidebar }: DocsNavbarProps) {
  return (
    <RootStyle>
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            onClick={onOpenSidebar}
            color="inherit"
          >
            <Icon icon={menu2Fill} />
          </IconButton>
        </Hidden>

        <Hidden mdDown>
          {/* <RouterLink to="/"> */}
            <Logo />
          {/* </RouterLink> */}
        </Hidden>

        <Box sx={{ flexGrow: 1 }} />

        <Button
          // disableRipple
          // to='/'
          // // to={PATH_DASHBOARD.root}
          // // component={<Button/>}
          // endIcon={<Icon icon={arrowIosForwardFill} />}
        >
          Dashboard
        </Button>
      </Toolbar>
    </RootStyle>
  );
}

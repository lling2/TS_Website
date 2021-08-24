import React from 'react';
import { Icon } from '@iconify/react';;
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
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
import Logo from '../components/Logo';

const APPBAR_HEIGHT = 64;
const RootStyle = styled(AppBar)(({ theme }) => ({
  zIndex: 1,
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  // boxShadow: theme.customShadows.z8,
  color: theme.palette.text.primary,
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('md')]: { zIndex: 1300 }
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
          <Logo />
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

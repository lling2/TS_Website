/*
 * @Author: your name
 * @Date: 2021-08-23 14:59:28
 * @LastEditTime: 2021-08-24 18:28:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_demo/apps/project/src/layouts/index.tsx
 */
import React, {
  ReactNode,
  useState
} from 'react';
import { styled } from '@material-ui/core/styles';
import {
  Box
} from '@material-ui/core';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Settings from '../components/settings/index'

type DocsLayoutProps = {
  children: ReactNode;
};

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  // backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up('md')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));
export default function Layout({ children }: DocsLayoutProps) {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', minHeight: '100%', overflow: 'hidden' }}>
      <Navbar
        onOpenSidebar={() => setOpen(true)}
      />
      <Sidebar
        onCloseSidebar={() => setOpen(false)}
        isOpenSidebar={open}
      />
      <MainStyle>
        <Settings />
        {children}
      </MainStyle>
    </Box>
  );
}
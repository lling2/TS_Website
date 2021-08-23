/*
 * @Author: your name
 * @Date: 2021-08-23 14:59:28
 * @LastEditTime: 2021-08-23 16:33:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_demo/apps/project/src/layouts/index.tsx
 */
import React, {
    ReactNode,
    useState
} from 'react';
import {
    Container,
    Box
} from '@material-ui/core';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

type DocsLayoutProps = {
  children: ReactNode;
};
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

      <Container
        maxWidth="md"
        // sx={{
        //   my: 15,
        //   flexGrow: 1,
        //   overflow: 'auto',
        //   minHeight: '100%'
        // }}
      >
        {children}
        1111
      </Container>
    </Box>
  );
}
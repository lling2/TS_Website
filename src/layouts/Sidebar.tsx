import React, { ReactNode, useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import {
  Box,
  Link,
  List,
  Avatar,
  Drawer,
  Hidden,
  Typography,
  ListSubheader
} from '@material-ui/core';
import Logo from '@components/Logo';
import Scrollbar from '@components/Scrollbar';
import MenuLinks from './SidebarConfig';
import SidebarItem from './SidebarItem';

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    // width: DRAWER_WIDTH,
    width: '280px'
  }
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5) || '20px',
  margin: theme.spacing(1, 2.5, 5),
  color: '#212B36',
  backgroundColor: '#eee',
  borderRadius: theme.shape.borderRadiusSm || '4px',
  // backgroundColor: theme.palette.grey[500_12] || '#eee'
}));

type TNavItem = {
  icon?: ReactNode;
  info?: ReactNode;
  href: string;
  title: string;
  items?: TNavItem[];
};

type ReduceChildParams = {
  array: ReactNode[];
  item: TNavItem;
  pathname: string;
  level: number;
};

type renderNavItemParams = {
  items: TNavItem[];
  pathname: string;
  level?: number;
};

function renderSidebarItems({
  items,
  pathname,
  level = 0
}: renderNavItemParams) {
  return (
    <List disablePadding>
      {items.reduce<ReactNode[]>(
        (array, item) => reduceChild({ array, item, pathname, level }),
        []
      )}
    </List>
  );
}

type NavBarProps = {
  isOpenSidebar?: boolean;
  onCloseSidebar?: VoidFunction;
};

export default function DashboardSidebar({
  isOpenSidebar,
  onCloseSidebar
}: NavBarProps) {
  // const router = useRouter();
  // const pathname = router.pathname;

  useEffect(() => {
    if (isOpenSidebar && onCloseSidebar) {
      onCloseSidebar();
    }
  }, []);

  const renderContent = (
    <Scrollbar style={{width: '280px'}}>
      <Box sx={{ px: 2.5, py: 3 }}>
        {/* <NextLink href="/" passHref> */}
          <Logo />
        {/* </NextLink> */}
      </Box>
      {/* <Link href="#" passHref> */}
        <Link underline="none">
          <AccountStyle>
            <Avatar
              alt="My Avatar"
              src="/static/mock-images/avatars/avatar_default.jpg"
            />
            <Box sx={{ ml: 2 }}>
              {/* <Typography variant="subtitle2" sx={{ color: 'text.primary' }}> */}
              <Typography variant="subtitle2">
                displayName
              </Typography>
              {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}> */}
              <Typography variant="body2">
                role
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
    </Scrollbar>
  );

  return (
    <RootStyle>
      <Hidden lgUp>
        <Drawer
          style={{width: '280px'}}
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          // PaperProps={{
          //   sx: { width: DRAWER_WIDTH }
          // }}
        >
          {renderContent}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          open
          variant="persistent"
          style={{
            width: '280px'
          }}
          // PaperProps={{
          //   sx: { width: DRAWER_WIDTH, bgcolor: 'background.default' }
          // }}
        >
          {renderContent}
        </Drawer>
      </Hidden>
    </RootStyle>
  );
}
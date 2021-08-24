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
import typography from '../theme/typography';
import SidebarItem from './SidebarItem';

const DRAWER_WIDTH = 100;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
    margin: theme.spacing(20, 0, 0),
  }
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  margin: theme.spacing(4, 2.5, 5),
  borderRadius: '4px',
  backgroundColor: '#eee'
}));

const ListItemStyle = styled(Box)(({ theme }) => ({
  ...typography.subtitle1
}))

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

function reduceChild({ array, item, pathname, level }: ReduceChildParams) {
  const key = item.href + level;
  if (item.items) {
    const match = pathname.includes(item.href);

    return [
      ...array,
      <SidebarItem
        key={key}
        level={level}
        icon={item.icon}
        info={item.info}
        href={item.href}
        title={item.title}
        open={Boolean(match)}
      >
        {renderSidebarItems({
          pathname,
          level: level + 1,
          items: item.items
        })}
      </SidebarItem>
    ];
  }
  return [
    ...array,
    <SidebarItem
      key={key}
      level={level}
      href={item.href}
      icon={item.icon}
      info={item.info}
      title={item.title}
    />
  ];
}

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

export default function Sidebar({
  isOpenSidebar,
  onCloseSidebar
}: NavBarProps) {
  const pathname = '';

  useEffect(() => {
    if (isOpenSidebar && onCloseSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const renderContent = (
    <Scrollbar>
      <Box sx={{ px: 2.5, py: 3 }}>
        <Logo />
      </Box>
      <AccountStyle>
        <Avatar
          alt="My Avatar"
        // src="/static/mock-images/avatars/avatar_default.jpg"
        />
        <Box sx={{ ml: 2 }}>
          <Typography
            variant="subtitle2">
            displayName
          </Typography>
          <Typography
            variant="body2"
          >
            Admin
          </Typography>
        </Box>
      </AccountStyle>

      {MenuLinks.map((list) => (
        <List
          disablePadding
          key={list.subheader}
          subheader={
            <ListItemStyle
              // disableSticky
              // disableGutters
              style={{
                ...typography.subtitle1
              }}
              sx={{
                mt: 3,
                mb: 2,
                pl: 5,
                color: 'text.primary',
                // typography: 'overline'
              }}
            >
              {list.subheader}
            </ListItemStyle>
          }
        >
          {renderSidebarItems({
            items: list.items,
            pathname
          })}
        </List>
      ))}
    </Scrollbar>
  );

  return (
    <RootStyle>
      <Hidden mdUp>
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            // sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          open={true}
          variant="persistent"
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

/*
 * @Author: your name
 * @Date: 2021-08-23 15:09:08
 * @LastEditTime: 2021-08-23 16:32:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_demo/apps/project/src/layouts/a.tsx
 */
import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
// material
import {
  alpha,
  styled 
} from '@material-ui/core/styles';
import {
  ListItem,
  ListItemText
} from '@material-ui/core';
// theme
import typography from '../theme/typography';

// ----------------------------------------------------------------------

const ListItemStyle = styled(ListItem)(({ theme }) => ({
  ...typography.body2,
  height: 44,
  textTransform: 'capitalize',
  padding: theme.spacing(0, 2),
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  '&.isActive': {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    )
  }
}));

// ----------------------------------------------------------------------

type TLink = {
  href: string;
  title: string;
  info?: JSX.Element;
};

type NavItemProps = {
  link: TLink;
};

export default function SidebarItem({ link }: NavItemProps) {
  const { href, title, info } = link;

  return (
    <ListItemStyle
      // @ts-ignore
      exact
      button
      to={href}
      disableGutters
      // component={RouterLink}
      activeClassName="isActive"
    >
      <ListItemText disableTypography>{title} </ListItemText>
      {info && info}
    </ListItemStyle>
  );
}
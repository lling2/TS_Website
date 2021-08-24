/*
 * @Author: your name
 * @Date: 2021-08-23 15:09:08
 * @LastEditTime: 2021-08-24 19:12:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_demo/apps/project/src/layouts/a.tsx
 */
import React, {ReactNode} from 'react';
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

const ListItemStyle = styled(ListItem)(({ theme }) => ({
  ...typography.body2,
  height: 30,
  textTransform: 'capitalize',
  padding: theme.spacing(1, 4, 1, 6),
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

type NavItemProps = {
  level: number;
  title: string;
  href?: string;
  info?: ReactNode;
  icon?: ReactNode;
  open?: boolean;
  children?: ReactNode;
  className?: string;
};

export default function SidebarItem({ 
  level,
  title,
  href,
  info,
  icon,
  open = false,
  children,
  className
 }: NavItemProps) {

  return (
    <ListItemStyle
      // @ts-ignore
      exact="true"
      button
      to={href}
      disableGutters
      // component={RouterLink}
      activeClassName="isActive"
    >
      <ListItemText disableTypography>
        {title}
      </ListItemText>
      {info && info}
    </ListItemStyle>
  );
}
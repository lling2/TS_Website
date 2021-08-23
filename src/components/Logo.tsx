/*
 * @Author: your name
 * @Date: 2021-08-23 15:02:51
 * @LastEditTime: 2021-08-23 15:03:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_demo/apps/project/src/components/Logo.tsx
 */
import React from 'react';
import {
    Box,
    BoxProps
} from '@material-ui/core';

export default function Logo(props: BoxProps) {
  return (
    <Box
      component="img"
      alt="logo"
      src="/static/brand/logo_single.svg"
      height={40}
      {...props}
    />
  );
}

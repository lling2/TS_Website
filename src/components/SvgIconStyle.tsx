/*
 * @Author: your name
 * @Date: 2021-08-31 14:22:49
 * @LastEditTime: 2021-09-04 13:03:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vision/apps/yuri-core/src/components/SvgIconStyle.tsx
 */
import {
    Box,
    BoxProps
  } from '@material-ui/core';
  
  interface SvgIconStyleProps extends BoxProps {
    src: string;
  }
  
  export default function SvgIconStyle({
    src,
    color = 'inherit',
    sx
  }: SvgIconStyleProps) {
    return (
      <Box
        component="span"
        sx={{
          width: 24,
          height: 24,
          WebkitMask: `url(${src}) no-repeat center / contain`,
          bgcolor: `${color}.main`,
          ...(color === 'inherit' && { bgcolor: 'currentColor' }),
          ...(color === 'action' && { bgcolor: 'action.active' }),
          ...(color === 'disabled' && { bgcolor: 'action.disabled' }),
          ...(color === 'paper' && { bgcolor: 'background.paper' }),
          ...sx
        }}
      />
    );
  }
  
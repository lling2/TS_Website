/*
 * @Author: your name
 * @Date: 2021-08-17 13:53:41
 * @LastEditTime: 2021-08-17 18:49:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vision/apps/yuri-core/src/components/@material-extend/MSwitch.tsx
 */
import { alpha, useTheme } from '@material-ui/core/styles';
import { Switch, SwitchProps } from '@material-ui/core';

interface MSwitchProps extends Omit<SwitchProps, 'color'> {
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
}

export default function MSwitch({
  color = 'primary',
  ...other
}: MSwitchProps) {
  const theme = useTheme();

  if (color === 'default' || color === 'primary' || color === 'secondary') {
    return <Switch color={color} {...other} />;
  }

  return (
    <Switch
      {...other}
    />
  );
}

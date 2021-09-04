import React from 'react';
import { 
    alpha, 
    styled 
} from '@material-ui/core/styles';
import { 
    Popover, 
    PopoverProps 
} from '@material-ui/core';

const ArrowStyle = styled('span')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    top: -6,
    zIndex: 1,
    width: 12,
    right: 20,
    height: 12,
    content: "''",
    position: 'absolute',
    borderRadius: '0 0 4px 0',
    display: 'online-block',
    // transform: 'translateY(10px) rotate(-135deg)',
    transform: 'rotate(45deg)',
    // background: theme.palette.background.paper,
    background: "red",
    borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
    borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
    // transform: translateY(4.24264069px) rotate(
    //   45deg
    // );
  }
}));

export default function MenuPopover({ children, ...other }: PopoverProps) {
  return (
    <Popover
      keepMounted
      // getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      style={{paddingTop: 10}}
      // PaperProps={{
      //   sx: {
      //     mt: 1.5,
      //     ml: 0.5,
      //     overflow: 'inherit',
      //     boxShadow: (theme) => theme.customShadows.z20,
      //     border: (theme) => `solid 1px ${theme.palette.grey[500_8]}`,
      //     width: 200,
      //     ...sx
      //   }
      // }}
      {...other}
    >
      <ArrowStyle />
      {children}
    </Popover>
  );
}

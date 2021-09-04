import { forwardRef } from 'react';
import { 
  useTheme, 
  makeStyles, 
  Theme 
} from '@material-ui/core/styles';
import { 
  Avatar, 
  AvatarProps 
} from '@material-ui/core';

type AvatarColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

export enum size {
  xs, sm, md, lg
}

export interface MAvatarProps extends AvatarProps {
  color?: AvatarColor;
  children: React.ReactNode,
  sx: size
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: 'red',
  },
}));

const MAvatar = forwardRef<HTMLDivElement, MAvatarProps>(
  ({ color = 'default', children, sx=size.xs, ...other }, ref) => {
    const theme = useTheme();
    // const style = {
    //   fontWeight: theme.typography.fontWeightMedium,
    //   backgroundColor: 'red'
    //   // color: theme.palette[color].contrastText,
    //   // backgroundColor: theme.palette[color].main,
    //   // ...sx
    // }
    const classes = useStyles({
      sx
    });
    if (color === 'default') {
      return (
        <Avatar 
          ref={ref} 
          // sx={sx} 
          // size={style}
          {...other}
          className={classes.root}
        >
          {children}
        </Avatar>
      );
    }
    return (
      <Avatar
        ref={ref}
        component="span"
        className={classes.root}
        // sx={{
        //   fontWeight: theme.typography.fontWeightMedium,
        //   color: theme.palette[color].contrastText,
        //   backgroundColor: theme.palette[color].main,
        //   ...sx
        // }}
        {...other}
      >
        {children}
      </Avatar>
    );
  }
);

export default MAvatar;


/*
 * @Desc: 
 * @Author: botter
 * @Date: 2021-08-16 11:03:17
 * @LastEditors: Seven
 * @LastEditTime: 2021-08-16 11:07:34
 */
// import { forwardRef } from 'react';
// import { useTheme } from '@material-ui/core/styles';
// import { Avatar, AvatarProps } from '@material-ui/core';

// type AvatarColor =
//   | 'default'
//   | 'primary'
//   | 'secondary'
//   | 'info'
//   | 'success'
//   | 'warning'
//   | 'error';

// export interface MAvatarProps extends AvatarProps {
//   color?: AvatarColor;
//   children: React.ReactNode
// }

// const MAvatar: React.FC<MAvatarProps> = forwardRef(
//   ({ color = 'default', children, ...other }, ref) => {
//     const theme = useTheme();
//     if (color === 'default') {
//       return (
//         <Avatar 
//           ref={ref} 
//           {...other} 
//         >
//           {children}
//         </Avatar>
//       );
//     }
//     return (
//       <Avatar 
//         ref={ref} 
//         {...other}
//       >
//         {children}
//       </Avatar>
//     );
//   }
// );

// export default MAvatar;



/*
 * @Desc: 
 * @Author: botter
 * @Date: 2021-08-16 11:03:17
 * @LastEditors: Seven
 * @LastEditTime: 2021-08-16 11:54:09
 */
// import { forwardRef } from 'react';
// import { useTheme } from '@material-ui/core/styles';
// import { Avatar, AvatarProps } from '@material-ui/core';

// type AvatarColor =
//   | 'default'
//   | 'primary'
//   | 'secondary'
//   | 'info'
//   | 'success'
//   | 'warning'
//   | 'error';

// const enum size {
//     xs,
//     sm,
//     md
// }

// export interface MAvatarProps extends AvatarProps {
//   color?: AvatarColor;
//   sx: size
// }

// // const useStyles = makeStyles((theme: Theme) => ({
// //     root: {
// //       backgroundColor: 'red',
// //     },
// //   }));

// const MAvatar = forwardRef<HTMLDivElement, MAvatarProps>(
//   ({ color = 'default', children, sx = size.xs, ...other }, ref) => {
//     // const classes = useStyles({
//     //     sx
//     // });
//     const theme = useTheme();
//     return (
//         <Avatar ref={ref} className={classes.root} {...other}>
//             {children}
//          </Avatar>
//     );
//   }
// );

// export default MAvatar;



// let mySum = function (x: number, y: number): number {
//   return x + y;
// };


// let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
//   return x + y;
// };

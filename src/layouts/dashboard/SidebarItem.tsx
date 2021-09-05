// import React, { ReactNode, useState }  from 'react';
// import {
//   NavLink,
//   useLocation,
//   useHistory,
//   Router
// } from "react-router-dom";
// import { Icon } from '@iconify/react';
// import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// import { 
//   alpha, 
//   styled 
// } from '@material-ui/core/styles';
// import {
//   Box,
//   Collapse,
//   ListItem,
//   ListItemIcon,
//   ListItemText
// } from '@material-ui/core';
// // theme
// import typography from '../../theme/typography';
// // import { useRouter } from 'next/router';

// const ListItemStyle = styled(ListItem)(({ theme }) => ({
//   ...typography.body2,
//   height: 48,
//   textTransform: 'capitalize',
//   paddingLeft: theme.spacing(5),
//   paddingRight: theme.spacing(2.5),
//   color: theme.palette.text.secondary,
//   '&.isActiveRoot': {
//     color: theme.palette.primary.main,
//     fontWeight: theme.typography.fontWeightMedium,
//     backgroundColor: alpha(
//       theme.palette.primary.main,
//       theme.palette.action.selectedOpacity
//     ),
//     '&:before': {
//       top: 0,
//       right: 0,
//       width: 3,
//       bottom: 0,
//       content: "''",
//       position: 'absolute',
//       backgroundColor: theme.palette.primary.main
//     }
//   },
//   '&.isActiveSub': {
//     color: theme.palette.text.primary,
//     fontWeight: theme.typography.fontWeightMedium,
//     '& .subIcon:before': {
//       transform: 'scale(2)',
//       backgroundColor: theme.palette.primary.main
//     }
//   }
// }));

// const SubIconStyle = styled('span')(({ theme }) => ({
//   width: 22,
//   height: 22,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'right',
//   '&:before': {
//     width: 4,
//     height: 4,
//     content: "''",
//     display: 'block',
//     borderRadius: '50%',
//     backgroundColor: theme.palette.text.disabled,
//     transition: theme.transitions.create('transform')
//   }
// }));

// type NavItemProps = {
//   level: number;
//   title: string;
//   href?: string;
//   info?: ReactNode;
//   icon?: ReactNode;
//   open?: boolean;
//   children?: ReactNode;
//   className?: string;
// };

// export default function SidebarItem({
//   level,
//   title,
//   href,
//   info,
//   icon,
//   open = false,
//   children,
//   className
// }: NavItemProps) {
//   // const { pathname } = useRouter();

//   const [show, setShow] = useState(open);
//   const isSubItem = level > 0;

//   const handleShow = () => {
//     setShow((show) => !show);
//   };

//   if (children) {
//     return (
//       <>
//         <ListItemStyle
//           button
//           disableGutters
//           onClick={handleShow}
//           className={open ? 'isActiveRoot' : ''}
//         >
//           <ListItemIcon>{icon && icon}</ListItemIcon>
//           <ListItemText disableTypography primary={title} />
//           {info && info}
//           <Box
//             component={Icon}
//             icon={show ? arrowIosDownwardFill : arrowIosForwardFill}
//             sx={{ width: 16, height: 16, ml: 1 }}
//           />
//         </ListItemStyle>

//         <Collapse in={show}>{children}</Collapse>
//       </>
//     );
//   }
//   // const ListItemClassName =
//     // pathname === href ? (isSubItem ? 'isActiveSub' : 'isActiveRoot') : '';
//     // pathname = '';

//   return (
//     // // <NextLink href={href || ''} passHref>
//     //   // <ListItemStyle button disableGutters className={ListItemClassName}>
//     //   <ListItemStyle button disableGutters>
//     //     <ListItemIcon style={{width: '40%'}}>
//     //       {/* {isSubItem ? <SubIconStyle /> : icon} */}
//     //     </ListItemIcon>
//     //     <ListItemText disableTypography primary={title} />
//     //     {info && info}
//     //   </ListItemStyle>
//     // // </NextLink>


//     <ListItemStyle
//       // @ts-ignore
//       exact="true"
//       button
//       to={href}
//       disableGutters
//       // component={RouterLink}
//       activeClassName="isActive"
//     >
//       {/* <ListItemText disableTypography>
//         {title}
//       </ListItemText> */}
//       <NavLink
//         className="nav-item"
//         activeClassName="nav-item_act"
//         to={href}
//         key={href}
//         style={}
//       >
//         {title}
//       </NavLink>
//       {info && info}
//     </ListItemStyle>
//   );
// }

import React, { 
  ReactNode, 
  useState 
} from 'react';
import { Icon } from '@iconify/react';
import NextLink from 'next/link';
import { NavLink as RouterLink } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// material
import { 
  alpha, 
  styled 
} from '@material-ui/core/styles';
import {
  Box,
  Collapse,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import typography from '../../theme/typography';
import {
  useLocation,
  Route
} from "react-router";


const ListItemStyle = styled(ListItem)(({ theme }) => ({
  ...typography.body2,
  height: 48,
  textTransform: 'capitalize',
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary,
  '&.isActiveRoot': {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
    '&:before': {
      top: 0,
      right: 0,
      width: 3,
      bottom: 0,
      content: "''",
      position: 'absolute',
      backgroundColor: theme.palette.primary.main
    }
  },
  '&.isActiveSub': {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium,
    '& .subIcon:before': {
      transform: 'scale(2)',
      backgroundColor: theme.palette.primary.main
    }
  }
}));

const SubIconStyle = styled('span')(({ theme }) => ({
  width: 22,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 70,
  justifyContent: 'flex-end',
  paddingRight: 20,
  '&:before': {
    width: 4,
    height: 4,
    content: "''",
    display: 'block',
    borderRadius: '50%',
    backgroundColor: theme.palette.text.disabled,
    transition: theme.transitions.create('transform')
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
  const location = useLocation();
  const [show, setShow] = useState(open);
  const isSubItem = level > 0;

  const handleShow = () => {
    setShow((show) => !show);
  };

  if (children) {
    return (
      <>
        <ListItemStyle
          button
          disableGutters
          onClick={handleShow}
          className={open ? 'isActiveRoot' : ''}
        >
          <ListItemIcon>{icon && icon}</ListItemIcon>
          <ListItemText disableTypography primary={title} />
          {info && info}
          <Box
            component={Icon}
            icon={show ? arrowIosDownwardFill : arrowIosForwardFill}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>

        <Collapse in={show}>{children}</Collapse>
      </>
    );
  }
  console.log(location, 'location---', href, 'href')
  const { pathname } = location
  const ListItemClassName = pathname === href ? (isSubItem ? 'isActiveSub' : 'isActiveRoot') : '';

  return (
    <Route 
      // key={key}
      path={href}
      // exact={exact}
    >
      <ListItemStyle button disableGutters className={ListItemClassName}>
        <ListItemIcon>
          {isSubItem ? <SubIconStyle className="subIcon" /> : icon}
        </ListItemIcon>
        <ListItemText disableTypography primary={title} />
        {info && info}
      </ListItemStyle>
    </Route>
  );
}

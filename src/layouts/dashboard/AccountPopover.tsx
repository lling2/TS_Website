import React from 'react';
import { Icon } from '@iconify/react';
import { 
    useRef, 
    useState 
} from 'react';
// import NextLink from 'next/link';
import homeFill from '@iconify/icons-eva/home-fill';
import personFill from '@iconify/icons-eva/person-fill';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';
import { alpha } from '@material-ui/core/styles';
import {
    Link,
  Box,
  Avatar,
  Button,
  Divider,
  MenuItem,
  Typography
} from '@material-ui/core';
import { MIconButton } from '../../components/@material-extend';
import MenuPopover from '../../components/MenuPopover';
// import { MIconButton } from '../../components/@material-extend';
// import MenuPopover from '../../components/MenuPopover';

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: homeFill,
    linkTo: '/'
  },
  {
    label: 'Profile',
    icon: personFill,
    linkTo: '#'
  },
  {
    label: 'Settings',
    icon: settings2Fill,
    linkTo: '#'
  }
];

export default function AccountPopover() {
  const anchorRef = useRef(null);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MIconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        <Avatar
          alt="My Avatar"
          src="/static/mock-images/avatars/avatar_default.jpg"
        />
      </MIconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            displayName
          </Typography>
          <Typography variant="body2" noWrap>
            email
          </Typography>
        </Box>

        <Divider />

        {MENU_OPTIONS.map((option) => (
          <Link key={option.label} href={option.linkTo}>
            <MenuItem
              onClick={handleClose}
              sx={{ typography: 'body2', py: 1, px: 2.5 }}
            >
              <Box
                component={Icon}
                icon={option.icon}
                sx={{
                  mr: 2,
                  width: 24,
                  height: 24
                }}
              />

              {option.label}
            </MenuItem>
          </Link>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth color="inherit" variant="outlined">
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}

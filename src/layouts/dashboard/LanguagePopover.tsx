import React, { useRef, useState } from 'react';
import { 
  Box, 
  MenuItem, 
  ListItemIcon, 
  ListItemText 
} from '@material-ui/core';
import MenuPopover from '../../components/MenuPopover';
import { MIconButton } from '../../components/@material-extend';

const LANGS = [
  {
    value: 'en',
    label: 'English',
    icon: 'public/static/icons/ic_flag_en.svg'
  }
];

export default function LanguagePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <MIconButton
        ref={anchorRef}
        onClick={() => setOpen(true)}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && { bgcolor: 'action.selected' })
        }}
      >
        <img src={LANGS[0].icon} alt={LANGS[0].label} />
      </MIconButton>

      <MenuPopover
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={anchorRef.current}
      >
        <Box sx={{ py: 1 }}>
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === LANGS[0].value}
              onClick={() => setOpen(false)}
              sx={{ py: 1, px: 2.5 }}
            >
              <ListItemIcon>
                <Box component="img" alt={option.label} src={option.icon} />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
                {option.label}
              </ListItemText>
            </MenuItem>
          ))}
        </Box>
      </MenuPopover>
    </>
  );
}
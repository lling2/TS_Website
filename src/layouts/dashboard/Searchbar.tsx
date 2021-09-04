import React from 'react';
import { Icon } from '@iconify/react';
import searchFill from '@iconify/icons-eva/search-fill';
import { 
  styled, 
  alpha
} from '@material-ui/core/styles';
import {
  Box,
  Input,
  Button,
  InputAdornment,
} from '@material-ui/core';

const SearchbarStyle = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  padding: theme.spacing(0.5, 3),
  borderRadius: theme.spacing(2),
  margin: theme.spacing(0, 2),
  border: 'solid 1px #fff',
  backgroundColor: `${alpha(theme.palette.background.default, 0.98)}`,
  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(0, 2, 0, 0),
  }
}));

export default function Searchbar() {
  const handleClose = () => {

  };

  return (
    <>
      <SearchbarStyle>
        <Input
          autoFocus
          fullWidth
          disableUnderline
          placeholder="Search…"
          onChange={handleClose}
          startAdornment={
            <InputAdornment position="start">
              <Box
                component={Icon}
                icon={searchFill}
                sx={{ color: 'text.disabled', width: 20, height: 20 }}
              />
            </InputAdornment>
          }
          // sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
        />
        {/* <Button variant="contained" onClick={handleClose}>
          Search
        </Button> */}
      </SearchbarStyle>
    </>
  );
}

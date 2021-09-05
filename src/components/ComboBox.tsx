import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

type ComboBoxProps = {
  label: string,
  placeholder: string,
  onhandleChange: Function,
  options: {
    title: string;
    year: number;
  }[],
  value: string
};

export default function ComboBox({ 
  options, 
  label,
  placeholder,
  onhandleChange,
  value
}: ComboBoxProps) {
  return (
    <Autocomplete
      fullWidth
      style={{margin: '20px auto'}}
      options={options}
      value={value}
      placeholder={placeholder}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField {...params} label={label} margin="none" />
      )}
    />
  );
}

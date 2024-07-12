import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function EntityKeySelect() {
  const [key, setKey] = React.useState<string | undefined>('');
  const [isSelectActive, setIsSelectActive] = React.useState(false);

  const handleDoubleClick = () => {
    setIsSelectActive(true);
    console.log("Active drop down");
    console.log(isSelectActive);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setKey(event.target.value as string);
    setIsSelectActive(false);
  };


  //sx={{ minWidth: 120 }}
  return (
    <Box bgcolor={'lightblue'}>
      <FormControl fullWidth>
        <InputLabel id="key-select-label">Key</InputLabel>
        <Select
          labelId="key-select-label"
          id="key-select"
          value={key}
          label="Key"
          onChange={handleChange}
          onDoubleClick={handleDoubleClick}
          open={isSelectActive}
        >
          <MenuItem value={' '}> </MenuItem>
          <MenuItem value={'PK'}>PK</MenuItem>
          <MenuItem value={'FK'}>FK</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

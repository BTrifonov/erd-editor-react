import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

interface EntityNameProps { 
    entityId: number;
    entityName: string | null; 
    handleEntityNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

export default function EntityName({ entityName, handleEntityNameChange }: EntityNameProps) {
  const [isSelectActive, setIsSelectActive] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleDoubleClick = () => {
    setIsSelectActive(true);
    console.log("Active text menu");
    console.log(isSelectActive);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <Box
      sx={{
        maxWidth: '100%',
      }}
      bgcolor={'blue'}
    >
      <FormControl>
        <TextField 
          fullWidth 
          label="Entity name" 
          id="fullWidth"
          value={entityName}
          onChange={handleEntityNameChange}
          onDoubleClick={handleDoubleClick}
          inputRef={inputRef} // Attach the ref to the TextField
        />
      </FormControl>
    </Box>
  );
}

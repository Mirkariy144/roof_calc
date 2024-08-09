import { Button } from '@mui/material';
import React from 'react';

interface AddNewItemButtonProps {
  name: string;
  variant?: 'contained' | 'outlined' | 'text';
  handler?: () => void;
}

export const AddNewItemButton = ({
  name,
  handler,
  variant,
}: AddNewItemButtonProps) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <Button variant={variant} onClick={handler}>
        {name}
      </Button>
    </div>
  );
};

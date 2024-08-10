import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { JunctionLayers } from './JunctionLayers';
import { TextField } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const SelectJunction = ({ setJunctionLayers, junctionLayers }: any) => {
  const _ = require('lodash');

  const [JunctionLayer, setJunctionLayer] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof JunctionLayer>) => {
    const {
      target: { value },
    } = event;
    setJunctionLayer(typeof value === 'string' ? value.split(',') : value);
    const selectedRoofLayers = _.cloneDeep(
      JunctionLayers.filter((item: { name: string; layerId: number }) =>
        value.includes(item.name)
      )
    );
    setJunctionLayers((prevData: any) => [...prevData, ...selectedRoofLayers]);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 500, mt: 3 }}>
        <Select
          displayEmpty
          value={JunctionLayer}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Выберите новый слой кровли</em>;
            }
            return selected;
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {JunctionLayers.map((item: { name: string; layerId: number }) => (
            <MenuItem key={item.name} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

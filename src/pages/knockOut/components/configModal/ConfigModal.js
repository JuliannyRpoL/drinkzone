import React from 'react'
import { useState } from 'react';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import "./styles.scss";

const ConfigModal = (props) => {
  const { checked, setChecked } = props

  console.log(checked)

  const handleChange = (event) => {
    const level = event.target.id;
    const index = checked.indexOf(level);
    const newLevels = [...checked];

    if (index > -1) {
      newLevels.splice(index, 1);
    } else {
      newLevels.push(level)
    }

    setChecked(newLevels);
  };

  return (
    <div className='knock-out-modal'>
      <h2 className='knock-out-modal__title'>
        Niveles
      </h2>
      <FormGroup className='knock-out-modal__options'>
        <FormControlLabel control={
          <Checkbox
            id='1'
            color="secondary"
            checked={checked.includes('1')}
            onChange={handleChange}/>
          } label="Relax" />
        <FormControlLabel  control={<Checkbox
            id='2'
            color="secondary"
            checked={checked.includes('2')}
            onChange={handleChange}/>
          } label="Medio" />
        <FormControlLabel  control={<Checkbox
            id='3'
            color="secondary"
            checked={checked.includes('3')}
            onChange={handleChange}/>
          } label="Hard" />
      </FormGroup>
    </div>
  )
}

export default ConfigModal;

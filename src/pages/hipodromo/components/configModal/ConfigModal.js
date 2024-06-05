import React from 'react'
import { useRef } from 'react';

import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';

import Button from '../../../../components/button/button';

import "./styles.scss";

const ConfigModal = (props) => {
  const { players, setPlayers, setModalIsOpen } = props
  const valueRef = useRef('')

  const handleOnClick = () => {
    const newPlayers = valueRef.current.value.replaceAll(' ', '').split(',');

    localStorage.setItem("players", newPlayers);
    setPlayers(newPlayers);
    setModalIsOpen(false);
  }

  return (
    <div className='hipodromo-modal'>
      <h2 className='hipodromo-modal__title'>
        Players
      </h2>

      <FormGroup className='hipodromo-modal__options'>
        <TextField id="outlined-basic" label="" defaultValue={players} variant="outlined" color='secondary' inputRef={valueRef} />
      </FormGroup>

      <Button
        type='primary' onClick={handleOnClick} title='Play'>
      </Button>
    </div>
  )
}

export default ConfigModal;

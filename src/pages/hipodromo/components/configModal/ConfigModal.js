import React from 'react'
import { useRef } from 'react';

import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';

import Button from '../../../../components/button/button';

import "./styles.scss";
import { randomizePlayers } from '../../utils/formatData';

const ConfigModal = (props) => {
  const { players, setPlayers, setModalIsOpen, setCurrentPlayers } = props
  const valueRef = useRef('')
  
  const handleOnClick = () => {
    const newPlayers = valueRef.current.value.replaceAll(' ', '').split(',');

    localStorage.setItem("players", newPlayers);
    setPlayers(newPlayers);
    setCurrentPlayers(randomizePlayers(newPlayers));
    setModalIsOpen(false);
  }

  const handleReset = () => {
    localStorage.removeItem("players");
    setPlayers([]);
    setCurrentPlayers({});
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

      <div className='hipodromo-modal__buttons'>
        <Button
          className='hipodromo-modal__buttons__player'
          type='primary' onClick={handleOnClick} title='Play'>
        </Button>

        <Button
          className='hipodromo-modal__buttons__reset'
          type='secondary' onClick={handleReset} title='Reset'>
        </Button>
      </div>
    </div>
  )
}

export default ConfigModal;

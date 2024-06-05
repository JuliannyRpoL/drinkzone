import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import Button from '../../../components/button/button';
import ConfigModal from '../components/configModal/ConfigModal';
import { getQuestions } from '../../../services/hipodromo';

import "./styles.scss";
import { randomizePlayers } from '../utils/formatData';

const Hipodromo = () => {
  const navigate = useNavigate();
  const [ index, setIndex ] = useState(0);
  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  const [ players, setPlayers ] = useState([]);
  const [ currentPlayers, setCurrentPlayers ] = useState([]);
  const [ questions, setQuestions] = useState([]);

  let question = questions[index];

  const nextQuestion = () => {
    setIndex(index + 1);
    setCurrentPlayers(randomizePlayers(players))
    question = question[index]
  }

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  useEffect(() => {
    const players = localStorage.getItem("players");

    if(!players) {
      setModalIsOpen(true);
    } else {
      const formatPlayers = players.split(',')
      setPlayers(formatPlayers);
      setCurrentPlayers(randomizePlayers(formatPlayers))
    }

    const newQuestions = getQuestions();

    setQuestions(newQuestions);
    setIndex(0);
  }, [])
    
  return (
      <section className="hipodromo">
          <div className="hipodromo__config">
            <Button type='hyperlink' onClick={openModal} title='Conf'>
              <SettingsOutlinedIcon />
            </Button>
          </div>
          {question && (
            <>
              <div className="hipodromo__players">
                <div className="hipodromo__players__player player--red">
                  {currentPlayers.player1}
                </div>
                <div className="hipodromo__players__vs">
                  VS
                </div>
                <div className="hipodromo__players__player player--blue">
                  {currentPlayers.player2}
                </div>
              </div>
              <p className="hipodromo__moderator">moderador: {currentPlayers.moderator}</p>
              <div className="hipodromo__question">
                <p className="hipodromo__question__category">{question.category}</p>
                <p className="hipodromo__question__text">{question.question}</p>
              </div>
              <div className="hipodromo__next">
                  <Button type='primary' onClick={nextQuestion} title='SIGUIENTE'></Button>
              </div>
            </>
          )}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >
            <ConfigModal setPlayers={setPlayers} players={players} setModalIsOpen={setModalIsOpen}/>
          </Modal>
      </section>
    )
}

export default Hipodromo;

import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import Button from '../../../components/button/button';
import ConfigModal from '../components/configModal/ConfigModal';
import { getQuestions } from '../../../services/knockOut';

import "./styles.scss";

const KnockOut = () => {
  const navigate = useNavigate();
  const [ index, setIndex ] = useState(0);
  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  const [ levels, setLevels ] = useState(['1']);
  const [ questions, setQuestions] = useState([]);

  let question = questions[index];

  const nextQuestion = () => {
    setIndex(index + 1);
    question = question[index]
  }

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  useEffect(() => {
    const newQuestions = getQuestions(levels);
    setQuestions(newQuestions);
    setIndex(0);
  }, [levels])
    
  return (
      <section className="knock-out">
          <div className="knock-out__config">
            <Button type='hyperlink' onClick={openModal} title='Conf'>
              <SettingsOutlinedIcon />
            </Button>
          </div>
          {question && (
            <>
              <div className="knock-out__question">
                {question.question}
              </div>
              <div className="knock-out__options">
                  <div className="knock-out__options__option option--red">
                  {question.optionA}
                  </div>
                  <div className="knock-out__options__div">
                    <p className="knock-out__options__div__vs">
                      VS
                    </p>
                  </div>
                  <div className="knock-out__options__option option--blue">
                  {question.optionB}
                  </div>
              </div>
              <div className="knock-out__next">
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
            <ConfigModal setChecked={setLevels} checked={levels}/>
          </Modal>
      </section>
    )
}

export default KnockOut;

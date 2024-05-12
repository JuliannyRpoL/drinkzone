import React from 'react'
import { useNavigate } from "react-router-dom";

import Button from '../../../components/button/button'
import Card from '../../../components/card/card'
import Image from '../../../components/image/image'

import "./styles.scss"

import logo from "../../../assets/logo1.png";

const Home = () => {
  const navigate = useNavigate();

  const onPlay = () => {
    navigate(`/games/knock-out`);
  }
    
  return (
      <section className="home">
          <div className="home__logo">
              <Image size='m' src={logo} alt='logo'></Image>
          </div>
          <div className="home__players">
              <Card>
                <div>
                  Test
                </div>
              </Card>
          </div>
          <div className="home__play">
              <Button type='primary' onClick={onPlay} title='JUGAR'></Button>
          </div>
      </section>
    )
}

export default Home;

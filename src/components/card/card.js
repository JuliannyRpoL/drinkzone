import React from 'react'

import "./styles.scss"

const Card = (props) => {
    const { children } = props;  

    return (
        <div className='dz-card'>
          {children}
        </div>
    )
}

export default Card;

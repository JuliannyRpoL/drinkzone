import React from 'react'
import classNames from 'classnames';

import "./styles.scss"

const namespace = 'dz-button';

const Button = (props) => {
    const { title, onClick, type, children } = props;  

    return (
        <button className={classNames(
          namespace,
          type ? `${namespace}--${type}` : '',
        )} onClick={onClick}>
          {children || title}
        </button>
    )
}

export default Button;

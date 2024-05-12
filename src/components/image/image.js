import React from 'react'
import classNames from 'classnames';

import "./styles.scss"
const namespace = 'dz-image';

const Image = (props) => {
    const { src, alt, size } = props;

    return (
        <img className={classNames(
            namespace,
            size ? `${namespace}--size-${size}` : '',
          )} src={src} alt={alt}>
        </img>
    )
}

export default Image;

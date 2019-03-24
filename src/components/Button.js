import React from 'react';

const Button = (props) => {
    return (
      <button className={props.isAdded ? 'added' : ''} onClick={props.handleClick}>
        {props.isAdded ? 'In cart' : 'Add to cart' }
      </button>
    );
  }

export default Button;
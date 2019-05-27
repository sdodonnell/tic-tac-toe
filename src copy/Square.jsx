import React, { useState } from 'react';
import {ReactComponent as Circle} from './icons/circle.svg';
import {ReactComponent as XMark} from './icons/x.svg';

const Square = props => {

  const [mark, setMark] = useState(null);

  const handleClick = () => {
    if (mark) return;
    setMark(props.currPlayer);
    props.handleClick(props.pos);
  }

  return (
    <div className="square" onClick={() => handleClick()}>
      {
        mark ? 
            mark === "x" ? <XMark /> : <Circle />
            : null
      }
    </div>
  )
}

export default Square;
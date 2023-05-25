import React from 'react';

const Square = (props) => {
    
    return (
        <div onClick={props.onClick}>
            <button className="square">{props.value}</button>
        </div>
    );
}

export default Square;

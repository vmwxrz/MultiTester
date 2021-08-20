import React from 'react';

export default ({onClick})=>{

    return(
        <div className="new-timer" onClick={(e) => onClick()}>
            <img src="./img/add.png" title="Agregar nuevo Timer"/>
        </div>  
    );
}
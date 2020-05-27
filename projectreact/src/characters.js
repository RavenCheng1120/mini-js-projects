import React from 'react';
import "./App.css";
import images from './img/tokio.jpg';

function chara(props){

    return(
        <div className="chara-Section">
            <div className="character-title">
                <h2>Characters</h2>
                <button>Generate</button>
            </div>

            <div className="character-info">
                <img src={images} alt=""/>
                <h3>{props.name}</h3>
            </div>
            
        </div>
    );
}

export default chara;
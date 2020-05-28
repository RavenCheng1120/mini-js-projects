import React, {useState} from 'react';
import "./App.css";
import characterlist from './characterList';

const characterList = ["Silene Oliveira", "Andrés de Fonollosa", "Sergio Marquina"];

function Chara(props){
    const [charaNum, setNumber] = useState(0)

    const handleClick = () => {
        setNumber(Math.floor(Math.random() * 3));
    }

    return(
        <div className="chara-Section">
            <h2>出場角色</h2>
            <div className="generate-btn">
                <button onClick={handleClick}>Random</button>
            </div>

            <div className="character-info">
                <img src={characterlist[charaNum]} alt=""/>
                <h3>{characterList[charaNum]}</h3>
            </div>

        </div>
    );
}

export default Chara;
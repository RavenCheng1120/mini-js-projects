import React from 'react';
import "./App.css";

function paragraph(props){
    const clickMe = () => {
        const url = "https://meijutw.com/player/2285_1.html";
        window.open(url, '_blank');
    }

    return(
        <div className="episode">
            <h2>{props.title}: {props.name}</h2>
            <p>{props.children}</p>
            <button onClick={clickMe}>Watch the episode</button>
        </div>
    );
}

export default paragraph;
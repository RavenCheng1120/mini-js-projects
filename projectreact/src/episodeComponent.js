import React from 'react';
import "./App.css";

function paragraph(props){
    const clickMe = () => {
        console.log("You clicked the button, good job.");
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
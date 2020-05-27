import React from 'react';

function btn(){
    const clickMe = () => {
        console.log("You clicked the button, good job.");
      }

    return(
        <div>
            <h3>This is the second component.</h3>
            <button onClick={clickMe}>Click me too</button>
        </div>
    );
}

export default btn;
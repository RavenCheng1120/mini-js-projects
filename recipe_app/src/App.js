import React,{useEffect, useState} from 'react';
import './App.css';

const App = () => {
  // const APP_ID = '37cb5d41';
  // const APP_KEY = 'd52db8f591a232bae7e09ae4f6f72632';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    console.log('Effect has been run.');
  });

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button type="submit" className="search-btn">搜尋</button>
      </form>
    </div>
  );
}

export default App;

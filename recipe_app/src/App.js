import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
require('dotenv').config();

const App = () => {
  // const API_ID = '37cb5d41';
  // const API_KEY = 'd52db8f591a232bae7e09ae4f6f72632';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    GetRecipes();
  }, []);

  const GetRecipes = async () => {
    const API_ID = process.env.APP_ID;
    const API_KEY = process.env.APP_KEY;
    
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button type="submit" className="search-btn">搜尋</button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;

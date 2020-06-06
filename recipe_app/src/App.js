import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
require('dotenv').config();

const App = () => {
  // const API_ID = '37cb5d41';
  // const API_KEY = 'd52db8f591a232bae7e09ae4f6f72632';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  // update when submit button is clicked
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const API_ID = process.env.APP_ID;
    const API_KEY = process.env.APP_KEY;
    
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const getSearch = (e) => {
    //stop page refresh
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" placeholder="例如：apple" value={search} onChange={updateSearch}/>
        <button type="submit" className="search-btn">搜尋</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            ingredients={recipe.recipe.ingredients}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

const Recipe = ({title, calories, ingredients,image}) => {
    return(
        <div className="recipe-block">
            <h1>{title}</h1>
            <p>Calories: {calories}</p>
            <ol>
                <h4>Ingredients:</h4>
                {ingredients.map(ingredient => (
                    <li key={Math.random()}>{ingredient.text}</li>
                ))}
            </ol>
            <img className="recipe-image" src={image} alt="food"/>
        </div>
    );
};

export default Recipe;
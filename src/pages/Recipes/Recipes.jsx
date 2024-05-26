import React from 'react';
import { Link } from 'react-router-dom';
import './Recipes.scss'; // Add your styles here

import avocadoEggImage from '../../assets/images/recipes/baked-avocado-eggs.png';
import veganMochaYogurt from '../../assets/images/recipes/vegan-mocha-yogurt-bowl.png';

const recipesData = [
    {
        id: 1,
        name: 'Baked Avocado Eggs',
        description: 'A delicious and healthy breakfast option with baked avocado and eggs.',
        imageUrl: avocadoEggImage,
    },
    {
        id: 2,
        name: 'Vegan Mocha Yogurt Bowl',
        description: 'A nutritious and delicious vegan yogurt bowl with a hint of mocha.',
        imageUrl: veganMochaYogurt,
    },
];

const Recipes = () => {
    return (
        <div className="recipes">
            <div className="container">
                <h2 className='recipes-title'>Recipes</h2>
                <div className="recipes-list">
                    {recipesData.map((recipe) => (
                        <Link to={`/recipes/${recipe.id}`} key={recipe.id} className="recipe-card">
                            <div className="recipe-image-wrapper">
                                <img src={recipe.imageUrl} alt={recipe.name} className="recipe-image" />
                            </div>
                            <h2 className="recipe-name">{recipe.name}</h2>
                            <p className="recipe-description">{recipe.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Recipes;

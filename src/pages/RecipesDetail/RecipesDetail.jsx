
import React from 'react';
import { useParams } from 'react-router-dom';
import './RecipesDetail.scss'; // Add your styles here

import avocadoEggImage from '../../assets/images/recipes/baked-avocado-eggs.png';
import veganMochaYogurt from '../../assets/images/recipes/vegan-mocha-yogurt-bowl.png';

// Mock data
const recipesData = [
    {
        id: 1,
        name: 'Baked Avocado Eggs',
        description: 'A delicious and healthy breakfast option with baked avocado and eggs.',
        ingredients: ['2 Avocados', '4 large eggs', 'Salt', 'Pepper', 'Chopped herbs'],
        instructions: `1. Preheat your oven to 425°F (220°C).\n2. Cut the avocados in half and remove the pits.\n3. Scoop out some of the avocado flesh to make room for the eggs.\n4. Place the avocado halves in a baking dish, making sure they are stable.\n5. Crack an egg into each avocado half.\n6. Season with salt and pepper to taste.\n7. Bake in the preheated oven for 12-15 minutes, until the eggs are cooked to your desired doneness.\n8. Remove from oven and sprinkle with chopped herbs before serving.`,
        imageUrl: avocadoEggImage,
    },
    {
        id: 2,
        name: 'Vegan Mocha Yogurt Bowl',
        description: 'A nutritious and delicious vegan yogurt bowl with a hint of mocha.',
        ingredients: ['1 cup vegan yogurt', '1 tbsp cocoa powder', '1 tsp instant coffee', '1 tbsp maple syrup', '1 banana, sliced', 'Granola', 'Fresh berries'],
        instructions: '1. In a bowl, mix the vegan yogurt with cocoa powder, instant coffee, and maple syrup until well combined.\n2. Top with sliced banana, granola, and fresh berries.\n3. Serve immediately.',
        imageUrl: veganMochaYogurt,
    },
];

const RecipeDetail = () => {
    const { id } = useParams();
    const recipe = recipesData.find((recipe) => recipe.id.toString() === id);

    if (!recipe) {
        return <p>Recipe not found.</p>;
    }

    return (
        <div className="recipes-detail">
            <div className="container">
                <h2 className="recipes-detail-title">{recipe.name}</h2>
                <div className="recipes-detail-body">
                    <div className="recipes-detail-image">
                        <img src={recipe.imageUrl} alt={recipe.name} />
                    </div>
                    <div className="recipes-detail-info">
                        <p>{recipe.description}</p>
                        <h2 className="font-bold mb-2">Ingredients</h2>
                        <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <h2 className="font-bold mb-2">Instructions</h2>
                        <p>{recipe.instructions}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;

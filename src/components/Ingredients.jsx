import React from 'react';
import List from '@mui/material/List';
import Ingredient from './Ingredient';

function Ingredients(props) {
  const { recipeId, ingredients, editIngredient, removeIngredient } = props;

  return (
    <List component='div' disablePadding>
      {ingredients.map(ingredient => (
        <Ingredient
          key={`ingredients-${ingredient.id}`}
          recipeId={recipeId}
          name={ingredient.name}
          ingredientId={ingredient.id}
          editIngredient={editIngredient}
          removeIngredient={removeIngredient}
        />
      ))}
    </List>
  );
}

export default Ingredients;
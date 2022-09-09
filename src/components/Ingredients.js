import React from 'react';
import { v4 as uuid } from 'uuid';
import List from '@mui/material/List';
import Ingredient from './Ingredient';

function Ingredients(props) {
  const { recipeId, ingredients, editIngredient, removeIngredient } = props;

  return (
    <List component='div' disablePadding>
      {ingredients.map(ingredient => (
        <Ingredient
          key={uuid()}
          recipeId={recipeId}
          name={ingredient.name}
          ingredientId={ingredient.id}
          editIngredient={editIngredient}
          removeIngredient={removeIngredient}>
        </Ingredient>
      ))}
    </List>
  );
}

export default Ingredients;
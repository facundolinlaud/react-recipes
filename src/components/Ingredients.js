import React from 'react';
import { v4 as uuid } from 'uuid';
import List from '@mui/material/List';
import Ingredient from './Ingredient';

function Ingredients(props) {
  const { recipeId, ingredients } = props;

  return (
    <List component='div' disablePadding>
      {ingredients.map(ingredient => (
        <Ingredient
          recipeId={recipeId}
          ingredientId={ingredient.id}
          name={ingredient.name}
          key={uuid()}>
        </Ingredient>
      ))}
    </List>
  );
}

export default Ingredients;
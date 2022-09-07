import React from "react";
import { v4 as uuid } from 'uuid';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import Ingredient from "./Ingredient";

function Ingredients(props) {
  const { recipeId, ingredients, open } = props;

  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {ingredients.map(ingredient => (
          <Ingredient
            recipeId={recipeId}
            ingredientId={ingredient.id}
            name={ingredient.name}
            key={uuid()}>
          </Ingredient>
        ))}
      </List>
    </Collapse>
  );
}

export default Ingredients;
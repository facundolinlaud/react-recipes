import { v4 as uuid } from 'uuid';
import React, { useState, useContext } from "react";
import EditDeleteBar from "./EditDeleteBar";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import { RecipesContext } from '../context/RecipesContext';
import EggOutlinedIcon from '@mui/icons-material/EggOutlined';
import EditableItem from "./EditableItem";

function Ingredient(props) {
  const { ingredientId, recipeId, name } = props;
  const [isEditing, setEditing] = useState(false);
  const [isMouseOver, setMouseOver] = useState(false);
  const [recipes, setRecipes] = useContext(RecipesContext);

  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  const handleRemove = () => {
    const newRecipies = recipes.map(recipe => {
      if (recipe.id === recipeId) {
        const newIngredients = recipe.ingredients.filter(ingredient => ingredient.id !== ingredientId);

        return {
          ...recipe,
          ingredients: newIngredients,
        };
      }

      return recipe;
    });

    setRecipes(newRecipies);
  };

  const onEdit = (newName) => {
    const newRecipies = recipes.map(recipe => {
      if (recipe.id === recipeId) {
        const newIngredients = recipe.ingredients.map(ingredient => {
          if (ingredient.id === ingredientId) {
            return {
              ...ingredient,
              name: newName,
            }
          }

          return ingredient;
        });

        return {
          ...recipe,
          ingredients: newIngredients,
        };
      }

      return recipe;
    });

    setRecipes(newRecipies);
  };

  return (
    <ListItemButton
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={{ pl: 4 }} key={uuid()}>

      <ListItemIcon>
        <EggOutlinedIcon />
      </ListItemIcon>

      <EditableItem
        name={name}
        isEditing={isEditing}
        toggleEditing={toggleEditing}
        onEdit={onEdit}>
      </EditableItem>

      <EditDeleteBar
        isVisible={isMouseOver}
        handleRemove={handleRemove}
        toggleEditing={toggleEditing}>
      </EditDeleteBar>
    </ListItemButton>
  );
}

export default Ingredient;
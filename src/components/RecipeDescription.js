import { v4 as uuid } from 'uuid';
import React, { useState, useContext } from "react";
import EditDeleteBar from "./EditDeleteBar";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import { RecipesContext } from '../context/RecipesContext';
import DescriptionIcon from '@mui/icons-material/Description';
import EditableItem from "./EditableItem";

function RecipeDescription(props) {
  const { recipeId, description } = props;
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

  const onEdit = (newDescription) => {
    const newRecipes = recipes.map(recipe => {
      if (recipe.id === recipeId) {
        return {
          ...recipe,
          description: newDescription,
        };
      }

      return recipe;
    });

    setRecipes(newRecipes);
  };

  return (
    <ListItemButton
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={{ pl: 4 }} key={uuid()}>

      <ListItemIcon>
        <DescriptionIcon />
      </ListItemIcon>

      <EditableItem
        name={description}
        isEditing={isEditing}
        toggleEditing={toggleEditing}
        onEdit={onEdit}>
      </EditableItem>

      <EditDeleteBar
        isVisible={isMouseOver}
        toggleEditing={toggleEditing}>
      </EditDeleteBar>
    </ListItemButton>
  );
}

export default RecipeDescription;
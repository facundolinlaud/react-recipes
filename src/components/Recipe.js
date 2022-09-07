import React, { useState, useContext } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import { RecipesContext } from '../context/RecipesContext';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import Ingredients from './Ingredients';
import EditableItem from './EditableItem';
import EditDeleteBar from './EditDeleteBar';

function Recipe(props) {
  const { recipeId, name, description, ingredients } = props;

  const [open, setOpen] = useState(true);
  const [isEditing, setEditing] = useState(false);
  const [isMouseOver, setMouseOver] = useState(false);
  const [recipes, setRecipes] = useContext(RecipesContext);

  const toggleEditing = (e) => {
    setEditing(!isEditing);
  };

  const handleExpandClick = () => {
    setOpen(!open);
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
  };

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  const handleRemove = () => {
    const newRecipies = recipes.filter(recipe => recipe.id !== recipeId);
    setRecipes(newRecipies);
  };

  const onEdit = (newName) => {
    const newRecipes = recipes.map(recipe => {
      if (recipe.id === recipeId) {
        return {
          ...recipe,
          name: newName,
        };
      }

      return recipe;
    });

    setRecipes(newRecipes);
  };

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <ListItemButton>
        <ListItemIcon>
          <DinnerDiningOutlinedIcon />
        </ListItemIcon>

        <EditableItem
          id={recipeId}
          name={name}
          isEditing={isEditing}
          toggleEditing={toggleEditing}
          onEdit={onEdit}>
        </EditableItem>

        <EditDeleteBar
          isVisible={isMouseOver}
          onRemove={handleRemoveClick}
          toggleEditing={toggleEditing}
          handleRemove={handleRemove}>
        </EditDeleteBar>

        {open ?
          <ExpandLess onClick={handleExpandClick} />
          :
          <ExpandMore onClick={handleExpandClick} />
        }

      </ListItemButton>

      <Ingredients recipeId={recipeId} open={open} ingredients={ingredients}></Ingredients>
    </div>
  );
}

export default Recipe;
import { v4 as uuid } from 'uuid';
import React, { useState, useContext } from 'react';
import EditDeleteBar from './EditDeleteBar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import { DispatchContext } from '../context/RecipesContext';
import DescriptionIcon from '@mui/icons-material/Description';
import * as events from '../events/recipes';
import EditableItem from './EditableItem';

function RecipeDescription(props) {
  const { recipeId, description } = props;
  const [isEditing, setEditing] = useState(false);
  const [isMouseOver, setMouseOver] = useState(false);
  const dispatch = useContext(DispatchContext);

  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  const handleEdit = newDescription => {
    dispatch({
      recipeId,
      newDescription,
      type: events.EDIT_RECIPE_DESCRIPTION,
    });
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
        handleEdit={handleEdit}>
      </EditableItem>

      <EditDeleteBar
        isVisible={isMouseOver}
        toggleEditing={toggleEditing}>
      </EditDeleteBar>
    </ListItemButton>
  );
}

export default RecipeDescription;
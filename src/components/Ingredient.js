import { v4 as uuid } from 'uuid';
import EditDeleteBar from './EditDeleteBar';
import React, { useState, useContext } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import EggOutlinedIcon from '@mui/icons-material/EggOutlined';
import { DispatchContext } from '../context/RecipesContext';
import * as events from '../events/recipes';
import EditableItem from './EditableItem';

function Ingredient(props) {
  const { ingredientId, recipeId, name } = props;
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

  const handleEdit = newName => {
    dispatch({
      newName,
      recipeId,
      ingredientId,
      type: events.EDIT_INGREDIENT,
    });
  };

  const handleRemove = () => {
    dispatch({
      recipeId,
      ingredientId,
      type: events.REMOVE_RECIPE,
    });
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
        handleEdit={handleEdit}>
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
import EditDeleteBar from './EditDeleteBar';
import React, { useState } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import EggOutlinedIcon from '@mui/icons-material/EggOutlined';
import EditableItem from './EditableItem';

function Ingredient(props) {
  const { ingredientId, recipeId, name, editIngredient, removeIngredient } = props;
  const [isEditing, setEditing] = useState(false);
  const [isMouseOver, setMouseOver] = useState(false);

  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  const handleEdit = name => {
    editIngredient({
      name,
      recipeId,
      ingredientId,
    });
  };

  const handleRemove = () => {
    removeIngredient({
      recipeId,
      ingredientId,
    });
  };

  return (
    <ListItemButton
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={{ pl: 4 }} key={`ingredient-${ingredientId}`}>

      <ListItemIcon>
        <EggOutlinedIcon />
      </ListItemIcon>

      <EditableItem
        name={name}
        isEditing={isEditing}
        toggleEditing={toggleEditing}
        handleEdit={handleEdit}
      />

      <EditDeleteBar
        isVisible={isMouseOver}
        handleRemove={handleRemove}
        toggleEditing={toggleEditing}
      />
    </ListItemButton>
  );
}

export default Ingredient;
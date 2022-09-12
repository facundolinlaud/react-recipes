import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import EditDeleteBar from './EditDeleteBar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import DescriptionIcon from '@mui/icons-material/Description';
import EditableItem from './EditableItem';

function RecipeDescription(props) {
  const { recipeId, description, editRecipeDescription } = props;
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

  const handleEdit = newDescription => {
    editRecipeDescription({
      recipeId,
      newDescription,
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
        toggleEditing={toggleEditing}
      />
    </ListItemButton>
  );
}

export default RecipeDescription;
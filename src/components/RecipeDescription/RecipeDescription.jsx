import React, { useState } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import DescriptionIcon from '@mui/icons-material/Description';
import EditDeleteBar from '../EditDeleteBar';
import EditableItem from '../EditableItem';

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
      sx={{ pl: 4 }} key={`recipe-description-${recipeId}`}>

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
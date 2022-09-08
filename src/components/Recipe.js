import Collapse from '@mui/material/Collapse';
import React, { useState, useContext } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import Ingredients from './Ingredients';
import EditableItem from './EditableItem';
import EditDeleteBar from './EditDeleteBar';
import RecipeDescription from './RecipeDescription';
import { DispatchContext } from '../context/RecipesContext';
import * as events from '../events/recipes';

function Recipe(props) {
  const {
    name,
    recipeId,
    description,
    ingredients,
  } = props;

  const [open, setOpen] = useState(true);
  const [isEditing, setEditing] = useState(false);
  const [isMouseOver, setMouseOver] = useState(false);

  const dispatch = useContext(DispatchContext);

  const toggleEditing = (e) => {
    setEditing(!isEditing);
  };

  const handleExpandClick = () => {
    setOpen(!open);
  };

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  const handleEdit = newName => {
    dispatch({
      type: events.EDIT_RECIPE,
      recipeId,
      newName,
    });
  };

  const handleRemove = () => {
    dispatch({
      type: events.REMOVE_RECIPE,
      recipeId,
    });
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
          handleEdit={handleEdit}>
        </EditableItem>

        <EditDeleteBar
          isVisible={isMouseOver}
          toggleEditing={toggleEditing}
          handleRemove={handleRemove}>
        </EditDeleteBar>

        {open ?
          <ExpandLess onClick={handleExpandClick} />
          :
          <ExpandMore onClick={handleExpandClick} />
        }
      </ListItemButton>

      <Collapse in={open} timeout='auto' unmountOnExit>
        <RecipeDescription
          recipeId={recipeId}
          description={description}>
        </RecipeDescription>

        <Ingredients
          recipeId={recipeId}
          ingredients={ingredients}>
        </Ingredients>
      </Collapse>
    </div>
  );
}

export default Recipe;
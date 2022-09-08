import { v4 as uuid } from 'uuid';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import Recipe from './Recipe';
import AddRecipe from './AddRecipe';
import { RecipesContext } from '../context/RecipesContext';

function Recipes() {
  const recipes = useContext(RecipesContext);

  return (
    <>
      <Typography variant='h4' component='h1' gutterBottom>Recipes</Typography>

      <AddRecipe></AddRecipe>

      <Divider />

      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        aria-labelledby='nested-list-subheader'
        component='nav'>

        {recipes.map(recipe => (
          <Recipe key={uuid()}
            recipeId={recipe.id}
            name={recipe.name}
            description={recipe.description}
            ingredients={recipe.ingredients}>
          </Recipe>
        ))}
      </List>
    </ >
  );
}

export default Recipes;
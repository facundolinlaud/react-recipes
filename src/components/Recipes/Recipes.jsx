import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import * as recipesClient from '../../api/recipes';
import AddRecipe from '../AddRecipe';
import Recipe from '../Recipe';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = () => {
    recipesClient
      .getRecipes()
      .then(setRecipes);
  };

  useEffect(fetchRecipes, []);

  const addRecipe = ({ name, description, ingredients = [] }) => {
    recipesClient
      .addRecipe({ name, description, ingredients })
      .then((newRecipe) => {
        setRecipes([...recipes, newRecipe]);
      });
  };

  const editRecipe = ({ recipeId, name }) => {
    recipesClient
      .editRecipe({ recipeId, name })
      .then(fetchRecipes);
  };

  const removeRecipe = ({ recipeId }) => {
    recipesClient
      .removeRecipe({ recipeId })
      .then(fetchRecipes);
  }

  const removeIngredient = ({ recipeId, ingredientId }) => {
    const recipe = recipes.find(r => r.id === recipeId);
    const newIngredients = recipe.ingredients.filter(i => i.id !== ingredientId);

    recipesClient
      .editRecipe({
        recipeId,
        ingredients: newIngredients,
      })
      .then(fetchRecipes);
  };

  const editIngredient = ({ recipeId, ingredientId, name }) => {
    const recipe = recipes.find(r => r.id === recipeId);

    const ingredients = recipe.ingredients.map(ingredient => {
      if (ingredient.id === ingredientId) {
        return {
          name,
        };
      }

      return ingredient;
    });

    recipesClient
      .editRecipe({
        recipeId,
        ingredients,
      })
      .then(fetchRecipes);
  };

  const editRecipeDescription = ({ recipeId, newDescription }) => {
    recipesClient
      .editRecipe({
        recipeId,
        description: newDescription,
      })
      .then(fetchRecipes);
  };

  return (
    <>
      <Typography variant='h4' component='h1' gutterBottom>Recipes</Typography>

      <AddRecipe addRecipe={addRecipe} />

      <Divider />

      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        aria-labelledby='nested-list-subheader'
        component='nav'>

        {recipes.map(recipe => (
          <Recipe
            key={`recipes-${recipe.id}`}
            name={recipe.name}
            recipeId={recipe.id}
            description={recipe.description}
            ingredients={recipe.ingredients}
            editRecipe={editRecipe}
            removeRecipe={removeRecipe}
            editIngredient={editIngredient}
            removeIngredient={removeIngredient}
            editRecipeDescription={editRecipeDescription}
          />
        ))}
      </List>
    </ >
  );
}

export default Recipes;
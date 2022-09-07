import { v4 as uuid } from 'uuid';
import List from '@mui/material/List';
import React, { useContext, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Recipe from './Recipe';
import AddRecipe from './AddRecipe';
import { RecipesContext } from '../context/RecipesContext';

function Recipes() {
  const [recipes, setRecipes] = useContext(RecipesContext);

  useEffect(() => {
    const initialRecipes = [
      {
        id: 1,
        name: 'Pizza',
        description: 'YUMMY',
        ingredients: [
          {
            id: 3,
            name: 'Tomatoe'
          }
        ]
      }, {
        id: 2,
        name: 'Pasta',
        description: 'YUMMY',
        ingredients: [
          {
            id: 5,
            name: 'Sauce'
          }
        ]
      }
    ];

    setRecipes(initialRecipes);
  }, []);

  const addRecipe = ({ name, description, ingredients = [] }) => {
    const createdIngredients = ingredients.map(ingredient => ({
      name: ingredient,
    }));

    const newRecipe = {
      id: recipes[recipes.length - 1].id + 1,
      name,
      description,
      ingredients: createdIngredients,
    };

    setRecipes([...recipes, newRecipe]);
  };

  return (
    <>
      <Typography variant='h4' component='h1' gutterBottom>Recipes</Typography>

      <AddRecipe addRecipe={addRecipe}></AddRecipe>

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
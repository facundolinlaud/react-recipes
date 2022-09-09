import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:8000/api/ingredients',
});

export const getRecipes = async () => {
  const response = await client.get('/');
  return response.data;
};

export const addRecipe = async ({ name, description, ingredients }) => {
  const parsedIngredients = ingredients.map(ingredient => ({
    name: ingredient,
  }));

  const response = await client.post('/', {
    name,
    description,
    ingredients: parsedIngredients,
  });

  return response.data;
};

export const editRecipe = async ({ recipeId, name, description, ingredients }) => {
  const response = await client.patch(`/${recipeId}/`, {
    name,
    description,
    ingredients,
  });

  return response.data;
};

export const removeRecipe = async ({ recipeId }) => {
  const response = await client.delete(`/${recipeId}/`);
  return response.data;
};


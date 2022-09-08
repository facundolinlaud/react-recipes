import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { DispatchContext } from '../context/RecipesContext';
import useInputState from '../hooks/useInputState';
import * as events from '../events/recipes';

function AddRecipe() {
  const [name, setName] = useInputState('');
  const [description, setDescription] = useInputState('');
  const [ingredients, setIngredients] = useInputState('');
  const dispatch = useContext(DispatchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveRecipe();
  };

  const saveRecipe = () => {
    const parsedIngredients = ingredients
      .split(',')
      .map(ing => ing.trim());

    dispatch({
      type: events.ADD_RECIPE,
      name,
      description,
      ingredients: parsedIngredients,
    });
  };

  return <Box>
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} columns={2}>
        <Grid item xs={2} md={8}>
          <Grid item>
            <FormLabel>Name</FormLabel>
          </Grid>

          <Grid item>
            <TextField defaultValue={name} onChange={setName}></TextField>
          </Grid>

          <Grid item>
            <FormLabel>Description</FormLabel>
          </Grid>

          <Grid item>
            <TextField defaultValue={description} onChange={setDescription}></TextField>
          </Grid>

          <Grid item>
            <FormLabel>Ingredients (comma separated)</FormLabel>
          </Grid>

          <Grid item>
            <TextField defaultValue={ingredients} onChange={setIngredients}></TextField>
          </Grid>

          <Grid item>
            <Button onClick={saveRecipe}>Save</Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  </Box >;
};

export default AddRecipe;
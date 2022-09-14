import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import useInputState from '../../hooks/useInputState';

function AddRecipe(props) {
  const { addRecipe } = props;
  const [name, setName] = useInputState('');
  const [description, setDescription] = useInputState('');
  const [ingredients, setIngredients] = useInputState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    saveRecipe();
  };

  const saveRecipe = () => {
    const parsedIngredients = ingredients
      .split(',')
      .map(ing => ing.trim());

    addRecipe({
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
            <TextField
              aria-label='name'
              role='textbox'
              defaultValue={name}
              onChange={setName}
            />
          </Grid>

          <Grid item>
            <FormLabel>Description</FormLabel>
          </Grid>

          <Grid item>
            <TextField
              aria-label='descriptions'
              role='textbox'
              defaultValue={description}
              onChange={setDescription}
            />
          </Grid>

          <Grid item>
            <FormLabel>Ingredients (comma separated)</FormLabel>
          </Grid>

          <Grid item>
            <TextField
              aria-label='ingredients'
              role='textbox'
              defaultValue={ingredients}
              onChange={setIngredients}
            />
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
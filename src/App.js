import * as React from 'react';
import Container from '@mui/material/Container';
import Recipes from './components/Recipes';
import { RecipesProvider } from './context/RecipesContext';
import './App.css';

function App() {
  return (
    <Container>
      <RecipesProvider>
        <Recipes></Recipes>
      </RecipesProvider>
    </Container>
  );
}

export default App;

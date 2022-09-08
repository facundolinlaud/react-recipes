import React, { createContext, useReducer } from 'react';
import recipesReducer from "../reducers/recipes";

const INITIAL_RECIPES = [
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

export const RecipesContext = createContext();
export const DispatchContext = createContext();

export function RecipesProvider(props) {
  const [recipes, dispatch] = useReducer(recipesReducer, INITIAL_RECIPES);

  return (
    <RecipesContext.Provider value={recipes}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </RecipesContext.Provider>
  );
}

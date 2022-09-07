import React, { createContext, useState } from 'react';

export const RecipesContext = createContext();

export function RecipesProvider(props) {
    const recipes = useState([]);

    return (
        <RecipesContext.Provider value={recipes}>
            {props.children}
        </RecipesContext.Provider>
    );
}

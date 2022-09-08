import * as events from '../events/recipes';

const reducer = (recipes, action) => {
  switch (action.type) {
    case events.SET_RECIPES:
      return setRecipes(action.recipes);
    case events.ADD_RECIPE:
      return addRecipe(recipes, {
        name: action.name,
        description: action.description,
        ingredients: action.ingredients,
      });
    case events.REMOVE_RECIPE:
      return removeRecipe(recipes, {
        recipeId: action.recipeId,
      });
    case events.EDIT_RECIPE:
      return editRecipe(recipes, {
        recipeId: action.recipeId,
        newName: action.newName,
      })
    case events.REMOVE_INGREDIENT:
      return removeIngredient(recipes, {
        recipeId: action.recipeId,
        ingredientId: action.ingredientId,
      });
    case events.EDIT_INGREDIENT:
      return editIngredient(recipes, {
        recipeId: action.recipeId,
        ingredientId: action.ingredientId,
        newName: action.newName,
      });
    case events.EDIT_RECIPE_DESCRIPTION:
      return editRecipeDescription(recipes, {
        recipeId: action.recipeId,
        newDescription: action.newDescription,
      });
    default:
      return recipes;
  }
};

const setRecipes = newRecipes => {
  return newRecipes;
};

const addRecipe = (recipes, { name, description, ingredients = [] }) => {
  const createdIngredients = ingredients.map(ingredient => ({
    name: ingredient,
  }));

  const newRecipe = {
    id: recipes[recipes.length - 1].id + 1,
    name,
    description,
    ingredients: createdIngredients,
  };

  return [...recipes, newRecipe];
};

const editRecipe = (recipes, { recipeId, newName }) => {
  const newRecipes = recipes.map(recipe => {
    if (recipe.id === recipeId) {
      return {
        ...recipe,
        name: newName,
      };
    }

    return recipe;
  });

  return newRecipes;
};

const removeRecipe = (recipes, { recipeId }) => {
  return recipes.filter(recipe => recipe.id !== recipeId);
}

const removeIngredient = (recipes, { recipeId, ingredientId }) => {
  const newRecipies = recipes.map(recipe => {
    if (recipe.id === recipeId) {
      const newIngredients = recipe.ingredients.filter(ingredient => ingredient.id !== ingredientId);

      return {
        ...recipe,
        ingredients: newIngredients,
      };
    }

    return recipe;
  });

  return newRecipies;
};

const editIngredient = (recipes, { recipeId, ingredientId, newName }) => {
  const newRecipies = recipes.map(recipe => {
    if (recipe.id === recipeId) {
      const newIngredients = recipe.ingredients.map(ingredient => {
        if (ingredient.id === ingredientId) {
          return {
            ...ingredient,
            name: newName,
          }
        }

        return ingredient;
      });

      return {
        ...recipe,
        ingredients: newIngredients,
      };
    }

    return recipe;
  });

  return newRecipies;
};

const editRecipeDescription = (recipes, { recipeId, newDescription }) => {
  const newRecipes = recipes.map(recipe => {
    if (recipe.id === recipeId) {
      return {
        ...recipe,
        description: newDescription,
      };
    }

    return recipe;
  });

  return newRecipes;
};

export default reducer;

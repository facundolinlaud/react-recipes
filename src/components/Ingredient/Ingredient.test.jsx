import { fireEvent, render, screen } from '@testing-library/react';
import Ingredient from './Ingredient';

describe('<Ingredient/>', () => {
  it('should render an ingredient with the correct name', () => {
    const ingredientId = 1;
    const recipeId = 10;
    const name = 'Tomato';
    const editIngredient = jest.fn();
    const removeIngredient = jest.fn();

    const { getByText } = render(
      <Ingredient
        ingredientId={ingredientId}
        recipeId={recipeId}
        name={name}
        editIngredient={editIngredient}
        removeIngredient={removeIngredient}
      />);

    expect(getByText(name)).toBeVisible();
  });
});

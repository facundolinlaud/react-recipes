import { fireEvent, render } from '@testing-library/react';
import AddRecipe from './AddRecipe';

describe('<AddRecipe/>', () => {
  it('should render the recipe creation form', () => {
    const addRecipe = jest.fn();

    const { getByRole } = render(
      <AddRecipe addRecipe={addRecipe} />);

    expect(getByRole('textbox', { name: /name/i })).toBeVisible();
    expect(getByRole('textbox', { name: /description/i })).toBeVisible();
    expect(getByRole('textbox', { name: /ingredients/i })).toBeVisible();
    expect(getByRole('button')).toBeVisible();
  });

  it('should add a recipe when correctly submitting one', () => {
    const name = 'pasta';
    const description = 'very yummy';
    const ingredients = 'tomato,fusilli,salt'
    const expectedIngredients = ['tomato', 'fusilli', 'salt'];
    const addRecipe = jest.fn();

    const { getByRole } = render(
      <AddRecipe addRecipe={addRecipe} />);
    const nameTextbox = getByRole('textbox', { name: /name/i }).querySelector('input');
    const descriptionTextbox = getByRole('textbox', { name: /description/i }).querySelector('input');
    const ingredientsTextbox = getByRole('textbox', { name: /ingredients/i }).querySelector('input');
    const submitButton = getByRole('button');
    fireEvent.change(nameTextbox, {
      target: { value: name }
    });
    fireEvent.change(descriptionTextbox, {
      target: { value: description }
    });
    fireEvent.change(ingredientsTextbox, {
      target: { value: ingredients }
    });
    fireEvent.click(submitButton);

    expect(addRecipe).toHaveBeenCalledWith({
      name,
      description,
      ingredients: expectedIngredients,
    });
  });
});

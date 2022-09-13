import { fireEvent, render } from '@testing-library/react';
import Ingredients from './Ingredients';

describe('<Ingredients/>', () => {
  const recipeId = 1;
  const ingredients = [{
    id: 0,
    name: 'tomato',
  }, {
    id: 1,
    name: 'salt'
  }];

  it('should render the list of ingredients component', () => {
    const editIngredient = jest.fn();
    const removeIngredient = jest.fn();

    const { getByText } = render(
      <Ingredients
        recipeId={recipeId}
        ingredients={ingredients}
        editIngredient={editIngredient}
        removeIngredient={removeIngredient}
      />);

    ingredients.forEach(ingredient => {
      expect(getByText(ingredient.name)).toBeVisible();
    });
  });

  it('should remove the ingredient when deleted from the EditDeleteBar', () => {
    const editIngredient = jest.fn();
    const removeIngredient = jest.fn();

    const { getByRole, getByText } = render(
      <Ingredients
        recipeId={recipeId}
        ingredients={ingredients}
        editIngredient={editIngredient}
        removeIngredient={removeIngredient}
      />);


    const ingredient = getByText(ingredients[0].name);
    fireEvent.mouseOver(ingredient);
    const remove = getByRole('button', { name: /edit/i });
    fireEvent.click(remove);

    expect(ingredient).not.toBeVisible();
  });

  it('should edit the ingredient name when modified with the EditDeleteBar', () => {
    const newIngredientName = 'pepper';
    const editIngredient = jest.fn();
    const removeIngredient = jest.fn();

    const { getByRole, getByText } = render(
      <Ingredients
        recipeId={recipeId}
        ingredients={ingredients}
        editIngredient={editIngredient}
        removeIngredient={removeIngredient}
      />);


    const ingredient = getByText(ingredients[0].name);
    fireEvent.mouseOver(ingredient);
    const edit = getByRole('button', { name: /edit/i });
    fireEvent.click(edit);
    const editIngredientTextbox = getByRole('textbox', { name: /edit/i }).querySelector('input');
    fireEvent.change(editIngredientTextbox, {
      target: {
        value: newIngredientName,
      }
    });
    fireEvent.submit(editIngredientTextbox);
    const newIngredient = getByText(newIngredientName);

    expect(newIngredient).toBeVisible();
  });
});

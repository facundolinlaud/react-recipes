import { fireEvent, render } from '@testing-library/react';
import RecipeDescription from './RecipeDescription';

describe('<RecipeDescription/>', () => {
  it('should render the recipe description', () => {
    const recipeId = 1;
    const description = 'some desc';
    const editRecipeDescription = jest.fn();

    const { getByText } = render(
      <RecipeDescription
        recipeId={recipeId}
        description={description}
        editRecipeDescription={editRecipeDescription}
      />);

    expect(getByText(description)).toBeVisible();
  });

  it('should edit the recipe description when modified with the EditDeleteBar', () => {
    const recipeId = 1;
    const description = 'some desc';
    const editRecipeDescription = jest.fn();
    const newDescription = 'some other description';

    const { getByRole, getByText } = render(
      <RecipeDescription
        recipeId={recipeId}
        description={description}
        editRecipeDescription={editRecipeDescription}
      />);

    const descriptionComponent = getByText(description);
    fireEvent.mouseOver(descriptionComponent);
    const edit = getByRole('button', { name: /edit/i });
    fireEvent.click(edit);
    const editDescriptionTextbox = getByRole('textbox', { name: /edit/i }).querySelector('input');
    fireEvent.change(editDescriptionTextbox, {
      target: {
        value: newDescription,
      }
    });
    fireEvent.submit(editDescriptionTextbox);
    const newDescriptionComponent = getByText(newDescription);

    expect(newDescriptionComponent).toBeVisible();
  });
});

import { fireEvent, render } from '@testing-library/react';
import EditableItem from './EditableItem';

describe('<EditableItem/>', () => {
  it('should render a basic item when the user is not editing it', () => {
    const name = 'Some item';
    const isEditing = false;
    const toggleEditing = jest.fn();
    const handleEdit = jest.fn();

    const { getByRole, queryByRole } = render(
      <EditableItem
        name={name}
        isEditing={isEditing}
        toggleEditing={toggleEditing}
        handleEdit={handleEdit}
      />);

    expect(queryByRole('textbox')).toBeNull();
    expect(getByRole('listitem')).toBeVisible();
  });

  it('should render a textbox item when the user is editing it', () => {
    const name = 'Some item';
    const isEditing = true;
    const toggleEditing = jest.fn();
    const handleEdit = jest.fn();

    const { getByRole, queryByRole } = render(
      <EditableItem
        name={name}
        isEditing={isEditing}
        toggleEditing={toggleEditing}
        handleEdit={handleEdit}
      />);

    expect(queryByRole('listitem')).toBeNull();
    expect(getByRole('textbox', { name: /edit/i })).toBeVisible();
  });

  it('should render the updated item when submitting a new name', () => {
    const name = 'Some item';
    const isEditing = true;
    const toggleEditing = jest.fn();
    const handleEdit = jest.fn();
    const newName = 'Some item new name';

    const { getByRole } = render(
      <EditableItem
        name={name}
        isEditing={isEditing}
        toggleEditing={toggleEditing}
        handleEdit={handleEdit}
      />);

    /* Query selector is needed because TextField from Material UI is wrapping 
    the relevant input */
    const textbox = getByRole('textbox', { name: /edit/i }).querySelector('input');
    fireEvent.change(textbox, {
      target: { value: newName }
    });
    fireEvent.submit(textbox);
    expect(handleEdit).toHaveBeenCalledWith(newName);
  });
});

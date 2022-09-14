import { fireEvent, queryByRole, render, screen } from '@testing-library/react';
import EditDeleteBar from './EditDeleteBar';

describe('<EditDeleteBar/>', () => {
  it('should render the edit and remove buttons when given a remove logic', () => {
    const isVisible = true;
    const toggleEditing = jest.fn();
    const handleRemove = jest.fn();

    const { getByRole } = render(
      <EditDeleteBar
        isVisible={isVisible}
        toggleEditing={toggleEditing}
        handleRemove={handleRemove}
      />);

    expect(getByRole('button', { name: /delete/i })).toBeVisible();
    expect(getByRole('button', { name: /edit/i })).toBeVisible();
  });

  it('should render the edit button but not the remove one when not given a remove logic', () => {
    const isVisible = true;
    const toggleEditing = jest.fn();
    const handleRemove = undefined;

    const { getByRole, queryByRole } = render(
      <EditDeleteBar
        isVisible={isVisible}
        toggleEditing={toggleEditing}
        handleRemove={handleRemove}
      />);

    expect(queryByRole('button', { name: /delete/i })).toBeNull();
    expect(getByRole('button', { name: /edit/i })).toBeVisible();
  });

  it('should not render the edit nor the remove button when visibility is set to false', () => {
    const isVisible = false;
    const toggleEditing = jest.fn();
    const handleRemove = jest.fn();

    const { queryByRole } = render(
      <EditDeleteBar
        isVisible={isVisible}
        toggleEditing={toggleEditing}
        handleRemove={handleRemove}
      />);

    expect(queryByRole('button', { name: /delete/i })).toBeNull();
    expect(queryByRole('button', { name: /edit/i })).toBeNull();
  });

  it('should fire the remove event when clicking the remove button', async () => {
    const isVisible = true;
    const toggleEditing = jest.fn();
    const handleRemove = jest.fn();

    const { getByRole } = render(
      <EditDeleteBar
        isVisible={isVisible}
        toggleEditing={toggleEditing}
        handleRemove={handleRemove}
      />);

    const removeButton = getByRole('button', { name: /delete/i });
    fireEvent.click(removeButton);

    expect(handleRemove).toHaveBeenCalled();
  });

  it('should fire the edit event when clicking the edit button', async () => {
    const isVisible = true;
    const toggleEditing = jest.fn();
    const handleRemove = jest.fn();

    const { getByRole } = render(
      <EditDeleteBar
        isVisible={isVisible}
        toggleEditing={toggleEditing}
        handleRemove={handleRemove}
      />);

    const editButton = getByRole('button', { name: /edit/i });
    fireEvent.click(editButton);

    expect(toggleEditing).toHaveBeenCalled();
  });
});

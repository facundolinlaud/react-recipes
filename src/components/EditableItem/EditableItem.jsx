import React from 'react';
import TextField from '@mui/material/TextField';
import ListItemText from '@mui/material/ListItemText';
import useInputState from '../../hooks/useInputState';

function EditableItem(props) {
  const { name, isEditing, toggleEditing, handleEdit } = props;
  const [value, handleChange] = useInputState(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(value);
    toggleEditing();
  };

  return (
    <>
      {isEditing ?
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            aria-label='edit'
            role='textbox'
            value={value}
            fullWidth
            autoFocus
          />
        </form >
        :
        <ListItemText role='listitem' primary={value} />
      }
    </>
  );
}

export default EditableItem;
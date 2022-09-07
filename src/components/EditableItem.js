import React from 'react';
import TextField from '@mui/material/TextField';
import ListItemText from '@mui/material/ListItemText';
import useInputState from '../hooks/useInputState';

function EditableItem(props) {
  const { name, isEditing, toggleEditing, onEdit } = props;
  const [value, handleChange] = useInputState(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(value);
    toggleEditing();
  };

  return (
    <>
      {isEditing ?
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            value={value}
            fullWidth
            autoFocus
          ></TextField>
        </form >
        :
        <ListItemText primary={value} />
      }
    </>
  );
}

export default EditableItem;
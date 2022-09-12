import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemIcon from '@mui/material/ListItemIcon';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function EditDeleteBar(props) {
  const { toggleEditing, isVisible, handleRemove } = props;

  return isVisible &&
    (<ListItemIcon>
      <IconButton role='button' aria-label='edit' onClick={toggleEditing}>
        <EditOutlinedIcon />
      </IconButton>
      {handleRemove && (
        <IconButton role='button' aria-label='delete' onClick={handleRemove}>
          <DeleteIcon />
        </IconButton>
      )}
    </ListItemIcon>
    );
}

export default EditDeleteBar;
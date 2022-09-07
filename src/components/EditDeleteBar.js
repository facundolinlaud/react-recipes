import React from "react";
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function EditDeleteBar(props) {
  const { toggleEditing, isVisible, handleRemove } = props;

  return isVisible &&
    (<ListItemIcon>
      <IconButton aria-label="edit" onClick={toggleEditing}>
        <EditOutlinedIcon />
      </IconButton>
      {handleRemove && (
        <IconButton aria-label="delete" onClick={handleRemove}>
          <DeleteIcon />
        </IconButton>
      )}
    </ListItemIcon>
    );
}

export default EditDeleteBar;
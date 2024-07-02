import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ListItem = () => {
  return (
    <div className="container">
        <span>7</span>
        <span> R$7,90</span>
        <span>Papelaria</span>
        <span>01/05/24 - 09:47</span>
        <EditIcon/>
        <DeleteIcon/>
    </div>
  )
}

export default ListItem
import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Row({ pet, onEdit, onDelete }) {
    return (
        <tr>
            <td>{pet.name}</td>
            <td>{pet.type}</td>
            <td>{pet.age}</td>
            <td><MdDeleteForever onClick={() => onDelete(pet._id)} /></td>
            <td><MdEdit onClick={() => onEdit(pet)} /></td>
        </tr>
    );
}

export default Row;
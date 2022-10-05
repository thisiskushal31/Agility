import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>{contact.position}</td>
      <td>
        <button className="userButton" type="button" onClick={(event) => handleEditClick(event, contact)}> Edit </button>
        <button className="userButton" type="button" onClick={() => handleDeleteClick(contact.employeeId)}> Delete </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;

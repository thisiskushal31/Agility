import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import UserData from "../Users/UserData";
import ReadOnlyRow from "../Users/ReadOnlyRow";
import EditableRow from "../Users/EditableRow";


const Users = () => {
        const [contacts, setContacts] = useState(UserData);
        const [addFormData, setAddFormData] = useState({
            name: "",
            address: "",
            phoneNumber: "",
            email: "",
            position: "",
        });
    
        const [editFormData, setEditFormData] = useState({
            name: "",
            address: "",
            phoneNumber: "",
            email: "",
            position: "",
        });
    
        const [editContactId, setEditContactId] = useState(null);
    
        const handleAddFormChange = (event) => {
            event.preventDefault();
        
            const fieldName = event.target.getAttribute("name");
            const fieldValue = event.target.value;
        
            const newFormData = { ...addFormData };
            newFormData[fieldName] = fieldValue;
        
            setAddFormData(newFormData);
        };
    
        const handleEditFormChange = (event) => {
            event.preventDefault();
        
            const fieldName = event.target.getAttribute("name");
            const fieldValue = event.target.value;
        
            const newFormData = { ...editFormData };
            newFormData[fieldName] = fieldValue;
        
            setEditFormData(newFormData);
        };
    
        const handleAddFormSubmit = (event) => {
            event.preventDefault();
        
            const newContact = {
                employeeId: nanoid(),
                name: addFormData.name,
                address: addFormData.address,
                phoneNumber: addFormData.phoneNumber,
                email: addFormData.email,
                position: addFormData.position,
            };
        
            const newContacts = [...contacts, newContact];
            setContacts(newContacts);
        };
    
        const handleEditFormSubmit = (event) => {
            event.preventDefault();
        
            const editedContact = {
                employeeId: editContactId,
                name: editFormData.name,
                address: editFormData.address,
                phoneNumber: editFormData.phoneNumber,
                email: editFormData.email,
                position: addFormData.position,
            };
        
            const newContacts = [...contacts];
        
            const index = contacts.findIndex((contact) => contact.employeeId === editContactId);
        
            newContacts[index] = editedContact;
        
            setContacts(newContacts);
            setEditContactId(null);
        };
    
        const handleEditClick = (event, contact) => {
            event.preventDefault();
            setEditContactId(contact.employeeId);
        
            const formValues = {
                name: contact.name,
                address: contact.address,
                phoneNumber: contact.phoneNumber,
                email: contact.email,
                position: contact.position
            };
        
            setEditFormData(formValues);
        };
    
        const handleCancelClick = () => {
            setEditContactId(null);
        };
    
        const handleDeleteClick = (contactId) => {
            const newContacts = [...contacts];
        
            const index = contacts.findIndex((contact) => contact.employeeId === contactId);
        
            newContacts.splice(index, 1);
        
            setContacts(newContacts);
        };
    
        return (
        <div className="userContainer">
            <form className="UserTable" onSubmit={handleEditFormSubmit}>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact) => (
                    <Fragment>
                    {editContactId === contact.employeeId ? (
                        <EditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                        />
                    ) : (
                        <ReadOnlyRow
                        contact={contact}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                        />
                    )}
                    </Fragment>
                ))}
                </tbody>
            </table>
            </form>
    
            <h2>Add New Employee</h2>
            <form className="UserTable" onSubmit={handleAddFormSubmit}>
                <tr>
                    <td>
                    <input
                        className="userInput"
                        type="text"
                        name="name"
                        required="required"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />
                    </td>
                    <td>
                    <input
                        className="userInput"
                        type="text"
                        name="address"
                        required="required"
                        placeholder="Enter an addres..."
                        onChange={handleAddFormChange}
                    />
                    </td>
                    <td>
                    <input
                        className="userInput"
                        type="text"
                        name="phoneNumber"
                        required="required"
                        placeholder="Enter a phone number..."
                        onChange={handleAddFormChange}
                    />
                    </td>
                    <td>
                    <input
                        className="userInput"
                        type="email"
                        name="email"
                        required="required"
                        placeholder="Enter an email..."
                        onChange={handleAddFormChange}
                    />
                    </td>
                    <td>
                    <input
                        className="userInput"
                        type="position"
                        name="position"
                        required="required"
                        placeholder="Enter an position..."
                        onChange={handleAddFormChange}
                    />
                    </td>
                    <td>
                        <button className="userButton" type="submit">Add</button>
                    </td>
                </tr>
            </form>
        </div>
        );
}

export default Users;
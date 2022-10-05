import React from "react";

const UserData = [
    {
        employeeId: "01",
        name: "Jenny Chan",
        address: "3 waterfoot road",
        phoneNumber: "333-962-7516",
        email: "jenny.chan@email.com",
        position: "Frontend Developer"
    },
    {
        employeeId: "02",
        name: "Jessica warren",
        address: "4 tall town",
        phoneNumber: "011-211-7516",
        email: "jessica.warren@email.com",
        position: "Backend Developer"
    },
    {
        employeeId: "03",
        name: "Tony Frank",
        address: "11 lesly road",
        phoneNumber: "788-962-7516",
        email: "tony.frank@email.com",
        position: "HR Executive"
    },
    {
        employeeId: "04",
        name: "Jeremy Clark",
        address: "333 miltown manor",
        phoneNumber: "011-962-111",
        email: "jeremy.clark@email.com",
        position: "Client"
    },
    {
        employeeId: "05",
        name: "Raymond Edwards",
        address: "99 blue acres",
        phoneNumber: "3231-962-7516",
        email: "raymon.edwards@email.com",
        position: "Project Manager"
    }
];

const EditableTable = () => {
    const [employeeData, setEmployeeData] = React.useState(UserData);

    const onChange = (e, employeeId) => {
        const { name, value } = e.target;

        const editData = employeeData.map((item) =>
        item.employeeId === employeeId && name ? { ...item, [name]: value } : item
        );

        setEmployeeData(editData);
    };

    return (
        <div className="container">
            <h1 className="title">ReactJS Editable Table</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Number</th>
                    <th>Email</th>
                    <th>Position</th>
                </tr>
                </thead>
                <tbody>
                {employeeData.map(
                    ({ employeeId, name, address, phoneNumber, email, position }) => (
                    <tr key={employeeId}>
                        <td>
                        <input
                            name="name"
                            value={name}
                            type="text"
                            onChange={(e) => onChange(e, employeeId)}
                            placeholder="Type Name"
                        />
                        </td>
                        <td>
                        <input
                            name="address"
                            value={address}
                            type="text"
                            onChange={(e) => onChange(e, employeeId)}
                            placeholder="Type Address"
                        />
                        </td>
                        <td>
                        <input
                            name="phoneNumber"
                            value={phoneNumber}
                            type="text"
                            onChange={(e) => onChange(e, employeeId)}
                            placeholder="Type Phone Number"
                        />
                        </td>
                        <td>
                        <input
                            name="email"
                            value={email}
                            type="email"
                            onChange={(e) => onChange(e, employeeId)}
                            placeholder="Type Email"
                        />
                        </td>
                        <td>
                        <input
                            name="position"
                            type="text"
                            value={position}
                            onChange={(e) => onChange(e, employeeId)}
                            placeholder="Type Position"
                        />
                        </td>
                    </tr>
                    )
                )}
                </tbody>
            </table>
            
            <h2>Add a Contact</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input
                    type="text"
                    name="name"
                    required="required"
                    placeholder="Enter a name..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="address"
                    required="required"
                    placeholder="Enter an addres..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="phoneNumber"
                    required="required"
                    placeholder="Enter a phone number..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="email"
                    name="email"
                    required="required"
                    placeholder="Enter an email..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="position"
                    name="position"
                    required="required"
                    placeholder="Enter an position..."
                    onChange={handleAddFormChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default EditableTable;

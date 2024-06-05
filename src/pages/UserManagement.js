import React, { useState, useEffect } from 'react';
import './ManagementStyles.css';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        email: '',
        dateOfBirth: '',
        gender: '',
        medicalHistory: '',
        reasonForTherapy: '',
        emergencyContact: ''
    });
    const [editingUser, setEditingUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:9090/patient/getAll')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => setError(error.message));
    }, []);

    const deleteUser = (userId) => {
        fetch(`http://localhost:9090/patient/${userId}`, {
            method: 'DELETE'
        })
            .then(() => setUsers(users.filter(user => user.id !== userId)))
            .catch(error => setError(error.message));
    };

    const addUser = () => {
        fetch('http://localhost:9090/patient/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add patient');
                }
                return response.text();
            })
            .then(() => {
                // Fetch the updated list of users
                return fetch('http://localhost:9090/patient/getAll')
                    .then(response => response.json())
                    .then(data => setUsers(data));
            })
            .catch(error => setError(error.message));
    };

    const updateUser = () => {
        fetch(`http://localhost:9090/patient/${editingUser.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editingUser)
        })
            .then(() => {
                // Fetch the updated list of users
                return fetch('http://localhost:9090/patient/getAll')
                    .then(response => response.json())
                    .then(data => setUsers(data));
            })
            .catch(error => setError(error.message));
    };

    const handleInputChange = (e, isEditing = false) => {
        const { name, value } = e.target;
        if (isEditing) {
            setEditingUser({ ...editingUser, [name]: value });
        } else {
            setNewUser({ ...newUser, [name]: value });
        }
    };

    return (
        <div className="container">
            <h2>Patients Management</h2>
            {error && <div className="error">{error}</div>}
            <ul className="management-list">
                {users.map(user => (
                    <li key={user.id} className="management-item">
                        <div>
                            <span><strong>Email:</strong> {user.email}</span><br />
                            <span><strong>Date of Birth:</strong> {user.dateOfBirth}</span><br />
                            <span><strong>Gender:</strong> {user.gender}</span><br />
                            <span><strong>Medical History:</strong> {user.medicalHistory}</span><br />
                            <span><strong>Reason for Therapy:</strong> {user.reasonForTherapy}</span><br />
                            <span><strong>Emergency Contact:</strong> {user.emergencyContact}</span>
                        </div>
                        <button className="edit-button" onClick={() => setEditingUser(user)}>Edit</button>
                        <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <h2>{editingUser ? "Edit Patient" : "Add New Patient"}</h2>
            <form onSubmit={e => {
                e.preventDefault();
                editingUser ? updateUser() : addUser();
            }}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={editingUser ? editingUser.email : newUser.email}
                    onChange={e => handleInputChange(e, !!editingUser)}
                />
                <input
                    type="date"
                    name="dateOfBirth"
                    placeholder="Date of Birth"
                    value={editingUser ? editingUser.dateOfBirth : newUser.dateOfBirth}
                    onChange={e => handleInputChange(e, !!editingUser)}
                />
                <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    value={editingUser ? editingUser.gender : newUser.gender}
                    onChange={e => handleInputChange(e, !!editingUser)}
                />
                <input
                    type="text"
                    name="medicalHistory"
                    placeholder="Medical History"
                    value={editingUser ? editingUser.medicalHistory : newUser.medicalHistory}
                    onChange={e => handleInputChange(e, !!editingUser)}
                />
                <input
                    type="text"
                    name="reasonForTherapy"
                    placeholder="Reason for Therapy"
                    value={editingUser ? editingUser.reasonForTherapy : newUser.reasonForTherapy}
                    onChange={e => handleInputChange(e, !!editingUser)}
                />
                <input
                    type="text"
                    name="emergencyContact"
                    placeholder="Emergency Contact"
                    value={editingUser ? editingUser.emergencyContact : newUser.emergencyContact}
                    onChange={e => handleInputChange(e, !!editingUser)}
                />
                <button type="submit">{editingUser ? "Update User" : "Add User"}</button>
            </form>
        </div>
    );
};

export default UserManagement;

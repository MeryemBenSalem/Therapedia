import React, { useState, useEffect } from 'react';
import './TherapistManagement.css';

const TherapistManagement = () => {
    const [therapists, setTherapists] = useState([]);
    const [newTherapist, setNewTherapist] = useState({
        email: '',
        licenseNumber: '',
        specialization: '',
        yearsOfExperience: '',
        affiliations: ''
    });
    const [editingTherapist, setEditingTherapist] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTherapists();
    }, []);

    const fetchTherapists = () => {
        fetch('http://localhost:8080/doctor/getAll')
            .then(response => response.json())
            .then(data => setTherapists(data))
            .catch(error => setError(error.message));
    };

    const deleteTherapist = (therapistId) => {
        fetch(`http://localhost:8080/doctor/${therapistId}`, {
            method: 'DELETE'
        })
            .then(() => {
                setTherapists(therapists.filter(therapist => therapist.id !== therapistId));
            })
            .catch(error => setError(error.message));
    };

    const addTherapist = () => {
        fetch('http://localhost:8080/doctor/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTherapist)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to add therapist: ${response.status} ${response.statusText}`);
                }
                return response.text();
            })
            .then(() => {
                // Fetch the updated list of users
                return fetch('http://localhost:8080/doctor/getAll')
                    .then(response => response.json())
                    .then(data => setTherapists(data));
            })
            .catch(error => setError(error.message));
    };

    const updateTherapist = () => {
        fetch(`http://localhost:8080/doctor/${editingTherapist.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editingTherapist)
        })
            .then(() => {
                fetchTherapists();
            })
            .catch(error => setError(error.message));
    };

    const handleInputChange = (e, isEditing = false) => {
        const { name, value } = e.target;
        if (isEditing) {
            setEditingTherapist({ ...editingTherapist, [name]: value });
        } else {
            setNewTherapist({ ...newTherapist, [name]: value });
        }
    };

    return (
        <div className="container">
            <h2>Therapists Management</h2>
            <ul className="management-list">
                {therapists.map(therapist => (
                    <li key={therapist.id} className="management-item">
                        <div>
                            <span><strong>Email:</strong> {therapist.email}</span><br />
                            <span><strong>License Number:</strong> {therapist.licenseNumber}</span><br />
                            <span><strong>Specialization:</strong> {therapist.specialization}</span><br />
                            <span><strong>Years of Experience:</strong> {therapist.yearsOfExperience}</span><br />
                            <span><strong>Affiliations:</strong> {therapist.affiliations}</span>
                        </div>
                        <button className="edit-button" onClick={() => setEditingTherapist(therapist)}>Edit</button>
                        <button className="delete-button" onClick={() => deleteTherapist(therapist.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <h2>Add New Therapist</h2>
            <form onSubmit={e => {
                e.preventDefault();
                editingTherapist ? updateTherapist() : addTherapist();
            }}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={editingTherapist ? editingTherapist.email : newTherapist.email}
                    onChange={e => handleInputChange(e, !!editingTherapist)}
                />
                <input
                    type="text"
                    name="licenseNumber"
                    placeholder="License Number"
                    value={editingTherapist ? editingTherapist.licenseNumber : newTherapist.licenseNumber}
                    onChange={e => handleInputChange(e, !!editingTherapist)}
                />
                <input
                    type="text"
                    name="specialization"
                    placeholder="Specialization"
                    value={editingTherapist ? editingTherapist.specialization : newTherapist.specialization}
                    onChange={e => handleInputChange(e, !!editingTherapist)}
                />
                <input
                    type="text"
                    name="yearsOfExperience"
                    placeholder="Years of Experience"
                    value={editingTherapist ? editingTherapist.yearsOfExperience : newTherapist.yearsOfExperience}
                    onChange={e => handleInputChange(e, !!editingTherapist)}
                />
                <input
                    type="text"
                    name="affiliations"
                    placeholder="Affiliations"
                    value={editingTherapist ? editingTherapist.affiliations : newTherapist.affiliations}
                    onChange={e => handleInputChange(e, !!editingTherapist)}
                />
                <button type="submit">{editingTherapist ? "Update Therapist" : "Add Therapist"}</button>
            </form>
        </div>
    );
};

export default TherapistManagement;

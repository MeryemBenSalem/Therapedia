import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserManagement = () => {
    const [patients, setPatients] = useState([]);
    const [name, setName] = useState('');
    const [emergencyContact, setEmergencyContact] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [reasonForTherapy, setReasonForTherapy] = useState('');

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        try {
            const response = await axios.get('http://localhost:8080/patient/getAll');
            if (Array.isArray(response.data)) {
                setPatients(response.data);
            } else {
                setPatients([]);
            }
        } catch (error) {
            console.error('Error fetching patients:', error);
            setPatients([]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/patient/add', {
                name,
                emergencyContact,
                dateOfBirth,
                gender,
                medicalHistory,
                reasonForTherapy
            });
            console.log(response.data);
            fetchPatients(); // Refresh the list after adding a patient
            // Clear form inputs after submission
            setName('');
            setEmergencyContact('');
            setDateOfBirth('');
            setGender('');
            setMedicalHistory('');
            setReasonForTherapy('');
        } catch (error) {
            console.error('Error saving patient:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/patient/${id}`);
            console.log(response.data);
            fetchPatients(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting patient:', error);
        }
    };

    return (
        <div>
            <h1>User Management</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <br />
                <label>Emergency Contact:</label>
                <input type="text" value={emergencyContact} onChange={(e) => setEmergencyContact(e.target.value)} required />
                <br />
                <label>Date of Birth:</label>
                <input type="text" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
                <br />
                <label>Gender:</label>
                <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} required />
                <br />
                <label>Medical History:</label>
                <textarea value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)} required />
                <br />
                <label>Reason for Therapy:</label>
                <textarea value={reasonForTherapy} onChange={(e) => setReasonForTherapy(e.target.value)} required />
                <br />
                <button type="submit">Add Patient</button>
            </form>

            <h2>Patients List</h2>
            <ul>
                {patients.map((patient) => (
                    <li key={patient.id}>
                        {patient.name} - {patient.emergencyContact} - {patient.dateOfBirth} - {patient.gender}
                        <button onClick={() => handleDelete(patient.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;

import React, { useState, useEffect } from 'react';
import Card from './CardPatient.js';
import axios from 'axios';

const Patients = () => {
    const [patients, setPatients] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/consultation/doctor/6/NotAvailable')
            .then(response => {
                const patientsData = response.data.map(consultation => ({
                    name: consultation.patient.patientName,
                    dateofConsultation: consultation.consultationTime,  // Vous pouvez ajuster en fonction des données réelles
                    education: ['Not Provided'],  // Assurez-vous de modifier ceci en fonction des données réelles
                    residency: 'Not Provided'    // Assurez-vous de modifier ceci en fonction des données réelles
                }));
                setPatients(patientsData);
            })
            .catch(error => {
                console.error('Error fetching patients:', error);
                setError('Failed to fetch patients');
            });
    }, []);

    return (
        <div>
            {error ? (
                <div>Error: {error}</div>
            ) : (
                patients.map((patient, index) => (
                    <Card key={index} patient={patient} />
                ))
            )}
        </div>
    );
}

export default Patients;

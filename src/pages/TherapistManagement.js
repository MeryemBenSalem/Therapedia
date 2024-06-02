import React, { useState, useEffect } from 'react';
import './TherapistManagement.css';

const TherapistManagement = () => {
  const [therapists, setTherapists] = useState([]);
  const [newTherapists, setNewTherapists] = useState([]);

  useEffect(() => {
    // Mock data for demonstration purposes
    const mockTherapists = [
      { id: 1, name: 'Therapist One', email: 'therapist.one@example.com', createdAt: '2022-06-01', isNew: false },
      { id: 2, name: 'Therapist Two', email: 'therapist.two@example.com', createdAt: '2022-06-02', isNew: true },
      { id: 3, name: 'Therapist Three', email: 'therapist.three@example.com', createdAt: '2022-06-03', isNew: true },
    ];

    setTherapists(mockTherapists.filter(therapist => !therapist.isNew));
    setNewTherapists(mockTherapists.filter(therapist => therapist.isNew));

    // Uncomment this to fetch real data from an API
    // fetch('/api/therapists')
    //   .then(response => response.json())
    //   .then(data => setTherapists(data));
  }, []);

  const deleteTherapist = (therapistId) => {
    // Delete therapist from the list
    setTherapists(therapists.filter(therapist => therapist.id !== therapistId));

    // Uncomment this to delete therapist from an API
    // fetch(`/api/therapists/${therapistId}`, { method: 'DELETE' })
    //   .then(() => setTherapists(therapists.filter(therapist => therapist.id !== therapistId)));
  };

  const handleAccept = (therapistId) => {
    // Implement accept logic here
    console.log(`Accepted therapist with ID ${therapistId}`);
  };

  const handleReject = (therapistId) => {
    // Implement reject logic here
    console.log(`Rejected therapist with ID ${therapistId}`);
  };

  return (
    <div className="container">
      <h2>New Therapists</h2>
      <ul className="management-list">
        {newTherapists.map(therapist => (
          <li key={therapist.id} className="management-item">
            <div>
              <span><strong>Name:</strong> {therapist.name}</span><br />
              <span><strong>Email:</strong> {therapist.email}</span><br />
              <span><strong>Created At:</strong> {therapist.createdAt}</span>
            </div>
            <div className="button-group">
              <button className="action-button accept-button" onClick={() => handleAccept(therapist.id)}>Accept</button>
              <button className="action-button reject-button" onClick={() => handleReject(therapist.id)}>Reject</button>
            </div>
            <button className="action-button delete-button" onClick={() => deleteTherapist(therapist.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Existing Therapists</h2>
      <ul className="management-list">
        {therapists.map(therapist => (
          <li key={therapist.id} className="management-item">
            <div>
              <span><strong>Name:</strong> {therapist.name}</span><br />
              <span><strong>Email:</strong> {therapist.email}</span><br />
              <span><strong>Created At:</strong> {therapist.createdAt}</span>
            </div>
            <button className="action-button delete-button" onClick={() => deleteTherapist(therapist.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TherapistManagement;

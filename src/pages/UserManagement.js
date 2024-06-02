import React, { useState, useEffect } from 'react';
import './ManagementStyles.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Mock data for demonstration purposes
    const mockUsers = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', createdAt: '2022-06-01' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', createdAt: '2022-06-02' },
      { id: 3, name: 'Michael Johnson', email: 'michael.johnson@example.com', createdAt: '2022-06-03' },
    ];
    setUsers(mockUsers);

    // Uncomment this to fetch real data from an API
    // fetch('/api/users')
    //   .then(response => response.json())
    //   .then(data => setUsers(data));
  }, []);

  const deleteUser = (userId) => {
    // Delete user from the list
    setUsers(users.filter(user => user.id !== userId));

    // Uncomment this to delete user from an API
    // fetch(`/api/users/${userId}`, { method: 'DELETE' })
    //   .then(() => setUsers(users.filter(user => user.id !== userId)));
  };

  return (
    <div className="container">
      <h2>User Management</h2>
      <ul className="management-list">
        {users.map(user => (
          <li key={user.id} className="management-item">
            <div>
              <span><strong>Name:</strong> {user.name}</span><br />
              <span><strong>Email:</strong> {user.email}</span><br />
              <span><strong>Created At:</strong> {user.createdAt}</span>
            </div>
            <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;

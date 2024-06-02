import React, { useState, useEffect } from 'react';
import './ContentManagement.css';

const ContentManagement = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    // Mock data for demonstration purposes
    const mockContents = [
      { id: 1, title: 'Overcoming Anxiety', body: 'Anxiety is a normal part of life, but sometimes it can be overwhelming. Here are some tips to manage anxiety...', author: 'John Doe', status: 'Pending' },
      { id: 2, title: 'Coping with Depression', body: 'Depression is more than just feeling sad. It can affect all aspects of life. Here are some ways to cope...', author: 'Jane Smith', status: 'Pending' },
      { id: 3, title: 'Mindfulness Meditation', body: 'Mindfulness meditation can help you stay grounded and present. Learn how to practice mindfulness...', author: 'Michael Johnson', status: 'Pending' },
    ];
    setContents(mockContents);

    // Uncomment this to fetch real data from an API
    // fetch('/api/contents')
    //   .then(response => response.json())
    //   .then(data => setContents(data));
  }, []);

  const deleteContent = (contentId) => {
    // Delete content from the list
    setContents(contents.filter(content => content.id !== contentId));

    // Uncomment this to delete content from an API
    // fetch(`/api/contents/${contentId}`, { method: 'DELETE' })
    //   .then(() => setContents(contents.filter(content => content.id !== contentId)));
  };

  const acceptContent = (contentId) => {
    // Accept content by updating its status
    setContents(contents.map(content => content.id === contentId ? { ...content, status: 'Accepted' } : content));

    // Uncomment this to accept content from an API
    // fetch(`/api/contents/${contentId}/accept`, { method: 'POST' })
    //   .then(() => setContents(contents.map(content => content.id === contentId ? { ...content, status: 'Accepted' } : content)));
  };

  const modifyContent = (contentId) => {
    // Modify content logic (e.g., open a modal to edit content)
    console.log(`Modify content with ID: ${contentId}`);
  };

  return (
    <div className="container">
      <h2>Content Management</h2>
      <ul className="management-list">
        {contents.map(content => (
          <li key={content.id} className="management-item">
            <div>
              <h3>{content.title}</h3>
              <p>{content.body}</p>
              <p><strong>Author:</strong> {content.author}</p>
              <p><strong>Status:</strong> {content.status}</p>
            </div>
            <div className="button-group">
              <button className="accept-button" onClick={() => acceptContent(content.id)}>Accept</button>
              <button className="modify-button" onClick={() => modifyContent(content.id)}>Modify</button>
              <button className="delete-button" onClick={() => deleteContent(content.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentManagement;

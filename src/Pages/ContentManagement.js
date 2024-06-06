import React, { useState, useEffect } from 'react';
import './ContentManagement.css';

const ContentManagement = () => {
    const [contents, setContents] = useState([]);
    const [newContent, setNewContent] = useState({
        title: '',
        content: '',
        category: '',
        postedBy: '',
        image: '',
    });
    const [editingContent, setEditingContent] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/articles/getAll')
            .then(response => response.json())
            .then(data => setContents(data));
    }, []);

    const deleteContent = (contentId) => {
        fetch(`http://localhost:8080/api/articles/${contentId}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    setContents(contents.filter(content => content.id !== contentId));
                } else {
                    console.error('Failed to delete the content');
                }
            });
    };

    const modifyContent = (content) => {
        setEditingContent(content);
        setNewContent({
            title: content.title,
            content: content.content,
            category: content.category,
            postedBy: content.postedBy,
            image: content.image,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewContent({
            ...newContent,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingContent) {
            fetch(`http://localhost:8080/api/articles/${editingContent.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newContent),
            })
                .then(response => response.json())
                .then(updatedContent => {
                    setContents(contents.map(content => (content.id === updatedContent.id ? updatedContent : content)));
                    setEditingContent(null);
                    setNewContent({
                        title: '',
                        content: '',
                        category: '',
                        postedBy: '',
                        image: '',
                    });
                })
                .catch(error => {
                    console.error('Error updating the content:', error);
                });
        } else {
            fetch('http://localhost:8080/api/articles/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newContent),
            })
                .then(response => response.json())
                .then(createdContent => {
                    setContents([...contents, createdContent]);
                    setNewContent({
                        title: '',
                        content: '',
                        category: '',
                        postedBy: '',
                        image: '',
                    });
                })
                .catch(error => {
                    console.error('Error creating the content:', error);
                });
        }
    };

    return (
        <div className="container">
            <h2>Add New Blog </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={newContent.title}
                    onChange={handleChange}
                    placeholder="Title"
                    required
                />
                <textarea
                    name="content"
                    value={newContent.content}
                    onChange={handleChange}
                    placeholder="Content"
                    required
                />
                <input
                    type="text"
                    name="category"
                    value={newContent.category}
                    onChange={handleChange}
                    placeholder="Category"
                    required
                />
                <input
                    type="text"
                    name="postedBy"
                    value={newContent.postedBy}
                    onChange={handleChange}
                    placeholder="Posted By"
                    required
                />
                <input
                    type="text"
                    name="image"
                    value={newContent.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                />
                <button type="submit">{editingContent ? 'Update' : 'Add'} Article</button>
            </form>
            <h2>Blog Content Management</h2>
            <ul className="management-list">
                {contents.map(content => (
                    <li key={content.id} className="management-item">
                        <div>
                            <h3>{content.title}</h3>
                            <p>{content.content}</p>
                            <p><strong>Category:</strong> {content.category}</p>
                            <p><strong>Author:</strong> {content.postedBy}</p>
                        </div>
                        <div className="button-group">
                            <button className="modify-button" onClick={() => modifyContent(content)}>Edit</button>
                            <button className="delete-button" onClick={() => deleteContent(content.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContentManagement;

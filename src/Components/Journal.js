import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/JournalPage.css";
import { FaCalendarAlt, FaThumbtack } from "react-icons/fa";
import JournalHero from "./JournalHero";
import JournalImage from "../Assets/journal.png";

function Journal() {
    const [journalEntries, setJournalEntries] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showTipsModal, setShowTipsModal] = useState(true);
    const [newEntry, setNewEntry] = useState("");
    const [title, setTitle] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [activeNote, setActiveNote] = useState(null); // Track active note index

    // Fetch journal entries from the Spring Boot API
    useEffect(() => {
        fetchJournalEntries();
    }, []);

    const fetchJournalEntries = () => {
        axios.get("http://localhost:8080/api/journal-entries")
            .then(response => {
                setJournalEntries(response.data);
            })
            .catch(error => {
                console.error("Error fetching journal entries:", error);
            });
    };

    const addJournalEntry = () => {
        if (newEntry.trim() !== "" && title.trim() !== "") {
            axios.post("http://localhost:8080/api/journal-entries", {
                title: title,
                content: newEntry,
                creationDate: new Date().toISOString()
            })
                .then(response => {
                    fetchJournalEntries(); // Refresh journal entries after adding
                    setNewEntry("");
                    setTitle("");
                    setShowAddModal(false);
                    setShowTipsModal(false);
                })
                .catch(error => {
                    console.error("Error adding journal entry:", error);
                });
        }
    };

    const editJournalEntry = () => {
        if (editingIndex !== null) {
            const entryId = journalEntries[editingIndex].id;
            const originalCreationDate = journalEntries[editingIndex].creationDate;
            axios.put(`http://localhost:8080/api/journal-entries/${entryId}`, {
                title: title,
                content: newEntry,
                creationDate: originalCreationDate // Preserve original creation date
            })
                .then(response => {
                    fetchJournalEntries(); // Refresh journal entries after editing
                    setEditingIndex(null);
                    setNewEntry("");
                    setTitle("");
                    setShowAddModal(false);
                })
                .catch(error => {
                    console.error("Error editing journal entry:", error);
                });
        }
    };

    const deleteJournalEntry = (index) => {
        const entryId = journalEntries[index].id;
        axios.delete(`http://localhost:8080/api/journal-entries/${entryId}`)
            .then(response => {
                fetchJournalEntries(); // Refresh journal entries after deleting
            })
            .catch(error => {
                console.error("Error deleting journal entry:", error);
            });
    };

    const toggleNote = (index) => {
        setActiveNote(activeNote === index ? null : index); // Toggle active note
    };

    const handleAddJournalClick = () => {
        setShowAddModal(true);
    };

    const handleViewJournalsClick = () => {
        // Scroll to the part where the notes are displayed
        window.scrollTo({ top: document.getElementById("journal-entries").offsetTop, behavior: "smooth" });
    };

    return (
        <div className="journal-page">
            <JournalHero onAddClick={handleAddJournalClick} onViewClick={handleViewJournalsClick} image={JournalImage}/>
            <br/><br/><br/><br/>
            {showAddModal && (
                <div className="modal-wrapper">
                    <div className="modal" onClick={() => setShowAddModal(false)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={() => setShowAddModal(false)}>
                &times;
              </span>
                            <h2>{editingIndex !== null ? "Edit Funky Journal" : "Add New Funky Journal"}</h2>
                            <input
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <textarea
                                className="journal-textarea"
                                placeholder="Write your funky journal entry here..."
                                value={newEntry}
                                onChange={(e) => setNewEntry(e.target.value)}
                            />
                            <div className="date-container">
                                <p>Date: {new Date().toLocaleDateString()}</p>
                            </div>
                            <button className="add-entry-btn"
                                    onClick={editingIndex !== null ? editJournalEntry : addJournalEntry}>
                                {editingIndex !== null ? "Save Changes" : "Add Funky Entry"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showTipsModal && (
                <div className="modal-wrapper">
                    <div className="modal" onClick={() => setShowTipsModal(false)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={() => setShowTipsModal(false)}>
                &times;
              </span>
                            <h2>Welcome to Your Journal!</h2>
                            <p>Here are some tips and suggestions for topics you can write about:</p>
                            <br/>
                            <ul>
                                <li>Gratitude: Reflect on things you're grateful for.</li>
                                <br/>
                                <li>Self-Reflection: Write about your thoughts and feelings.</li>
                                <br/>
                                <li>Achievements: Celebrate your accomplishments, big or small.</li>
                                <br/><br/>
                            </ul>
                            <button className="add-entry-btn" onClick={() => setShowTipsModal(false)}>Start Journaling
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div id="journal-entries" className="journal-entries">
                {journalEntries.map((entry, index) => (
                    <div key={index} className={`entry-item ${activeNote === index ? 'active' : ''}`}
                         onClick={() => toggleNote(index)}>
            <span className="pin-icon">
              <FaThumbtack/>
            </span>
                        <div className="entry-header">
              <span className="calendar-icon">
                <FaCalendarAlt/>
              </span>
                            <h3 className="entry-date">{new Date(entry.creationDate).toLocaleDateString()}</h3>
                        </div>
                        <h2>{entry.title}</h2>
                        <div className="entry-content">
                            {activeNote === index ? entry.content : `${entry.content.substring(0, 200)}...`}
                        </div>
                        <div className="entry-actions">
                            <button onClick={() => {
                                setEditingIndex(index);
                                setTitle(entry.title);
                                setNewEntry(entry.content);
                                setShowAddModal(true);
                            }}>Edit
                            </button>
                            <button onClick={() => deleteJournalEntry(index)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Journal;

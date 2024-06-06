import React, { useState, useEffect } from 'react';
import Question from '../Components/Question';
import QuestionForm from '../Components/QuestionForm';
import Notification from '../Components/Notification'; // Import the Notification component
import './ForumPage.css';
import { jwtDecode } from 'jwt-decode';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ForumPage = () => {
    const [questions, setQuestions] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userId, setUserId] = useState(null);
    const [email, setEmail] = useState(null);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jwtDecode(token);
            if (decodedToken) {
                setEmail(decodedToken.sub); // assuming 'sub' contains the email
                fetchUserId(decodedToken.sub);
            }
        }
        fetchQuestions();
        fetchNewestQuestions(); // Fetch newest questions when component mounts
    }, []);

    const fetchUserId = async (email) => {
        try {
            const response = await fetch(`http://localhost:8080/profile/email/${email}`);
            if (response.ok) {
                const data = await response.json();
                setUserId(data.id); // assuming the response contains an 'id' field
            } else {
                throw new Error('Failed to fetch user ID');
            }
        } catch (error) {
            console.error('Error fetching user ID:', error);
        }
    };

    const fetchQuestions = async () => {
        try {
            const response = await fetch('http://localhost:8080/Question');
            if (!response.ok) {
                throw new Error('Failed to fetch questions');
            }
            const data = await response.json();
            const sortedQuestions = data.sort((a, b) => b.votes - a.votes);
            setQuestions(sortedQuestions);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    const fetchNewestQuestions = async () => {
        try {
            const response = await fetch('http://localhost:8080/Question');
            if (!response.ok) {
                throw new Error('Failed to fetch newest questions');
            }
            const data = await response.json();
            const sortedQuestions = data.sort((a, b) => new Date(b.date) - new Date(a.date));
            // Convert date to a simpler format
            const simplifiedQuestions = sortedQuestions.map(question => ({
                ...question,
                date: new Date(question.date).toLocaleDateString()
            }));
            setNotifications(simplifiedQuestions);
        } catch (error) {
            console.error('Error fetching newest questions:', error);
        }
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Retrieve token from localStorage
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = decodeToken(token);
            if (decodedToken) {
                console.log(decodedToken)
                setIsLoggedIn(true); // Set isLoggedIn to true if token exists
            }
        }
    }, []);

    const decodeToken = (token) => {
        try {
            // Decode the JWT token to get the payload
            // Return the decoded payload
            return jwtDecode(token);
        } catch (error) {
            // Handle decoding errors, if any
            console.error("Error decoding token:", error);
            return null;
        }};

    const addQuestion = async (questionData) => {
        if (!userId) return;
        try {
            const response = await fetch('http://localhost:8080/Question', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...questionData,
                    date: new Date().toISOString(),
                    userId: userId,
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to add question');
            }
            fetchQuestions();
        } catch (error) {
            console.error('Error adding question:', error);
        }
    };

    const voteQuestion = async (questionId, voteType) => {
        try {
            const response = await fetch(`http://localhost:8080/Question/${questionId}/${voteType}`, {
                method: 'PUT',
            });
            if (!response.ok) {
                throw new Error(`Failed to ${voteType} question`);
            }
        } catch (error) {
            console.error(`Error ${voteType}ing question:`, error);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (<div> <Navbar isLoggedIn={isLoggedIn}/>
        <div className="container forum-page">

            <div className="header">
                <h1>Welcome to our Forum page</h1>
                <button className="add-question" onClick={openModal}>Share your thoughts!</button>
            </div>
            <div className="for-not">
                <div className="forum">
                    {isModalOpen && (
                        <div className="modal-overlay" onClick={toggleModal}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <span className="close" onClick={toggleModal}>&times;</span>
                                <QuestionForm onAddQuestion={addQuestion} />
                            </div>
                        </div>
                    )}
                    <div className="question-list">
                        {questions.map((question, index) => (
                            <Question key={index} question={question} onVote={voteQuestion} userId={userId} />
                        ))}
                    </div>
                </div>
                <div className="notifications">
                    <h2 className="notif-text">Latest Posts</h2>
                    {notifications.map((notification, index) => (
                        <Notification key={index} message={`${notification.content} - ${notification.date}`} />
                    ))}
                </div>
            </div>
        </div>
            <Footer/>
        </div>
    );
};

export default ForumPage;

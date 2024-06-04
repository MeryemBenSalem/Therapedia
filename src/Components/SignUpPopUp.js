import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/signUpPopUp.css';
import PropTypes from 'prop-types';
import FrameImage from '../Assets/Frame 1.png'; 
import FrameImage1 from '../Assets/Group 5.png'; 
import doctor from '../Assets/Group 3.png';
import patient from '../Assets/patient.png';

function SpecialistButton({ isClicked, handleClick }) {
    return (
        <button
            className={`_background2 ${isClicked ? '_background2-clicked' : ''}`}
            onClick={handleClick}
        >
            <div>
                <img src={doctor} alt="Doctor" />
                <h2>SPECIALIST</h2>
            </div>
        </button>
    );
}

function UserButton({ isClicked, handleClick }) {
    return (
        <button
            className={`_background2 ${isClicked ? '_background2-clicked' : ''}`}
            onClick={handleClick}
        >
            <div>
                <img src={patient} alt="Patient" />
                <h2>USER</h2>
            </div>
        </button>
    );
}

function SignUpPopUp(props) {
    const [clickedButton, setClickedButton] = useState(null);
    const navigate = useNavigate();

    const handleSpecialistClick = () => {
        setClickedButton(clickedButton === 'specialist' ? null : 'specialist');
    };

    const handleUserClick = () => {
        setClickedButton(clickedButton === 'user' ? null : 'user');
    };

    const handleConfirmClick = () => {
        if (clickedButton === 'specialist') {
            navigate('/specialist-signup');
        } else if (clickedButton === 'user') {
            navigate('/user-signup');
        } else {
            alert('Please select a role before confirming.');
        }
    };

    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <div className="container">
                    <div className="column">
                        <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
                        <div className="component1">
                            <img src={FrameImage1} alt="Frame" />
                            <br/>
                            <h1>Sign Up</h1>
                            To access all Therapedia features, sign up now!
                            <p className="centered-text">
                                You can join us as 
                                <span className="specialist"> Specialist </span>
                                or as 
                                <span className="support-seeker"> Someone seeking support</span>
                            </p>
                            <div className="container">
                                <div className="column">
                                    <SpecialistButton 
                                        isClicked={clickedButton === 'specialist'} 
                                        handleClick={handleSpecialistClick} 
                                    />
                                </div>
                                <div className="column">
                                    <UserButton 
                                        isClicked={clickedButton === 'user'} 
                                        handleClick={handleUserClick} 
                                    />
                                </div>                                
                            </div>
                            <button className="styled" onClick={handleConfirmClick}>Confirm</button>
                            <p className="centered-text">Already have an account? <a href="/Therapedia/signup">Sign In</a></p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="component">
                            <img src={FrameImage} alt="Frame" />
                        </div>
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    ) : null; 
}

SignUpPopUp.propTypes = {
    trigger: PropTypes.bool.isRequired,
    setTrigger: PropTypes.func.isRequired,
    children: PropTypes.node
};

export default SignUpPopUp;

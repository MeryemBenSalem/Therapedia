import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/signUpPopUp.css';
import PropTypes from 'prop-types';
import FrameImage from '../Assets/Frame 1.png'; 
import FrameImage1 from '../Assets/logo2.png'; 
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
            navigate('/sign_up_doc');
        } else if (clickedButton === 'user') {
            navigate('/sign_up');
        } else {
            alert('Please select a role before confirming.');
        }
    };

    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <div className="poppcontainer">
                    <div className="column">
                        <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
                        <div className="component1">
                            <img src={FrameImage1} alt="Frame" />
                            <br/>
                            <h1>Sign Up</h1>
                            <p className="centered-text">
                            To access all Therapedia features, sign up now! <br/>
                            
                                You can join us as 
                                <span className="specialist"> Specialist </span>
                                or as 
                                <span className="support-seeker"> Someone seeking support</span>
                            </p>
                            <div className="poppcontainer">
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
                            <p className="centered-text">Already have an account? <a href="/Sign_in">Sign In</a></p>
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
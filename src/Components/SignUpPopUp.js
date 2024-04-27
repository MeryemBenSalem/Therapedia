import React from 'react';
import '../Styles/signUpPopUp.css';
import PropTypes from 'prop-types';
import FrameImage from '../Assets/Frame 1.png'; 
import FrameImage1 from '../Assets/Group 5.png'; 
import doctor from '../Assets/Group 3.png';
import patient from '../Assets/patient.png'; 


function SignUpPopUp(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <div className="container">
                    <div className="column">
                        <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
                        <div className="component1">
                            <img src={FrameImage1} alt="Description of the image" />
                            <br/>
                            <h1>Sign Up</h1>
                            To access all Therapedia features, sign up now!
                            <br/><br/>
                            <p className="centered-text">
                                You can join us as 
                                <span className="specialist"> Specialist </span>
                                or as 
                                <span className="support-seeker"> Someone seeking support</span>
                            </p>
                            <div className="container">
                                    <div className="column">
                                        <button class="_background2">
                                            <div>
                                                <img src={doctor} alt="Description of the image" />
                                                <h2>SPECIALIST</h2>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="column">
                                        <button class="_background2">
                                            <div>
                                                <img src={patient} alt="Description of the image" />
                                                <h2>USER</h2>
                                            </div>
                                        </button>
                                    </div>                                
                            </div>
                            <button class="styled">Confirm</button>
                            <p className="centered-text">Already have an account? <a href="/sign-in">Sign In</a></p>

                        </div>
                    </div>
                    <div className="column">
                        <div className="component">
                            <img src={FrameImage} alt="Description of the image" />
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
};

export default SignUpPopUp;

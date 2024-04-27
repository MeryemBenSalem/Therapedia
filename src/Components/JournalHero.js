import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/JournalHero.css";

function JournalHero({ onAddClick, onViewClick, image }) {
    const navigate = useNavigate();
    const [goUp, setGoUp] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const onPageScroll = () => {
            if (window.scrollY > 600) {
                setGoUp(true);
            } else {
                setGoUp(false);
            }
        };
        window.addEventListener("scroll", onPageScroll);

        return () => {
            window.removeEventListener("scroll", onPageScroll);
        };
    }, []);

    return (
        <div className="journal-hero-container">
            <div className="journal-hero-content">
                <div className="journal-hero-text">
                    <h1 className="journal-hero-title">Welcome to Your Journal</h1>
                    <p className="journal-hero-description">
                        Write down your thoughts, memories, and experiences.
                    </p>
                    <div className="journal-hero-buttons">
                        <button className="journal-hero-button" onClick={onAddClick}>
                            <FontAwesomeIcon icon={faPlus} /> Add New Journal
                        </button>
                        <button className="journal-hero-button" onClick={onViewClick}>
                            <FontAwesomeIcon icon={faArrowAltCircleRight} /> View Journals
                        </button>
                    </div>
                </div>
                <div className="journal-hero-image-container">
                    <img className="journal-hero-image" src={image} alt="Journal" />
                </div>
            </div>

            <div
                onClick={scrollToTop}
                className={`journal-scroll-up ${goUp ? "show-scroll" : ""}`}
            >
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </div>
        </div>
    );
}

export default JournalHero;

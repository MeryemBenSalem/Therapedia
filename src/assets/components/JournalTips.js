import React, { useEffect } from "react";
import "../Styles/JournalTips.css";

const JournalTips = () => {
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const tipsContainer = document.querySelector('.journal-tips-container');
        const tips = document.querySelectorAll('.tip-item');

        tips.forEach((tip, index) => {
            if (isElementInViewport(tip)) {
                tip.classList.add('visible');
                tipsContainer.classList.add('show');
            }
        });
    };

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    return (
        <div className="journal-tips-container">
            <h2 className="tips-heading">Tips for Effective Journaling</h2>
            <ul className="tips-list">
                <li className="tip-item"><span className="tip-number">1.</span> Establish a routine.</li>
                <li className="tip-item"><span className="tip-number">2.</span> Be honest with yourself.</li>
                <li className="tip-item"><span className="tip-number">3.</span> Experiment with different formats.</li>
            </ul>
        </div>
    );
};

export default JournalTips;

import React, { useState } from 'react';
import '../styles/Courtroom.css';

const Courtroom = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const chatUrl = 'http://localhost:3010/'; // Replace with your chat URL

    const handleClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="main-container">
            <h2>Click the button below to navigate to CourtRoom!</h2> <br />
            <button className="button" onClick={handleClick}> Communication Platform </button>

            {isModalOpen && (
                <div className="modal">
                    <button className="close-button" onClick={closeModal}>
                        X
                    </button>
                    <iframe
                        src={chatUrl}
                        className="iframe"
                        title="Chat"
                    />
                </div>
            )}
        </div>
    );
};

export default Courtroom;
// BlogModal.js
import React from 'react';
import '../styles/BlogModal.css'; // Create a CSS file for modal styles

const BlogModal = ({ isOpen, onClose, title, content, author, date }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="modal-meta">
          <span>By {author}</span>
          <span>{date}</span>
        </div>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BlogModal;
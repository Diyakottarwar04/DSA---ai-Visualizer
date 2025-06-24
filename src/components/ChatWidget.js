import React, { useState } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";
import "./ChatWidget.css";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="chat-widget">
      {open ? (
        <div className="chat-box glass">
          <div className="chat-header">
            <span className="chat-title">
              <FaRobot style={{ marginRight: "5px" }} /> AI Assistant
            </span>
            <FaTimes className="chat-close" onClick={() => setOpen(false)} />
          </div>
          <div className="chat-body">
            <p className="chat-text">Ask me anything about DSA or algorithms!</p>
            <input type="text" className="chat-input" placeholder="Type a question..." />
          </div>
        </div>
      ) : (
        <button className="chat-toggle" onClick={() => setOpen(true)}>
          💬
        </button>
      )}
    </div>
  );
};

export default ChatWidget;

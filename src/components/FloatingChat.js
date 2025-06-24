import React, { useState } from "react";
import "./FloatingChat.css";

const FloatingChat = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const handleSend = () => {
    if (message.trim() === "") return;
    const newChat = [...chatLog, { from: "user", text: message }];
    setChatLog(newChat);
    setMessage("");
    // AI response mock (replace with API)
    setTimeout(() => {
      setChatLog(prev => [...prev, { from: "ai", text: "This is a response from AI!" }]);
    }, 1000);
  };

  return (
    <div className="chat-wrapper">
      {open && (
        <div className="chat-box">
          <div className="chat-header">🤖 AI Assistant</div>
          <div className="chat-body">
            {chatLog.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.from}`}>{msg.text}</div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Ask something..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
      <button className="chat-fab" onClick={() => setOpen(!open)}>
        🤖
      </button>
    </div>
  );
};

export default FloatingChat;

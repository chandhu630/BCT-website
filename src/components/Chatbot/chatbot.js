import React, { useState } from "react";
import axios from "axios";
import "./chat.css"; // Import CSS file for styling

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState(""); // State to hold the user input
  const [chatHistory, setChatHistory] = useState([]); // State to store chat history
  const [loading, setLoading] = useState(false); // State to handle loading spinner

  // Function to handle form submission (user query)
  const sendMessage = async () => {
    if (!userMessage) return;

    setChatHistory([...chatHistory, { sender: "user", message: userMessage }]);
    setLoading(true); // Show loading state while fetching response
    setUserMessage(""); // Clear input field

    try {
      const response = await axios.post("http://localhost:5000/query", {
        userMessage, // Send the user's message to the backend
      });

      setChatHistory([
        ...chatHistory,
        { sender: "user", message: userMessage },
        { sender: "bot", message: response.data.botMessage }, // Add bot's response to chat history
      ]);
    } catch (error) {
      console.error("Error:", error);
      setChatHistory([
        ...chatHistory,
        { sender: "user", message: userMessage },
        { sender: "bot", message: "Sorry, something went wrong." },
      ]);
    }

    setLoading(false); // Hide loading spinner
  };

  return (
    <div className="chatbot-container">
      <h1 className="chatbot-header"> Chatbot <i style={{color:"orange"}} className="fa-solid fa-comment-dots"></i></h1>
      <div className="chat-history">
        {chatHistory.map((entry, index) => (
          <div
            key={index}
            className={`chat-entry ${entry.sender === "user" ? "user" : "bot"}`}
          >
            <span className="sender">
              {entry.sender === "user" ? (
                <i className="fa-solid fa-user-circle"></i>
              ) : (
                <i className="fa-solid fa-comment-dots"></i> 
              )}
            </span>
            <span className="message">{entry.message}</span>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          className="user-input"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Ask your question..."
        />
        <button className="send-button" onClick={sendMessage}>Send</button>
      </div>
      {loading && <p className="loading-text">Loading...</p>}
    </div>
  );
};

export default Chatbot;

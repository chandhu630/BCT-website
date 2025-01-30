import React from "react";

const GPTSidebar = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>GPT Assistant</h2>
      <textarea
        style={{ width: "100%", height: "150px", marginBottom: "10px", padding: "10px" }}
        placeholder="Type your question here..."
      ></textarea>
      <button
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Ask GPT
      </button>
    </div>
  );
};

export default GPTSidebar;

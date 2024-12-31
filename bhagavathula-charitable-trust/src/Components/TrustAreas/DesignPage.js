import React from "react";
import { useParams } from "react-router-dom";
import RhSchools from "./Education/RhSchools";

const DesignPage = ({ data }) => {
  const { aboutId, trustId } = useParams();
  const contentKey = aboutId || trustId; // Dynamically pick the key
  const content = data[contentKey];

  if (!content) {
    return (
      <div style={{ padding: "20px", textAlign: "center", marginTop: "200px" }}>
        <RhSchools/>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        marginTop: "200px",
        textAlign: "center",
      }}
    >
      <h1>{content.title}</h1>
      <p>{content.content}</p>
    </div>
  );
};

export default DesignPage;

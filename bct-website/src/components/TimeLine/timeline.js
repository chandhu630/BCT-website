import React, { useState } from "react";
import "./timeline.css";

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(2020);

  const timelineData = {
    2020: {
      title: "Year of Growth",
      content: "In 2020, we expanded our operations globally and reached new heights.",
    },
    2021: {
      title: "Challenges and Innovations",
      content: "2021 brought challenges, but we overcame them with innovative solutions.",
    },
    2022: {
      title: "Technological Advancement",
      content: "We introduced cutting-edge technologies that revolutionized our industry.",
    },
    2023: {
      title: "Sustainability Focus",
      content: "In 2023, we prioritized sustainable practices and eco-friendly innovations.",
    },
    2024: {
      title: "Future Ready",
      content: "Preparing for a future full of opportunities and growth.",
    },
  };

  const years = Object.keys(timelineData).map(Number);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const { title, content } = timelineData[selectedYear];

  return (
    <div style={{marginTop:"70px"}} className="timeline-container">
      <h1 className="timeline-title">Our Journey</h1>

      {/* Timeline Dots */}
      <div className="timeline-dots">
        {years.map((year) => (
          <button
            key={year}
            className={`timeline-dot  ${year === selectedYear ? "active" : ""}`}
            onClick={() => handleYearChange(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Timeline Content */}
      <div className="timeline-content">
        <button
          className="timeline-btn red"
          onClick={() =>
            handleYearChange(years[(years.indexOf(selectedYear) - 1 + years.length) % years.length])
          }
        >
        <i class="fa-solid fa-angle-left"></i>
        </button>

        <div className="timeline-text">
          <h2 className="timeline-year">{selectedYear}</h2>
          <h3 className="timeline-title-text">{title}</h3>
          <p className="timeline-description">{content}</p>
        </div>

        <button
          className="timeline-btn red"
          onClick={() =>
            handleYearChange(years[(years.indexOf(selectedYear) + 1) % years.length])
          }
        >
         <i class="fa-solid fa-angle-right"></i> 
        </button>
      </div>
    </div>
  );
};

export default Timeline;

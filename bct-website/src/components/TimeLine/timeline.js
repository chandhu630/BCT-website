import React, { useState, useEffect } from "react";
import "./timeline.css";

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(1968);

  const timelineData = {
    1968: {
      title: "Janmabhoomi Project",
      content:
        "Dr. BV Parameswara Rao plays a catalytic role in building Bhagavathula Somanna High School with contributions from villagers.",
    },
    1976: {
      title: "BCT Registration",
      content: "BCT is registered to work on integrated rural development.",
    },
    1981: {
      title: "Discussions in New Delhi",
      content:
        "Dr. BV Parameswara Rao discusses India's rural development with Smt. Indira Gandhi, Rajiv Gandhi, and World Bank President Dr. Robert McNamara.",
    },
    1988: {
      title: "Man of the Year",
      content:
        "Dr. Rao is facilitated as 'Man of the Year' by The Week magazine for his pioneering work in village development.",
    },
    1992: {
      title: "Community Rehabilitation",
      content:
        "BCT starts community-based rehabilitation of people with disabilities with MIBLOU, Geneva, and Sanchar, Kolkata.",
    },
    1995: {
      title: "Skill-Oriented Education",
      content:
        "BCT establishes a residential high school offering rurally-biased, skill-oriented, value-based education.",
    },
    2003: {
      title: "Padayatra",
      content:
        "Dr. Rao conducts a padayatra in rural Visakhapatnam to promote skill-oriented, self-reliant, village-based education.",
    },
    2007: {
      title: "Bhajana Yagnam",
      content:
        "BCT conducts a 21-day 'Bhajana Yagnam' with over 50,000 villagers and begins rejuvenation of folk arts.",
    },
    2012: {
      title: "Industrial Training Institute",
      content:
        "BCT starts an Industrial Training Institute (ITI) under the CTS scheme of NCVT to train up to 100 students.",
    },
    2014: {
      title: "SMART Center Partnership",
      content:
        "BCT partners with Tech Mahindra Foundation to establish SMART centers for peri-urban youth training.",
    },
    2019: {
      title: "Prerana Initiative",
      content:
        "BCT launches Farmer Field Schools and starts the Prerana initiative in tribal Paderu with Vibha Foundation and Sikshana Foundation.",
    },
  };

  const years = Object.keys(timelineData).map(Number);

  // Handle year change
  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedYear((prevYear) => {
        const currentIndex = years.indexOf(prevYear);
        return years[(currentIndex + 1) % years.length];
      });
    }, 5000); // Change year every 5 seconds

    return () => clearInterval(interval);
  }, [years]);

  const { title, content } = timelineData[selectedYear];

  return (
    <div style={{ marginTop: "70px" }} className="timeline-container">
      <h1 className="timeline-title">BCT Timeline</h1>

      {/* Timeline Dots */}
      <div className="timeline-dots">
        {years.map((year) => (
          <button
            key={year}
            className={`timeline-dot ${year === selectedYear ? "active" : ""}`}
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
            handleYearChange(
              years[(years.indexOf(selectedYear) - 1 + years.length) % years.length]
            )
          }
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>

        <div className="timeline-text">
          <h2 className="timeline-year">{selectedYear}</h2>
          <h3 className="timeline-title-text">{title}</h3>
          <p className="timeline-description">{content}</p>
        </div>

        <button
          className="timeline-btn red"
          onClick={() =>
            handleYearChange(
              years[(years.indexOf(selectedYear) + 1) % years.length]
            )
          }
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Timeline;

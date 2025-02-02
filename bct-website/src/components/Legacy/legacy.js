import React from "react";
import "./legacy.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

const LegacyPage = () => {
  return (
    <div className="legacy-wrapper">
      {/* Floating Balloons */}
      <div className="balloon"></div>
      <div className="balloon"></div>
      <div className="balloon"></div>
      <div className="balloon"></div>
      <div className="balloon"></div>

      {/* Header Section */}
      <header className="legacy-header">
        <h1>Legacy</h1>
      </header>

      {/* Main Section */}
      <div className="legacy-content">
        {/* Image Section */}
        <div className="image-container">
          <img
            src="./imgs/bvp.png"
            alt="Dr. BV Parameswara Rao"
            className="legacy-image"
          />
        </div>

        {/* Text Section */}
        <div className="textcontainer">
          <p>
            <strong style={{ color: "#EC4342" }}>Dr. BV Parameswara Rao </strong>
            spent his growing years in the village of Dimili and Visakhapatnam.
            Greatly influenced by the knowledge he saw in common simple
            villagers, he went on to do his PhD in Nuclear Sciences at Penn
            State University. However, as his heart still lay in India, he
            returned soon after and began to live at his native village. Seeing
            the plight of the people in his neighbourhood, he started the first
            pilot project of setting up a school with public participation.
            Soon, Bhagavatula Charitable Trust started operations, and Dr. BV
            Rao went on to lead many projects, with many even becoming models
            for replication across India.
          </p>
          <p>
            His expertise and dedication were sought by both global and
            national organizations. He therefore associated with the World
            Bank, National Literacy Mission, and even played a key role in
            starting the ILP, DWCRA and other projects.
          </p>
          <p>
            A true example of how one small step can impact a large change, he
            was also chosen as The Week Magazine’s ‘Man of the Year’. A
            simply-clad man who placed the villagers’ wisdom in high regard,
            Dr. Parameswara Rao left the mortal realm on June 9, 2019. While the
            void cannot be filled, his lessons, wisdom and conversations linger
            on, along with the exemplary work that continues to make the world
            a better place.
          </p>
          <div className="button-container">
            <a href="https://www.theweek.in/news/india/2019/06/11/the-week-archives-dr-parameswara-rao-a-trust-that-transformed-life-andhra-villages.html"><button className="styled-button"><FontAwesomeIcon className="custom-icon" icon={faPaperclip} /> An article on him in TheWeek</button></a>
            <a href="https://www.bctindia.org/wp-content/uploads/2022/06/THEWEEKARCHIVES.pdf"><button className="styledpdfbutton">View As PDF</button></a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LegacyPage;

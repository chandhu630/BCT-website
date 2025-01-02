import React, { useState } from 'react';
import './staffDic.css';
import Footer from "../Footer/footer";

const StaffDirectory = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const academicTeachers = [
    {
      name: "D Varaprasad",
      position: "Telugu Teacher",
      description: "Catering to students from villages who come with minimal education, D Varaprasad inculcates in them a love for their mother tongue. Associated with the school since a few years, he believes in holistic education for every child.",
      image: "https://via.placeholder.com/300x400",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      name: "M Siva Prasad",
      position: "English Teacher",
      description: "Hailing from an agrarian background, M Siva Prasad is the only educated member in his family. Having completed his B.Ed., he has been teaching the global language of English to students since 2018.",
      image: "https://via.placeholder.com/300x400",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      name: "V Satyaji",
      position: "Hindi Teacher",
      description: "Learning a language is akin to opening a window into a new world. Teaching Hindi at the school since a few years, V Satyaji believes that a conducive learning environment is the key to well-educated children.",
      image: "https://via.placeholder.com/300x400",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },




    {
        name: "K Satyavathi",
        position: "Physical Sciences",
        description: "An M.Sc. and B.Ed, K Satyavathi enjoys teaching sciences to inquisitive young minds. Instilling concepts in a conducive and happy environment, she feels that she learns as much from the students, as she teaches them.",
        image: "https://via.placeholder.com/300x400",
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
      },
      {
        name: "S Ramesh Babu",
        position: "Mathematics",
        description: "Transferring his love for Mathematics to his students, S Ramesh Babu is qualified with an M Sc and B Ed. Enabling students to improve in the subject, he actively engages in using varied tools to instill the concepts in his students.",
        image: "https://via.placeholder.com/300x400",
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
      },
      {
        name: "D Nookaraju",
        position: "Social Studies Teacher",
        description: "Bringing the world to his students is D Nookaraju. An alumnus of the school, he has been imparting the essential knowledge of social studies to students for the past 7 years now.",
        image: "https://via.placeholder.com/300x400",
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
      },
      {
        name: "DV Ramana",
        position: "Physical Education and Computer Teacher",
        description: "From physical fitness to technological skill-sets, DV Ramana, trains students on two very important aspects. Often overlooked in schools, and more so in rural Vizag, these two subjects enrich every student’s education at the school, and makes them future-ready.",
        image: "https://via.placeholder.com/300x400",
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
  ];

  const skillsInstructors = [
    {
      name: "D Padma",
      position: "Tailoring Skills Instructor/Vice Principal",
      description: "If BCT school hadn't started operations in 1995, she and others like her would have been uneducated, she shares. The learning model enabled Padma to learn, and find a passion in the skill of tailoring.",
      image: "https://via.placeholder.com/300x400",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      name: "D Ramakrishna",
      position: "Tailoring Skills Instructor",
      description: "A stitch in time can be a lifeline. Tailoring the education of many children that include the physically challenged, D Ramakrishna imparts a necessary skill, that can create an earning opportunity for his students.",
      image: "https://via.placeholder.com/300x400",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        name: "D Ramalakshmi",
        position: "Teacher for Specially Abled at the Sri PV Venkatesan Center",
        description: "Afflicted by polio, yet not a victim to it, D Ramalakshmi is a constant source of inspiration and role model for her students at the Sri PV Venkatesan Centre. She teaches them sign language, sewing and academics as well.",
        image: "https://via.placeholder.com/300x400",
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
      },
      {
        name: "KV Ganesh",
        position: "Tailoring Skills Instructor",
        description: "A stitch in time can be a lifeline. Tailoring the education of many children that include the physically challenged, D Ramakrishna imparts a necessary skill, that can create an earning opportunity for his students.",
        image: "https://via.placeholder.com/300x400",
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
      },
      {
        name: "P Anantha Lakshmi ",
        position: "Charkha Skills Instructor",
        description: "Enabling the skill of charkha to live on amongst school students, Anantha Lakshmi is an extremely patient teacher. A part of the school since 25 years, she imparts a valuable skill in hand-eye coordination, as she keeps the art of spinning alive.",
        image: "https://via.placeholder.com/300x400",
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
      },
     
  ];

  return (
    <div className="faculty-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <img 
            src="https://via.placeholder.com/150" 
            alt="BCT Logo" 
            className="bct-logo" 
          />
          <h1>Our Faculty</h1>
          <p>Dedicated to Rural Education Excellence</p>
        </div>
      </div>

      {/* Academic Teachers Section */}
      <section className="teachers-section">
        <h2>Academic Teachers</h2>
        <div className="teachers-grid">
          {academicTeachers.map((teacher, index) => (
            <div className="teacher-card" key={index}>
              <div className="card-media">
                <img src={teacher.image} alt={teacher.name} />
                <button 
                  className="video-btn" 
                  onClick={() => handleVideoClick(teacher.video)}
                >
                  <i className="fas fa-play"></i>
                </button>
              </div>
              <div className="card-content">
                <h3>{teacher.name}</h3>
                <h4>{teacher.position}</h4>
                <p>{teacher.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Instructors Section */}
      <section className="instructors-section">
        <h2>Skills Instructors</h2>
        <div className="instructors-grid">
          {skillsInstructors.map((instructor, index) => (
            <div className="instructor-card" key={index}>
              <div className="card-media">
                <img src={instructor.image} alt={instructor.name} />
                <button 
                  className="video-btn" 
                  onClick={() => handleVideoClick(instructor.video)}
                >
                  <i className="fas fa-play"></i>
                </button>
              </div>
              <div className="card-content">
                <h3>{instructor.name}</h3>
                <h4>{instructor.position}</h4>
                <p>{instructor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeVideo}>
              <i className="fas fa-times"></i>
            </button>
            <video controls autoPlay>
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default StaffDirectory;
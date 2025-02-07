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
      image: "/imgs/teachers/varaprasad.png",
      video: "https://www.youtube.com/watch?v=5wVA0FrrSCk"
    },
    {
      name: "M Siva Prasad",
      position: "English Teacher",
      description: "Hailing from an agrarian background, M Siva Prasad is the only educated member in his family. Having completed his B.Ed., he has been teaching the global language of English to students since 2018.",
      image: "/imgs/teachers/sivaprasad.png",
      video: "https://www.youtube.com/watch?v=dmy7BQeoekU&t=1s"
    },
    {
      name: "V Satyaji",
      position: "Hindi Teacher",
      description: "Learning a language is akin to opening a window into a new world. Teaching Hindi at the school since a few years, V Satyaji believes that a conducive learning environment is the key to well-educated children.",
      image: "/imgs/teachers/satyaji.png",
      video: "https://www.youtube.com/watch?v=P-MxsShVHDA"
    },
    {
        name: "K Satyavathi",
        position: "Physical Sciences",
        description: "An M.Sc. and B.Ed, K Satyavathi enjoys teaching sciences to inquisitive young minds. Instilling concepts in a conducive and happy environment, she feels that she learns as much from the students, as she teaches them.",
        image: "/imgs/teachers/satyavathi.png",
        video: "https://www.youtube.com/watch?v=ebSrTyKAHD4"
      },
      {
        name: "S Ramesh Babu",
        position: "Mathematics",
        description: "Transferring his love for Mathematics to his students, S Ramesh Babu is qualified with an M Sc and B Ed. Enabling students to improve in the subject, he actively engages in using varied tools to instill the concepts in his students.",
        image: "/imgs/teachers/ramesh.png",
        video: "https://www.youtube.com/watch?v=TDNujCim7oQ"
      },
      {
        name: "D Nookaraju",
        position: "Social Studies Teacher",
        description: "Bringing the world to his students is D Nookaraju. An alumnus of the school, he has been imparting the essential knowledge of social studies to students for the past 7 years now.",
        image: "/imgs/teachers/nookraj.png",
        video: "https://www.youtube.com/watch?v=a2UtKvTVGR4"
      },
      {
        name: "DV Ramana",
        position: "Physical Education and Computer Teacher",
        description: "From physical fitness to technological skill-sets, DV Ramana, trains students on two very important aspects. Often overlooked in schools, and more so in rural Vizag, these two subjects enrich every student's education at the school, and makes them future-ready.",
        image: "/imgs/teachers/ramana.png",
        video: "https://www.youtube.com/watch?v=W6KOZWauaWw"
      }
  ];

  const skillsInstructors = [
    {
      name: "D Padma",
      position: "Tailoring Skills Instructor/Vice Principal",
      description: "If BCT school hadn't started operations in 1995, she and others like her would have been uneducated, she shares. The learning model enabled Padma to learn, and find a passion in the skill of tailoring.",
      image: "/imgs/teachers/padma.png",
      video: "https://www.youtube.com/watch?v=n-8d4DN6PXs"
    },
    {
      name: "D Ramakrishna",
      position: "Tailoring Skills Instructor",
      description: "A stitch in time can be a lifeline. Tailoring the education of many children that include the physically challenged, D Ramakrishna imparts a necessary skill, that can create an earning opportunity for his students.",
      image: "/imgs/teachers/ramakrishna.png",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        name: "D Ramalakshmi",
        position: "Teacher for Specially Abled at the Sri PV Venkatesan Center",
        description: "Afflicted by polio, yet not a victim to it, D Ramalakshmi is a constant source of inspiration and role model for her students at the Sri PV Venkatesan Centre. She teaches them sign language, sewing and academics as well.",
        image: "/imgs/teachers/ramalakshmi.png",
        video: "https://www.youtube.com/watch?v=372DSAOHlE0"
      },
      {
        name: "KV Ganesh",
        position: "Electrical Skills Instructor",
        description: "A stitch in time can be a lifeline. Tailoring the education of many children that include the physically challenged, D Ramakrishna imparts a necessary skill, that can create an earning opportunity for his students.",
        image: "/imgs/teachers/ganesh.png",
        video: "https://www.youtube.com/watch?v=OGKUrSJPxVc"
      },
      {
        name: "P Anantha Lakshmi ",
        position: "Charkha Skills Instructor",
        description: "Enabling the skill of charkha to live on amongst school students, Anantha Lakshmi is an extremely patient teacher. A part of the school since 25 years, she imparts a valuable skill in hand-eye coordination, as she keeps the art of spinning alive.",
        image: "/imgs/teachers/ananthalakshmi.png",
        video: "https://www.youtube.com/watch?v=MtervfcY6y0"
      },
     
  ];

  return (
    <div className="faculty-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          {/* <img 
            src="/imgs/bct.png" 
            alt="BCT Logo" 
            className="bct-logo" 
          /> */}
          {/* <h1>Our Faculty</h1>
          <p>Dedicated to Rural Education Excellence</p> */}
        </div>
      </div>
     
      {/* New Video Section */}
      <div className="video-section">
        <div className="video-container">
          {/* <img src='/imgs/teachers/ramsirvideo.png' alt="B. Sri Ram Murthy" className="video-image" />         */}
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/bvPZV3wQ9cU" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
          <div className="card-content-middle">
            <h3>B. Sri Ram Murthy</h3>
            <h4>CEO/Secretary</h4>
            <p>
              The Indian education needs to change, and our villages need a more rurally-biased approach to it. 
              BCT's Residential Model high school serves to be an example, as it provides a mix of academics, 
              vocational skills and social animation to its students.
            </p>
          </div>
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
            <iframe 
              width="560" 
              height="315" 
              src={`https://www.youtube.com/embed/${new URL(selectedVideo).searchParams.get('v')}`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffDirectory;
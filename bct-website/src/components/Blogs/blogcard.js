import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./blogcard.css";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Sri PV Venkatesan Center Revamped",
      excerpt: "On 11th November, buffaloes were distributed at the Haripuram campus.",
      content: 
      `
      <p>However, soon Covid happened, and the work had to pause.It was in the past few months that the construction of the entire structure, its electrification and painting finally took place.The renovated buildings of Sri P V Venkatesan Center were inaugurated on November 21st, 2021 by Sri Atul Bhatt, Chairman and Managing Director of the RINL.</p>
      <p> Visakhapatnam. The ceremony was held at Sri PVV Center in presence of honorable guest Sri Atul Bhatt, Sri B Sri Ram Murty, the team of BCT and Residential High School students along with 15 PWD students from the center. The children welcomed the guest with cultural programs, which warmed the hearts of the gathering. After an introductory speech by Mr. Sri Ram Murty, Secretary, BCT, PWD students of the center performed a skit on CAB (Covid Appropriate Behaviour). Sri Atul Bhatt encouraged the PWD students’ development in overall skills. Students presented gifts to the guests and thanked all the participants in sign language.",
     </p>`,
      image: "imgs/pv.png",
      date: "2024-01-07",
    },
    {
      id: 2,
      title: "Meeting the Parents",
      excerpt: "The BCT Residential high school parent’s day meeting was held on 19th March.",
      content: `<p>The BCT Residential high school parents day meeting was held on the 19th March. 60 parents attended this meeting where BCT Joint Secretary Sri Sitaramaraju graced as the Chief guest. The meeting began with a display of the folk arts learnED by students, while Vice Principals of the school, Sri Varaprasad and Smt Padmavathi spoke about the student’s overall performance, their behaviour and the role of the school in shaping their future.</p>
      <p> Few parents came forward to share their feedback, and it was heartening to hear about the change they could see in their children. One of the parents also came forward to award prize money to 3 students who obtained good marks in the grade 10 examinations. This encouraging meeting, strengthened the community cohesiveness and brought together the students, teachers and school management.</p>`,
      image: "imgs/meeting.png",
      date: "2024-03-19",
    },
    {
      id: 3,
      title: "Sankranti on Campus",
      excerpt: "On January 7, BCT school organized a rangoli (muggulu) competition.",
      content: `<p>BCT school celebrated Sankranti on January 7 with a vibrant rangoli competition for children and staff. Judges awarded prizes for the colorful creations, and celebrations extended to BCT TMF SMART centers.In villages, the Sankranti Sambaralu ran from January 13–31, 2022, across 60 villages.
        </p><p> Events included traditional games, folk dances, bhajans, and sports competitions. Villages raised funds, and BCT distributed 3000 certificates of appreciation. The program fostered unity and showcased youth leadership in preserving culture.</p> `,
      image: "imgs/rangoli.png",
      date: "2024-01-07",
    },
    {
      id: 4,
      title: "Buffalo distribution to PWDs",
      excerpt: "Self – sustainability is a great satisfaction for anyone. BCT has provided many",
      content: 
      `<p>Self – sustainability is a great satisfaction for anyone. BCT has provided many opportunities to the challenged to earn their livelihood and facilitate them to become supporters rather than a burden to others. </p>
       <p>As part of this, 15 differently-abled persons were identified and given buffalos as livestock is the best source of income in the region. Now, these PwDs will be able to supply milk and get paid. Also, they can improve their nutritional intake.On 11th November, buffaloes were distributed at the Haripuram campus in the presence of Sri.V.Jaganmohana Rao, D.G.M, Sri.D.Vasantharao, Senior Manager, and Sri.R.Vittal, H.R from Tata Relief Committee, and Sri B Sri Ram Murty, Secretary, BCT.</p> `,
      image: "imgs/pwds.png",
      date: "2024-01-07",
    },
    {
      id: 5,
      title: "SAC meeting held",
      excerpt: "On March 11 at BCT KVK 28 participants came together for the annual Scientific Advisory",
      content: `<p>On March 11 at BCT KVK 28 participants came together for the annual Scientific Advisory Committee (SAC) meeting. Participants presented about activities taken up in the past year and elaborated on future plans.</p>
      <p> Heads of Agriculture and allied sectors came together with collaborative departments that a re members in the Scientific Advisory committee. The Chairman, BCT KVK, DR Nominee from ANGRAU, ADR,RARS Analkapalle, heads and representative from Agriculture, Horticulture, Animal husbandry, CIFT, NABARD, RARS, Chintapalle, KVK, Kondempudi, DARRC, Visakhapatnam, DRDA,and farmer members participated in the program.</p>`,
      image: "imgs/sac.png",
      date: "2024-01-07",
    },
    {
      id: 6,
      title: "Central CAG meeting held",
      excerpt: "Formulated to solve problems in their villages, Community Action Groups comprise of local leaders.",
      content: `<p>Formulated to solve problems in their villages, Community Action Groups comprise of local leaders. The CAGs regularly meet in their villages to address and solve pertinent issues.</p>
      <p> A monthly meet is also held at BCT campus to review the development. In the months of March and April, BCT Secretary Sri B Sri Ram Murty called for the central meeting. Led by a convenor and co-convenor, this was held at Panchadarla farm in the months of March and April.Here they discussed about various topics. Soil Scientist of BCT KVK Srihari informed farmers of the importance of providing soil for future generations to plant organic crops. Sri Sitaramraju congratulated members on the success of the 2022 Sankranti Sambaralu and took inputs on upcoming activities. Action plans for village development, crop management, admissions into school and ITI programs were discussed at the event.</p>`,
      image: "imgs/cc.png",
      date: "2024-01-07",
    },
    {
      id: 7,
      title: "Picnic time for school students",
      excerpt: "The end of February brought in with it the feel of normalcy, as students could yet",
      content: `<p>The end of February brought in with it the feel of normalcy, as students could yet again go for the much awaited school picnic. While the school conducts a picnic for its students every year, the past 2 years did not have any picnics due to Covid.</p>
      <p> However this year, all school students were taken by buses to the Visakhapatnam zoo and Tenneti park for a school picnic. Needless to say, the children enjoyed this lovely outing with friends. The unexpected cherry on the top was the Navy day parade which was happening at the same day. The thrilled children enjoyed seeing the many ships and aerial displays on the occasion.</p>`,
      image: "imgs/picnic.png",
      date: "2024-01-07",
    },
    {
      id: 8,
      title: "Comprehensive Education Initiative at Paderu",
      excerpt: "BCT initiated a 10-day teachers training program for government school teachers in tribal Paderu.",
      content: `<p>On June 8, 2022, BCT initiated a 10-day teacher training program in Paderu, Visakhapatnam district, in collaboration with the Government of Andhra Pradesh (SSA), VIBHA INDIA, LeapForWord, and Sikshna Foundation. </p><p>The program trained 354 teachers from 11 tribal mandals to enhance education quality and engagement.Training Highlights:English Reading Program: Mother-tongue-based techniques for effective English teaching.Inclusive Education: Awareness and skills to integrate children with disabilities into schools Prerana Program: A child-centric model to make learning enjoyable.My Shaala App: A tool for mentors to track and guide students.We Love Reading: Activities to foster reading habits, including book banks, reading hours, and community reading events.</p>`,
      image: "imgs/student.png",
      date: "2024-01-07",
    },
    {
      id: 9,
      title: "Waste Decomposer Training",
      excerpt: "In order to increase soil health against soil borne diseases and to promote optimum waste",
      content: `<p>In order to increase soil health against soil borne diseases and to promote optimum waste management in vegetable crops, training on the preparation of waste decomposer was taken up at various villages. At ChinnaMallavaram of Koyyuru mandal, the event was held on 4th January, and saw 11 farmers participate.</p><p> They saw the demonstration on preparation of waste decomposer with 2kg jaggery in 200 litres of water. Precautions, usage and benefits were explained to farmers. In ongoing events, 5 waste decomposers were given to 5 farmers of Anakapalle, Paderu, Nathavaram, Narsipatnam and Payakaraopeta mandals on January 9. 21 participants in the tribal region of Madem received these too. Input distribution of neem seed powder pellets, sticky traps, Azadiractin and bio pesticides along with 15 waste decomposer bottles was done for tribal farmers at Pentapadu village. Progressive farmers K.Suresh, Dopperla village and R.Gangaraju, Hasthinapuram (Naidupalem) village also received the waste decomposers.</p>`,
      image: "imgs/decomposer.png",
      date: "2024-01-07",
    },
  ];

  const post = blogPosts.find((blog) => blog.id === parseInt(id));

  if (!post) return <p>Blog not found!</p>;
  const paragraphs = post.content.split('\n').filter(paragraph => paragraph.trim() !== '');


  return (
    <div className="blog-details">
      <img
        src={`/${post.image}`}
        alt={post.title}
        className="blog-details-image"
      />
      <p className="blog-dateDetails">Published on: {post.date}</p>
      <h1 className="blog-title">{post.title}</h1>
      <div
        className="blog-contentDetails"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
      <button className="back-btn" onClick={() => navigate("/blog")}>
        ← Back to Blogs
      </button>
    </div>
  );
};

export default BlogDetails;

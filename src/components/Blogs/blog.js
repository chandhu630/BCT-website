// import "./blog.css";

// const BlogPage = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       title: "Sri PV Venkatesan Center Revamped",
//       excerpt: "On 11th November, buffaloes were distributed at the Haripuram campus.",
//       content: "On January 7, BCT school organized a rangoli competition...",
//       image: "imgs/pv.png",
//       date: "2024-01-07",
//     },
//     {
//       id: 2,
//       title: "Meeting the Parents",
//       excerpt: "The BCT Residential high school parent’s day meeting was held on 19th March.",
//       content: "On March 11 at BCT KVK, 28 participants came together...",
//       image: "imgs/meeting.png",
//       date: "2024-03-19",
//     },
//     {
//       id: 3,
//       title: "Sankranti on Campus",
//       excerpt: "On January 7, BCT school organized a rangoli (muggulu) competition.",
//       content: "CSS Grid is a powerful tool for creating responsive designs...",
//       image: "imgs/rangoli.png",
//       date: "2024-01-07",
//     },
//     {
//             id: 4,
//             title: "Buffalo distribution to PWDs",
//             excerpt: "Self – sustainability is a great satisfaction for anyone. BCT has provided many",
//             content: "TypeScript is a superset of JavaScript that adds static typing...",
//             image: "imgs/pwds.png",
//             date: "2024-01-07",
//           },
//           {
//             id: 5,
//             title: "SAC meeting held",
//             excerpt: "On March 11 at BCT KVK 28 participants came together for the annual Scientific Advisory",
//             content: "Next.js is a React framework for building fast apps...",
//             image: "imgs/sac.png",
//             date: "2024-01-07",
//           },
//           {
//             id: 6,
//             title: "Central CAG meeting held",
//             excerpt: "Formulated to solve problems in their villages, Community Action Groups comprise of local leaders.",
//             content: "TypeScript is a superset of JavaScript that adds static typing...",
//             image: "imgs/cc.png",
//             date: "2024-01-07",
//           },
//           {
//             id: 7,
//             title: "Picnic time for school students",
//             excerpt: "The end of February brought in with it the feel of normalcy, as students could yet",
//             content: "Next.js is a React framework for building fast apps...",
//             image: "imgs/picnic.png",
//             date: "2024-01-07",
//           },
//           {
//             id: 8,
//             title: "Comprehensive Education Initiative at Paderu",
//             excerpt: "BCT initiated a 10-day teachers training program for government school teachers in tribal Paderu. ",
//             content: "TypeScript is a superset of JavaScript that adds static typing...",
//             image: "imgs/student.png",
//             date: "2024-01-07",
//           },
//           {
//             id: 9,
//             title: "Waste Decomposer Training",
//             excerpt: "In order to increase soil health against soil borne diseases and to promote optimum waste ",
//             content: "Next.js is a React framework for building fast apps...",
//             image: "imgs/decomposer.png",
//             date: "2024-01-07",
//           },
    
//   ];

//   return (
//     <div className="blog-page">
//       <h1 className="page-title">Our Blogs</h1>
//       <div className="blog-grid">
//         {blogPosts.map((post) => (
//           <div key={post.id} className="blog-card">
//             <img src={post.image} alt={post.title} className="blog-image" />
//             <h2 className="blog-title">{post.title}</h2>
//             <p className="blog-date">Published: {post.date}</p>
//             <p className="blog-excerpt">{post.excerpt}</p>
//             <button className="read-more-btn">Read More</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogPage;



import React from "react";
import { useNavigate } from "react-router-dom";
import "./blog.css";

const BlogPage = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Sri PV Venkatesan Center Revamped",
      excerpt: "On 11th November, buffaloes were distributed at the Haripuram campus.",
      content: "Full content for post 1...",
      image: "imgs/pv.png",
      date: "8th June 2022",
    },
    {
      id: 2,
      title: "Meeting the Parents",
      excerpt: "The BCT Residential high school parent’s day meeting was held on 19th March.",
      content: "Full content for post 2...",
      image: "imgs/meeting.png",
      date: "8th June 2022",
    },
    {
      id: 3,
      title: "Sankranti on Campus",
      excerpt: "On January 7, BCT school organized a rangoli (muggulu) competition.",
      content: "Full content for post 3...",
      image: "imgs/rangoli.png",
      date: "8th June 2022",
    },
    {
      id: 4,
      title: "Buffalo distribution to PWDs",
      excerpt: "Self – sustainability is a great satisfaction for anyone. BCT has provided many",
      content: "TypeScript is a superset of JavaScript that adds static typing...",
      image: "imgs/pwds.png",
      date: "8th June 2022",
    },
    {
      id: 5,
      title: "SAC meeting held",
      excerpt: "On March 11 at BCT KVK 28 participants came together for the annual Scientific Advisory",
      content: "Next.js is a React framework for building fast apps...",
      image: "imgs/sac.png",
      date: "8th June 2022",
    },
    {
      id: 6,
      title: "Central CAG meeting held",
      excerpt: "Formulated to solve problems in their villages, Community Action Groups comprise of.",
      content: "TypeScript is a superset of JavaScript that adds static typing...",
      image: "imgs/cc.png",
      date: "8th June 2022",
    },
    {
      id: 7,
      title: "Picnic time for school students",
      excerpt: "The end of February brought in with it the feel of normalcy, as students could yet",
      content: "Next.js is a React framework for building fast apps...",
      image: "imgs/picnic.png",
      date: "8th June 2022",
    },
    {
      id: 8,
      title: "Comprehensive Education Initiative at Paderu",
      excerpt: "BCT initiated a 10-day teachers training program for government school teachers in  ",
      content: "TypeScript is a superset of JavaScript that adds static typing...",
      image: "imgs/student.png",
      date: "8th June 2022",
    },
    {
      id: 9,
      title: "Waste Decomposer Training",
      excerpt: "In order to increase soil health against soil borne diseases and to promote optimum waste ",
      content: "Next.js is a React framework for building fast apps...",
      image: "imgs/decomposer.png",
      date: "8th June 2022",
    },
  ];

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="blog-page">
      <h1 className="page-title">Our Blogs</h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-cardpage">
            <img src={post.image} alt={post.title} className="blog-image" />
            <p className="blog-date">Published: {post.date}</p>
            <h2 className="blog-titlepage">{post.title}</h2>
            <p className="blog-excerpt">{post.excerpt}</p>
            <button
              className="read-more-btn"
              onClick={() => handleReadMore(post.id)}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

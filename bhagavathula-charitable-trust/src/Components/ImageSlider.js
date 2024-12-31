import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Imageslider.css';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const onReadMore = (service) => {
    navigate('/service-details', { state: service });
  };

  const services = [
    {
      icon: "📚",
      title: "Comprehensive Education Initiative at Paderu",
      image: "/images/boat.png",
      images: ["/images/boat.png", "/images/field.png", "/images/RHS.png"],
      items: [
        "Residential High Schools",
        "SMART Centers for Skill Development",
        "Tribal Education Programs"
      ],
      details: `
      Comprehensive Education Initiative at Paderu
      8th June 2022 - Uncategorised
      BCT initiated a 10-day teachers training program for government school teachers in tribal Paderu. 
      This program was conducted in association with the Government of Andhra Pradesh (SSA), 
      VIBHA INDIA, LeapForWord, and Sikshna Foundation. 
      354 teachers from 11 tribal mandals of Visakhapatnam district attended the program.
      This initiative aims to motivate students to come to school regularly and participate in all learning processes. It also motivates parental involvement in their child’s progress. To achieve these aims, selected teachers in Paderu’s government schools were given training on the following:

1. English Reading Program: Customized techniques are delivered in the mother-tongue so teachers can effectively teach English to students. This technique-based program enables teachers to train students from English Illiteracy to a stage where they can read, write, comprehend & structure grammatically correct sentences.

2. Inclusive Education: To increase participation of children with disabilities in mainstream schools, this enables all stakeholders involved in the education of children with disabilities with appropriate awareness, knowledge, and skills. It promotes inclusion for such children in home-based programs at schools and raises awareness among teachers, parents, and the community.

3. Prerana Motivation (students): Sikshana’s Prerana program is designed as a scalable and replicable model with a child-centric approach, making primary education an enjoyable process & motivating children towards improved & holistic learning .

4. My Shaala App: Provided to mentors, it helps them to capture and mentor all relevant data on their mobiles.

5. We Love Reading: This program focuses on inculcating the reading habit among students. It aims at creating readers, developing foundational literacy skills, conceptual and skill-based knowledge development. Book banks in schools, weekly reading hour periods, creating classroom reading corners, forming community reading rooms, conducting reading melas & fests, are some key activities.


    `
    },
    {
      icon: "🌾",
      title: "Central CAG meeting held",
      image: "/images/kvk.jpeg",
      images: ["/images/boat.png", "/images/field.png", "/images/RHS.png"],
      items: [
        "Krishi Vigyan Kendra Support",
        "Farmer Training Programs",
        "Animal Husbandry Support"
      ],
      details:`Central CAG meeting held
8th June 2022Uncategorised
Formulated to solve problems in their villages, Community Action Groups comprise of local leaders. The CAGs regularly meet in their villages to address and solve pertinent issues. A monthly meet is also held at BCT campus to review the development. In the months of March and April, BCT Secretary Sri B Sri Ram Murty called for the central meeting. Led by a convenor and co-convenor, this was held at Panchadarla farm in the months of March and April.

Here they discussed about various topics. Soil Scientist of BCT KVK Srihari informed farmers of the importance of providing soil for future generations to plant organic crops. Sri Sitaramraju congratulated members on the success of the 2022 Sankranti Sambaralu and took inputs on upcoming activities. Action plans for village development, crop management, admissions into school and ITI programs were discussed at the event.`
    },
    {
      icon: "❤️",
      title: "Sankranti on campus",
      image: "/images/tribalShool.png",
      images: ["/images/boat.png", "/images/field.png", "/images/RHS.png"],
      items: [
        "PWD Support Programs",
        "Skill Development Courses",
        "Supporting Aids Distribution"
      ],
      details:`Sankranti on campus
8th June 2022Uncategorised
On January 7, BCT school organized a rangoli (muggulu) competition for the children and school staff to celebrate Sankranti. The air took on festive hues, as colorful muggulu were meticulously crafted on the school grounds. A group of boys kept the energy alive with their rhythmic rendering of the drums. BCT Central Coordinator Sri Sitaramaraju and School Principal Mrs. SK Renuka served as the judges and announced prizes. Celebrations were also held at the BCT TMF SMART centers with colourful Rangolis.

In the villages, BCT conducted Sankranti Sambaralu under the leadership of the local community action groups. Festivities were held from 13th to 31st January 2022. A meeting with village representatives and CAG members from 60 villages was held, where BCT Secretary, Sri B Sri Ram Murty gave the orientation for the sambralu. The theme emphasized on bringing back customs and traditional practices with youth participation. 60 villages across 6 mandals decked up. From games to traditional practices, village representatives conducted five traditional games in every village too. Colourful muggulu with gobbillu (cowdung) lined the streets, as folk dances, folk songs, bhajans, and the warm fires of bhogi were celebrated. Sports competitions, dhanurmaasa melukolupulu, cricket, slow cycling, pidakalu poteelu (competitions) and gaalipataalu poteelu (kite-flying competitions) were held for the young ones.

The best participants in each village received prizes from their village elders. BCT provided 3000 certificates of appreciation, for distribution to the participants. Funds for the events were raised by the villagers themselves, as Community Organizers coordinated with the CAGs for the proper organization of events. The impact of the program was remarkable as villages came together in unity to protect their culture. Great organizing and participatory skills of the youth were seen.

`
    },
    {
      icon: "🏥",
      title: "SAC meeting held",
      image: "/images/RHS.png",
      images: ["/images/boat.png", "/images/field.png", "/images/RHS.png"],
      items: [
        "Medical Camps",
        "Health Education",
        "Preventive Care"
      ],
      details:`SAC meeting held
8th June 2022Uncategorised
On March 11 at BCT KVK 28 participants came together for the annual Scientific Advisory Committee (SAC) meeting. Participants presented about activities taken up in the past year and elaborated on future plans. Heads of Agriculture and allied sectors came together with collaborative departments that a re members in the Scientific Advisory committee. The Chairman, BCT KVK, DR Nominee from ANGRAU, ADR,RARS Analkapalle, heads and representative from Agriculture, Horticulture, Animal husbandry, CIFT, NABARD, RARS, Chintapalle, KVK, Kondempudi, DARRC, Visakhapatnam, DRDA,and farmer members participated in the program.`
    },
    {
      icon: "🎓",
      title: "Waste Decomposer Training",
      image: "/images/kvk.jpeg",
      images: ["/images/boat.png", "/images/field.png", "/images/RHS.png"],
      items: [
        "Vocational Training",
        "Digital Literacy",
        "Entrepreneurship"
      ],
      details:`Waste Decomposer Training
8th June 2022Uncategorised
In order to increase soil health against soil borne diseases and to promote optimum waste management in vegetable crops, training on the preparation of waste decomposer was taken up at various villages. At ChinnaMallavaram of Koyyuru mandal, the event was held on 4th January, and saw 11 farmers participate. They saw the demonstration on preparation of waste decomposer with 2kg jaggery in 200 litres of water. Precautions, usage and benefits were explained to farmers. In ongoing events, 5 waste decomposers were given to 5 farmers of Anakapalle, Paderu, Nathavaram, Narsipatnam and Payakaraopeta mandals on January 9. 21 participants in the tribal region of Madem received these too. Input distribution of neem seed powder pellets, sticky traps, Azadiractin and bio pesticides along with 15 waste decomposer bottles was done for tribal farmers at Pentapadu village. Progressive farmers K.Suresh, Dopperla village and R.Gangaraju, Hasthinapuram (Naidupalem) village also received the waste decomposers.`
    },
    {
      icon: "🌿",
      title: "Sri PV Venkatesan Center Revamped",
      image: "/images/group.png",
      images: ["/images/boat.png", "/images/field.png", "/images/RHS.png"],
      items: [
        "Tree Plantation",
        "Waste Management",
        "Green Energy"
      ],
      details:`Sri PV Venkatesan Center Revamped
8th June 2022Uncategorised
On 11th November, buffaloes were distributed at the Haripuram campus in the presence of Sri.V.Jaganmohana Rao, D.G.M, Sri.D.Vasantharao, Senior Manager, and Sri.R.Vittal, H.R from Tata Relief Committee, and Sri B Sri Ram Murty, Secretary, BCT.

However, soon Covid happened, and the work had to pause. It was in the past few months that the construction of the entire structure, its electrification and painting finally took place.

The renovated buildings of Sri P V Venkatesan Center were inaugurated on November 21st, 2021 by Sri Atul Bhatt, Chairman and Managing Director of the RINL. Visakhapatnam. The ceremony was held at Sri PVV Center in presence of honorable guest Sri Atul Bhatt, Sri B Sri Ram Murty, the team of BCT and Residential High School students along with 15 PWD students from the center. The children welcomed the guest with cultural programs, which warmed the hearts of the gathering. 

After an introductory speech by Mr. Sri Ram Murty, Secretary, BCT, PWD students of the center performed a skit on CAB (Covid Appropriate Behaviour). Sri Atul Bhatt encouraged the PWD students’ development in overall skills. Students presented gifts to the guests and thanked all the participants in sign language. `
    },
    {
        icon: "🌿",
        title: "Buffalo distribution to PWDs",
        image: "/images/boys.png",
        images: ["/images/boat.png", "/images/field.png", "/images/RHS.png"],
        items: [
            "Medical Camps",
            "Health Education",
            "Preventive Care"
          ] ,
        details:`Buffalo distribution to PWDs
8th June 2022Uncategorised
Self – sustainability is a great satisfaction for anyone. BCT has provided many opportunities to the challenged to earn their livelihood and facilitate them to become supporters rather than a burden to others. As part of this, 15 differently-abled persons were identified and given buffalos as livestock is the best source of income in the region. Now, these PwDs will be able to supply milk and get paid. Also, they can improve their nutritional intake.

On 11th November, buffaloes were distributed at the Haripuram campus in the presence of Sri.V.Jaganmohana Rao, D.G.M, Sri.D.Vasantharao, Senior Manager, and Sri.R.Vittal, H.R from Tata Relief Committee, and Sri B Sri Ram Murty, Secretary, BCT.`
    },
    {
        icon: "🌿",
        title: "Picnic time for school students ",
        image: "/images/field.png", 
        images: ["/images/boat.png", "/images/field.png", "/images/RHS.png"],
        items: [
            "Medical Camps",
            "Health Education",
            "Preventive Care"
          ],
        details:`Picnic time for school students
8th June 2022Uncategorised
The end of February brought in with it the feel of normalcy, as students could yet again go for the much awaited school picnic. While the school conducts a picnic for its students every year, the past 2 years did not have any picnics due to Covid. However this year, all school students were taken by buses to the Visakhapatnam zoo and Tenneti park for a school picnic. Needless to say, the children enjoyed this lovely outing with friends. The unexpected cherry on the top was the Navy day parade which was happening at the same day. The thrilled children enjoyed seeing the many ships and aerial displays on the occasion.`
    },
    {
        icon: "🌿",
        title: "Meeting the parents",
        image: "/images/boat.png", 
        images: ["/images/boat.png", "/images/field.png", "/images/RHS.png"],
        items: [
            "Medical Camps",
            "Health Education",
            "Preventive Care"
          ],
        details:`Meeting the parents
8th June 2022Uncategorised
The BCT Residential high school parent’s day meeting was held on the 19th March. 60 parents attended this meeting where BCT Joint Secretary Sri Sitaramaraju graced as the Chief guest. The meeting began with a display of the folk arts learnED by students, while Vice Principals of the school, Sri Varaprasad and Smt Padmavathi spoke about the student’s overall performance, their behaviour and the role of the school in shaping their future. 

Few parents came forward to share their feedback, and it was heartening to hear about the change they could see in their children. One of the parents also came forward to award prize money to 3 students who obtained good marks in the grade 10 examinations. This encouraging meeting, strengthened the community cohesiveness and brought together the students, teachers and school management.`
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= services.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 3 : prevIndex - 1
    );
  };

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Change slides every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const getVisibleCards = () => {
    let cards = [];
    for (let i = currentIndex; i < currentIndex + 3; i++) {
      const index = i >= services.length ? i - services.length : i;
      cards.push(services[index]);
    }
    return cards;
  };

  return (
    <div className="slider-wrapper">
      <button className="nav-button prev" onClick={prevSlide}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg></button>
      
      <div className="services-slider">
        <div className="slider-track">
          {getVisibleCards().map((service, index) => (
            <div 
              key={currentIndex + index} 
              className="service-card"
            >
              <div className="card-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="icon-container">
                <span>{service.icon}</span>
              </div>
              <h2 className="service-title">{service.title}</h2>
              <ul className="service-list">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <span className="checkmark">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button 
                className="readmoreBtn"
                onClick={() => onReadMore(service)}
              >
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>

      <button className="nav-button next" onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
        </svg>
      </button>

      <div className="slider-dots">
        {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
          <span 
            key={index}
            className={`dot ${Math.floor(currentIndex / 3) === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index * 3)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
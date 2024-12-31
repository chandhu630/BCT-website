// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './ServiceDetails.css';

// const ServiceDetails = () => {
//   const location = useLocation();
//   const { title, details } = location.state || {};

//   return (
//     <div className="service-details">
//       <h1>{title}</h1>
//       <p>{details}</p>
//     </div>
//   );
// };

// export default ServiceDetails;

import React from 'react';
import { useLocation } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const location = useLocation();
  const { title, details, images } = location.state || {};

  return (
    <div className="service-details-container">
      <div className="details-header">
        <h1>{title}</h1>
      </div>

      <div className="details-content">
        <div className="details-images">
          {images?.map((image, index) => (
            <img key={index} src={image} alt={`${title}-${index}`} className="details-image" />
          ))}
        </div>
        <div className="details-description">
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

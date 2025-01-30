// import React from 'react';
// import { Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material';
// import { Link } from 'react-router-dom';

// const DonationCard = ({ title, icon, description, buttonText, link }) => {
//   return (
//     <Card sx={{ 
//       height: '100%', 
//       display: 'flex', 
//       flexDirection: 'column',
//       textAlign: 'center'
//     }}>
//       <CardContent sx={{ flexGrow: 1 }}>
//         <Box sx={{ mb: 2 }}>
//           {icon}
//         </Box>
//         <Typography gutterBottom variant="h5" component="h2">
//           {title}
//         </Typography>
//         <Typography>
//           {description}
//         </Typography>
//       </CardContent>
//       <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
//         <Button 
//           component={Link} 
//           to={link} 
//           size="small" 
//           color="primary" 
//           variant="contained"
//         >
//           {buttonText}
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default DonationCard;

import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const DonationCard = ({ title, icon, description, buttonText, link, buttonStyle }) => {
  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      textAlign: 'center'
    }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ mb: 2 }}>
          {icon}
        </Box>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button 
          component={Link} 
          to={link} 
          size="small" 
          variant="contained"
          sx={buttonStyle}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default DonationCard;
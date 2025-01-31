
// import React from 'react';
// import { Container, Grid, Card, Button, Typography, Box } from '@mui/material';
// // Import Material Icons
// import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
// import SchoolIcon from '@mui/icons-material/School';
// import FaceIcon from '@mui/icons-material/Face';
// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import PublicIcon from '@mui/icons-material/Public';
// import PeopleIcon from '@mui/icons-material/People';
// import { Link } from 'react-router-dom';

// const SupportPage = () => {
//   const donationOptions = [
//     {
//       title: "General Donation",
//       icon: <VolunteerActivismIcon sx={{ fontSize: 80, color: '#2196f3' }} />,
//       description: "Support our overall mission and help us make a difference",
//       buttonText: "Donate Now",
//       link: "/donate/general"
//     },
//     {
//       title: "Support a Teacher",
//       icon: <SchoolIcon sx={{ fontSize: 80, color: '#4caf50' }} />,
//       description: "Support teachers for academic rural training in a subject of your choice",
//       buttonText: "Support Teachers",
//       link: "/donate/teacher"
//     },
//     {
//       title: "Support a Student",
//       icon: <FaceIcon sx={{ fontSize: 80, color: '#ff9800' }} />,
//       description: "Sponsor a rural background student's education and change their future",
//       buttonText: "Support Students",
//       link: "/donate/student"
//     },
//     {
//       title: "Gift a Smile",
//       icon: <EmojiEmotionsIcon sx={{ fontSize: 80, color: '#e91e63' }} />,
//       description: "Support us with your time and skills in an activity of your choosing",
//       buttonText: "Gift Now",
//       link: "/donate/gift"
//     }
//   ];

//   const paymentMethods = {
//     indian: [
//       { name: 'UPI', icon: '₹' },
//       { name: 'Net Banking', icon: '₹' },
//       { name: 'Credit/Debit Cards', icon: '💳' },
//       { name: 'NEFT/RTGS', icon: '🏦' }
//     ],
//     international: [
//       { name: 'PayPal', icon: '🌐' },
//       { name: 'Global Giving', icon: '🌍' },
//       { name: 'Wire Transfer', icon: '🏦' },
//       { name: 'Credit Cards', icon: '💳' }
//     ]
//   };

//   const buttonStyle = {
//     backgroundColor: '#16A34A',
//     padding:"12px 20px",
//     borderRadius:"50px",
//     color: 'white',
//     '&:hover': {
//       backgroundColor: '#15803d',
//     }
//   };

//   const outlinedButtonStyle = {
//     color: '#16A34A',
//     borderColor: '#16A34A',
//     '&:hover': {
//       borderColor: '#15803d',
//       backgroundColor: 'rgba(22, 163, 74, 0.04)'
//     }
//   };

//   return (
//     <Container maxWidth="lg">
//       {/* Hero Section */}
//       <Box sx={{ py: 8, textAlign: 'center', mt: '100px' }}>
//         <Typography variant="h2" component="h1" gutterBottom>
//           Make a Difference Today
//         </Typography>
//         <Typography variant="h5" color="text.secondary" paragraph>
//           Your support helps us create lasting change in communities
//         </Typography>
//       </Box>

//       {/* Donation Options Grid */}
//       <Grid container spacing={4} sx={{ mb: 8 }}>
//         {donationOptions.map((option) => (
//           <Grid item xs={12} sm={6} md={3} key={option.title}>
//             {/* <DonationCard {...option} buttonStyle={buttonStyle} /> */}
//           </Grid>
//         ))}
//       </Grid>

//       {/* Payment Methods Section */}
//       <Box sx={{ py: 6 }}>
//         <Typography variant="h4" gutterBottom textAlign="center">
//           Payment Methods
//         </Typography>
//         <Grid container spacing={4} justifyContent="center">
//           <Grid item xs={12} md={6}>
//             <Card sx={{ p: 3, mb: 3 }}>
//               <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                 <AccountBalanceIcon sx={{ fontSize: 40, mr: 2, color: '#2196f3' }} />
//                 <Typography variant="h6">
//                   Indian Donations (INR)
//                 </Typography>
//               </Box>
//               <Box sx={{ mb: 2 }}>
//                 {paymentMethods.indian.map((method) => (
//                   <Typography key={method.name} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                     <span style={{ marginRight: '8px' }}>{method.icon}</span>
//                     {method.name}
//                   </Typography>
//                 ))}
//               </Box>
//               <Button variant="contained" style={{backgroundColor:"#147169"}} sx={buttonStyle}>
//                 Donate in INR
//               </Button>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Card sx={{ p: 3, mb: 3 }}>
//               <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                 <PublicIcon sx={{ fontSize: 40, mr: 2, color: '#147169' }} />
//                 <Typography variant="h6">
//                   International Donations
//                 </Typography>
//               </Box>
//               <Box sx={{ mb: 2 }}>
//                 {paymentMethods.international.map((method) => (
//                   <Typography key={method.name} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                     <span style={{ marginRight: '8px' }}>{method.icon}</span>
//                     {method.name}
//                   </Typography>
//                 ))}
//               </Box>
//               <Button variant="contained" style={{backgroundColor:"#147169"}} sx={buttonStyle}>
//                 Donate Internationally
//               </Button>
//             </Card>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Volunteer Section */}
//       <Box sx={{ py: 6, textAlign: 'center' }}>
//         <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
//           <PeopleIcon sx={{ fontSize: 60, color: '##147169' }} />
//         </Box>
//         <Typography variant="h4" gutterBottom>
//           Become a Volunteer
//         </Typography>
//         <Typography paragraph>
//           Join our community of volunteers and help make a real difference
//         </Typography>
//         <Button 
//           variant="outlined" 
//           size="large"
//           sx={outlinedButtonStyle}
//         >
//         <Link to='/volunteer' className='joinvol'    style={{ textDecoration: 'none', color: 'black' }}> Join as Volunteer</Link>
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default SupportPage;



import React from 'react';
import { Grid, Card, Button, Typography, Box } from '@mui/material';
import DonationCard from './DonationCard';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SchoolIcon from '@mui/icons-material/School';
import FaceIcon from '@mui/icons-material/Face';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';
// import Footer from './Footer';
import { Link } from 'react-router-dom';

// import BankDetailsPage from './BankDetailsPage';

const SupportPage = () => {
  const donationOptions = [
    {
      title: "General Donation",
      icon: <VolunteerActivismIcon sx={{ fontSize: 80, color: '#2196f3' }} />,
      description: "Support our overall mission and help us make a difference",
      buttonText: "Donate Now",
      link: "/donate/general",
    },
    {
      title: "Support a Teacher",
      icon: <SchoolIcon sx={{ fontSize: 80, color: '#4caf50' }} />,
      description: "Support teachers for academic rural training in a subject",
      buttonText: "Support Teachers",
      link: "/staff",
    },
    {
      title: "Support a Student",
      icon: <FaceIcon sx={{ fontSize: 80, color: '#ff9800' }} />,
      description: "Sponsor a rural student's education",
      buttonText: "Support Students",
      link: "/donate/student",
    },
    {
      title: "Gift a Smile",
      icon: <EmojiEmotionsIcon sx={{ fontSize: 80, color: '#e91e63' }} />,
      description: "Support us with your time and skills",
      buttonText: "Gift Now",
      link: "https://www.amazon.in/b?node=28636251031&ref_=cs_fdm_1000827553-28636251031",
    },
  ];

  const paymentMethods = {
    indian: [
      { name: 'UPI', icon: '₹' },
      { name: 'Net Banking', icon: '₹' },
      { name: 'Credit/Debit Cards', icon: '💳' },
      { name: 'NEFT/RTGS', icon: '🏦' },
    ],
    international: [
      { name: 'PayPal', icon: '🌐' },
      { name: 'Global Giving', icon: '🌍' },
      { name: 'Wire Transfer', icon: '🏦' },
      { name: 'Credit Cards', icon: '💳' },
    ],
  };

  const buttonStyle = {
    backgroundColor: '#15926A',
    padding: '12px 20px',
    borderRadius: '8px',
    color: 'white',
    '&:hover': {
      backgroundColor: '#15803d',
    },
  };

  const outlinedButtonStyle = {
    color: '#16A34A',
    borderColor: '#16A34A',
    '&:hover': {
      borderColor: '#15803d',
      backgroundColor: 'rgba(22, 163, 74, 0.04)',
    },
  };

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: 8,
          textAlign: 'center',
          mt: '75px',
          px: { xs: 2, md: 8 },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
        >
          Make a Difference Today
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          paragraph
          sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
        >
          Your support helps us create lasting change in communities
        </Typography>
      </Box>

      {/* Donation Options Grid */}
      <Grid
        container
        spacing={4}
        sx={{
          mt: 0,
          px: { xs: 2, sm: 4, md: 8 },
          // border:"1px solid red", 
          padding:"0 100px"
        }}
      >
        {donationOptions.map((option) => (
          <Grid item xs={12} sm={6} md={3} key={option.title}>
            <Card
              sx={{
                borderRadius: '16px',
                p: 2,
                // border: '2px solid red',
                textAlign: 'center',
              }}
            >
              <DonationCard {...option} buttonStyle={buttonStyle} />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Payment Methods Section */}
      <Box
        sx={{
          py: 8,
          px: { xs: 2, sm: 4, md: 8 },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          sx={{ fontSize: { xs: '1.5rem', md: '2rem'} }}
        >
          Payment Methods
        </Typography>

<Grid
  container
  spacing={4}
  justifyContent="center"
  sx={{ mt: "3rem", padding: "0 38px" }}
>
  {[
    {
      title: "Indian Donations (INR)",
      icon: <AccountBalanceIcon sx={{ fontSize: 40, mr: 2, color: '#2196f3' }} />,
      paymentMethods: paymentMethods.indian,
      buttonText: "Donate in INR",
      link: "/bankDetails" // Add your internal link here
    },
    {
      title: "International Donations",
      icon: <PublicIcon sx={{ fontSize: 40, mr: 2, color: '#4caf50' }} />,
      paymentMethods: paymentMethods.international,
      buttonText: "Donate Internationally",
      link: "/international" // Add your internal link here
    },
    {
      title: "Global Giving",
      icon: <PublicIcon sx={{ fontSize: 40, mr: 2, color: '#4caf50' }} />,
      paymentMethods: paymentMethods.international,
      buttonText: "Donate",
      link: "https://www.globalgiving.org/projects/support-a-unique-education-model-in-rural-india/" // Add your internal link here
    },
  ].map((card, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card
        sx={{
          p: 3,
          mb: 3,
          borderRadius: "16px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          {card.icon}
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
          >
            {card.title}
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          {card.paymentMethods.map((method) => (
            <Typography
              key={method.name}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                fontSize: { xs: "0.875rem", md: "1rem" },
              }}
            >
              <span style={{ marginRight: "8px" }}>{method.icon}</span>
              {method.name}
            </Typography>
          ))}
        </Box>
        <Link to={card.link} style={{ textDecoration: 'none' }}>
          <Button variant="contained" sx={buttonStyle}>
            {card.buttonText}
          </Button>
        </Link>
      </Card>
    </Grid>
  ))}
</Grid>


      </Box>

      {/* Volunteer Section */}
      <Box sx={{ py: 6, textAlign: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <PeopleIcon sx={{ fontSize: 60, color: '#ff9800' }} />
        </Box>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
        >
          Become a Volunteer
        </Typography>
        <Typography
          paragraph
          sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}
        >
          Join our community of volunteers and help make a real difference
        </Typography>
        <Button
          variant="outlined"
          size="large"
          sx={outlinedButtonStyle}
        >
          <Link 
            to="/volunteer" 
            style={{ color: "black", textDecoration: "none" }}
          >
            Join as Volunteer
          </Link>
        </Button>

      </Box>

      {/* Footer */}
      {/* <Box sx={{ width: '100%' }}>
        <Footer />
      </Box> */}
    </Box>
  );
};

export default SupportPage;

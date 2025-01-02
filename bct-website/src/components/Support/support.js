
import React from 'react';
import { Container, Grid, Card, Button, Typography, Box } from '@mui/material';
// Import Material Icons
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SchoolIcon from '@mui/icons-material/School';
import FaceIcon from '@mui/icons-material/Face';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';

const SupportPage = () => {
  const donationOptions = [
    {
      title: "General Donation",
      icon: <VolunteerActivismIcon sx={{ fontSize: 80, color: '#2196f3' }} />,
      description: "Support our overall mission and help us make a difference",
      buttonText: "Donate Now",
      link: "/donate/general"
    },
    {
      title: "Support a Teacher",
      icon: <SchoolIcon sx={{ fontSize: 80, color: '#4caf50' }} />,
      description: "Support teachers for academic rural training in a subject of your choice",
      buttonText: "Support Teachers",
      link: "/donate/teacher"
    },
    {
      title: "Support a Student",
      icon: <FaceIcon sx={{ fontSize: 80, color: '#ff9800' }} />,
      description: "Sponsor a rural background student's education and change their future",
      buttonText: "Support Students",
      link: "/donate/student"
    },
    {
      title: "Gift a Smile",
      icon: <EmojiEmotionsIcon sx={{ fontSize: 80, color: '#e91e63' }} />,
      description: "Support us with your time and skills in an activity of your choosing",
      buttonText: "Gift Now",
      link: "/donate/gift"
    }
  ];

  const paymentMethods = {
    indian: [
      { name: 'UPI', icon: '₹' },
      { name: 'Net Banking', icon: '₹' },
      { name: 'Credit/Debit Cards', icon: '💳' },
      { name: 'NEFT/RTGS', icon: '🏦' }
    ],
    international: [
      { name: 'PayPal', icon: '🌐' },
      { name: 'Global Giving', icon: '🌍' },
      { name: 'Wire Transfer', icon: '🏦' },
      { name: 'Credit Cards', icon: '💳' }
    ]
  };

  const buttonStyle = {
    backgroundColor: '#16A34A',
    padding:"12px 20px",
    borderRadius:"50px",
    color: 'white',
    '&:hover': {
      backgroundColor: '#15803d',
    }
  };

  const outlinedButtonStyle = {
    color: '#16A34A',
    borderColor: '#16A34A',
    '&:hover': {
      borderColor: '#15803d',
      backgroundColor: 'rgba(22, 163, 74, 0.04)'
    }
  };

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box sx={{ py: 8, textAlign: 'center', mt: '100px' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Make a Difference Today
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Your support helps us create lasting change in communities
        </Typography>
      </Box>

      {/* Donation Options Grid */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {donationOptions.map((option) => (
          <Grid item xs={12} sm={6} md={3} key={option.title}>
            {/* <DonationCard {...option} buttonStyle={buttonStyle} /> */}
          </Grid>
        ))}
      </Grid>

      {/* Payment Methods Section */}
      <Box sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Payment Methods
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccountBalanceIcon sx={{ fontSize: 40, mr: 2, color: '#2196f3' }} />
                <Typography variant="h6">
                  Indian Donations (INR)
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                {paymentMethods.indian.map((method) => (
                  <Typography key={method.name} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <span style={{ marginRight: '8px' }}>{method.icon}</span>
                    {method.name}
                  </Typography>
                ))}
              </Box>
              <Button variant="contained" sx={buttonStyle}>
                Donate in INR
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PublicIcon sx={{ fontSize: 40, mr: 2, color: '#4caf50' }} />
                <Typography variant="h6">
                  International Donations
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                {paymentMethods.international.map((method) => (
                  <Typography key={method.name} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <span style={{ marginRight: '8px' }}>{method.icon}</span>
                    {method.name}
                  </Typography>
                ))}
              </Box>
              <Button variant="contained" sx={buttonStyle}>
                Donate Internationally
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Volunteer Section */}
      <Box sx={{ py: 6, textAlign: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <PeopleIcon sx={{ fontSize: 60, color: '#ff9800' }} />
        </Box>
        <Typography variant="h4" gutterBottom>
          Become a Volunteer
        </Typography>
        <Typography paragraph>
          Join our community of volunteers and help make a real difference
        </Typography>
        <Button 
          variant="outlined" 
          size="large"
          sx={outlinedButtonStyle}
        >
        <Link to='/volunteer'> Join as Volunteer</Link>
        </Button>
      </Box>
    </Container>
  );
};

export default SupportPage;
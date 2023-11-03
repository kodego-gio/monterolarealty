import { Container, Paper, Typography } from '@mui/material';
import React from 'react'
import ContactForm from './ContactForm';
import VideoPlayer from './VideoPlayer';

const About = () => {
  return (
    <div className='aboutuspage-container'>
    <VideoPlayer />
    <Container className='aboutus-container' maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          About Monterola Realty
        </Typography>
        <Typography variant="body1">
          Our search, content, and advertising strategies are designed to bring millions of transaction-ready buyers and sellers to Monterola Realty website, where they can find a great agent, or connect to their current one and collaborate during the entire process.
          We offer a full line of advertising products and online marketing services designed to help real estate professionals connect with interested buyers and sellers. If your goals include connecting with quality buyers and sellers searching for their next home and leveraging the right tools and services
          to grow your business, you’ve come to the right place!
          Monterola Realty has tons of resources to help you stay informed of what’s happening in the
          industry, what’s working for successful agents, and what tactics are leading to success in today’s market.
        </Typography>
        {/* Add more content here */}
      </Paper>
      </Container>
      <ContactForm /> 
    </div>
    
    
    
  );
};

export default About;


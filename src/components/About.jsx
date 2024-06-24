import React from 'react';
import styled from 'styled-components';


// Styled components for styling
const FullScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  font-size: 2.5em;
  color: #333333;
  justify-content: between;
  margin-top: 20px;
`;


const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 800px;
  width: 100%;
  padding: 20px;
`;

const PersonCard = styled.div`
  width: 300px;
  margin: 20px;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const PersonImage = styled.img`
  width: 100%;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const PersonName = styled.h3`
margin: 10px 0;
font-size: 1.3em;
color: #0066cc;
font-family: 'Roboto', sans-serif; /* Change the font-family to your preferred font */
text-transform: uppercase;
letter-spacing: 1px;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const Description = styled.p`
  color: #666666;
`;

// AboutPage component
const AboutPage = () => {
  const people = [
    {
      id: 1,
      name: 'Nithin Manda',
      image: '', // replace with the actual path to the image
      description: 'Photographer and Social Media Handler',
    },
    {
      id: 2,
      name: 'Prashanth',
      image: '', // replace with the actual path to the image
      description: 'Photographer and Videographer',
    },
  ];

  return (
    <FullScreenContainer id='about'>
      <PageTitle>Meet Our Team</PageTitle>
      <AboutContainer>
        {people.map((person) => (
          <PersonCard key={person.id}>
            <PersonImage src={person.image} alt={person.name} />
            <PersonName>{person.name}</PersonName>
            <Description>{person.description}</Description>
          </PersonCard>
        ))}
      </AboutContainer>
    </FullScreenContainer>
  );
};

export default AboutPage;

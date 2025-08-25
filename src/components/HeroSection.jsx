// HeroSection.jsx
import styled from '@emotion/styled';
import { Typewriter } from 'react-simple-typewriter';

const roles = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'PHP / Laravel Expert',
  'AWS Managed Services',
];

// ✅ Container matches Navbar's Nav styling
const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem; /* matches navbar horizontal spacing */
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 2rem;
  font-family: 'Inter', sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TextContainer = styled.div`
  max-width: 40rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.text.primary}; /* ⭐ CHANGE: use MUI text color */
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary}; /* ⭐ CHANGE: use MUI text color */
`;

const SubHeading = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.text.secondary}; /* already theme-aware */
`;

const ImageWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    margin-top: 0;
    width: 50%;
    display: flex;
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 24rem;
  height: 24rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.15);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function HeroSection() {
  return (
      <Container> 
        <Section>
          <TextContainer>
            <Heading>THIS IS AUGUST!</Heading>

            <SubHeading>
              <Typewriter
                words={roles}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </SubHeading>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
            </p>
          </TextContainer>
        </Section>
      </Container> 
  );
}

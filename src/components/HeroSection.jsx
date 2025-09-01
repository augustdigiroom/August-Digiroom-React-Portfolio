// HeroSection.jsx
import styled from '@emotion/styled';
import { Typewriter } from 'react-simple-typewriter';

const roles = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'PHP / Laravel Expert',
  'AWS Cloud Practitioner',
];

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
  text-align: center; /* ✅ Center align texts */

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center; /* ✅ Keep content centered on desktop */
  }
`;

const TextContainer = styled.div`
  max-width: 40rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${({ theme }) => theme.palette.text.primary};
   align-items: center; /* ✅ Center children horizontally */
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};
  margin: 0; /* ✅ Remove extra spacing */
`;

const SubHeading = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin: 0; /* ✅ Remove extra spacing */
`;

const Pitch = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const CTAGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  a {
    text-decoration: none;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 0.75rem;
    transition: all 0.3s ease-in-out;
  }

  .primary {
    background-color: ${({ theme }) => theme.palette.primary.main};
    /* ✅ CHANGED: invert colors per your request */
    color: ${({ theme }) =>
      theme.palette.mode === 'light' ? 'white' : 'black'}; /* ⬅️ CHANGED */

    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.dark};
      /* ✅ CHANGED: keep the same logic on hover */
      color: ${({ theme }) =>
        theme.palette.mode === 'light' ? 'white' : 'black'}; /* ⬅️ CHANGED */
    }
  }

  .secondary {
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.main};

    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: white;
    }
  }
`;


export default function HeroSection() {
  return (
    <Container>
      <Section>
        <TextContainer>
          <Heading>This is August 💻</Heading>

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

          <Pitch>
            I’m a <strong>Full-Stack Developer</strong> skilled in <strong>MERN,
            Laravel, and AWS</strong>. I build fast, scalable web apps that solve
            real business problems and deliver great user experiences.
          </Pitch>

          <CTAGroup>
            <a href="#projects" className="primary">View My Work</a>
            <a href="#contact" className="secondary">Contact Me</a>
          </CTAGroup>
        </TextContainer>
      </Section>
    </Container>
  );
}

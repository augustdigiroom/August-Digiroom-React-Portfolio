import React, { useState } from 'react';
import styled from '@emotion/styled'; // ✅ instead of styled-components
import { Card, CardMedia, CardContent, Typography, Chip, Modal, Box, Button, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import projects from '../data/project.js';

const Section = styled.section`
  padding: 64px 16px;
  background: ${({ theme }) =>
  theme.palette.mode === 'dark' ? '#000000' : '#ffffff'};
  background: ${({ theme }) => theme.palette.background.paper};
`;

const Title = styled(Typography)`
  && {
    font-size: 2.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme.palette.text.primary}; /* 🔹 theme-aware text color */
    text-align: center;
    margin-bottom: 2rem;
    letter-spacing: 0.05em;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledCard = styled(Card)`
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 32px rgba(63, 81, 181, 0.2);
  }
`;

const ModalBox = styled(Box)`
  background: ${({ theme }) => theme.palette.background.paper}; /* 🔹 theme-aware background */
  color: ${({ theme }) => theme.palette.text.primary};         /* 🔹 text color follows theme */
  border-radius: 16px;
  padding: 32px;
  max-width: 900px;
  max-height: 1000px;
  width: 100%;
  position: relative;
  outline: none;
  box-shadow: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? '0 8px 32px rgba(255, 255, 255, 0.1)'
      : '0 8px 32px rgba(0, 0, 0, 0.1)'}; /* 🔹 subtle shadow based on theme */
  transition: background 0.3s ease, color 0.3s ease; /* 🔹 smooth transition on mode toggle */
`;



export default function ProjectSection() {
  const [selected, setSelected] = useState(null);
  const [imgIdx, setImgIdx] = useState(0);

  const handleOpen = (proj) => {
    setSelected(proj);
    setImgIdx(0);
  };
  const handleClose = () => setSelected(null);

  const handlePrev = () => setImgIdx((idx) => idx === 0 ? selected.screenshots.length - 1 : idx - 1);
  const handleNext = () => setImgIdx((idx) => idx === selected.screenshots.length - 1 ? 0 : idx + 1);

  return (
    <Section id="projects">
      <Title variant="h2">PROJECTS</Title>
      <CardGrid>
        {projects.slice(0, 3).map((proj, idx) => (
          <StyledCard key={idx} onClick={() => handleOpen(proj)}>
            <CardMedia
              component="img"
              height="180"
              image={proj.photo}
              alt={proj.title}
            />
            <CardContent>
              <Typography variant="h6" color="primary" gutterBottom>{proj.title}</Typography>
              <Typography variant="body2" color="textSecondary">{proj.description}</Typography>
              <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
                {proj.tags.map((tag, i) => (
                  <Chip key={i} label={tag} color="primary" size="small" />
                ))}
              </Box>
            </CardContent>
          </StyledCard>
        ))}
      </CardGrid>

      <Modal open={!!selected} onClose={handleClose} aria-labelledby="project-modal">
        <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh">
          {selected && (
            <ModalBox>
              <IconButton
                sx={{ position: 'absolute', top: 16, right: 16 }}
                onClick={handleClose}
                aria-label="Close"
              >
                &times;
              </IconButton>
              <Typography variant="h5" color="primary" gutterBottom>{selected.title}</Typography>
              <Box display="flex" gap={2} mb={2}>
                <Button href={selected.github} target="_blank" variant="outlined" color="primary">GitHub</Button>
                <Button href={selected.website} target="_blank" variant="outlined" color="primary">Website</Button>
              </Box>
              <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4} mb={2}>
                {/* Screenshot carousel (left side) */}
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Box display="flex" alignItems="center" mb={1}>
                    <IconButton onClick={handlePrev} disabled={selected.screenshots.length <= 1}>
                      <ArrowBackIosNewIcon />
                    </IconButton>
                    <img
                      src={selected.screenshots[imgIdx]}
                      alt={`Screenshot ${imgIdx + 1}`}
                      style={{ width: '500px', height: '320px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <IconButton onClick={handleNext} disabled={selected.screenshots.length <= 1}>
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </Box>
                </Box>
                {/* Description and tech stacks (right side) */}
                <Box flex={1}>
                  <Typography variant="body1" mb={2}>{selected.description}</Typography>
                  <Typography variant="subtitle2" color="primary" mb={1}>Tech Stacks Used:</Typography>
                  <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
                    {selected.tags.map((tag, i) => (
                      <Chip key={i} label={tag} color="primary" size="small" />
                    ))}
                  </Box>
                  <Typography variant="body2">{selected.longDescription}</Typography>
                </Box>
              </Box>
            </ModalBox>
          )}
        </Box>
      </Modal>
    </Section>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import styled from '@emotion/styled';

const stackList = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB',
  'Git', 'Postman', 'RestFUL API', 'My SQL', 'XAMPP', 'PHP', 'Laravel',
  'AWS S3', 'AWS EC2', 'AWS Lambda', 'AWS API Gateway', 'Render', 'Vercel',
  'Figma', 'Github',
];

const Container = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '4rem 2rem',
  margin: '6rem auto',
  width: '95%',
  maxWidth: '1100px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '16px',
  overflow: 'hidden',
  boxSizing: 'border-box',
}));

const StackWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  justify-content: center;
  padding: 2rem;
`;

const StackItem = styled(Box)(({ theme }) => ({
  padding: '1rem 1.5rem',
  borderRadius: '12px',
  border: `2px solid ${theme.palette.mode === 'dark' ? '#ffffff' : '#000000'}`,
  boxShadow: '2px 4px 10px rgba(0,0,0,0.15)',
  minWidth: '120px',
  flex: '1 1 150px',
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  transition: 'transform 0.3s ease, background-color 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f5f5f5',
  },
}));

export default function StackSectionWithComet() {
  const theme = useTheme();
  const borderColor = theme.palette.mode === 'dark' ? '#fff' : '#000';

  const progress = useMotionValue(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  // 🟡 NEW: Track container dimensions
  const [dimensions, setDimensions] = useState({ width: 1000, height: 400 });

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setDimensions({ width, height });
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let controls;
    if (isInView) {
      controls = animate(progress, 1, {
        duration: 14,
        repeat: Infinity,
        ease: 'linear',
      });
    } else {
      progress.set(0);
    }
    return () => controls?.stop();
  }, [isInView, progress]);

  // 🟡 UPDATED: Use dynamic dimensions for comet path
  const { width, height } = dimensions;
  const padding = 40;
  const borderWidth = width - padding * 2;
  const borderHeight = height - padding * 2;

  const cx = useTransform(progress, (p) => {
    if (p <= 0.25) return padding + borderWidth * (p / 0.25); // Top
    if (p <= 0.5) return padding + borderWidth; // Right
    if (p <= 0.75) return padding + borderWidth - borderWidth * ((p - 0.5) / 0.25); // Bottom
    return padding; // Left
  });

  const cy = useTransform(progress, (p) => {
    if (p <= 0.25) return padding;
    if (p <= 0.5) return padding + borderHeight * ((p - 0.25) / 0.25);
    if (p <= 0.75) return padding + borderHeight;
    return padding + borderHeight - borderHeight * ((p - 0.75) / 0.25);
  });

  return (
    <Container ref={ref}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 700,
          letterSpacing: '0.1em',
          color: theme.palette.text.primary,
          marginBottom: '2rem',
        }}
      >
        TECHNOLOGIES
      </Typography>

      <StackWrapper>
        {stackList.map((stack) => (
          <StackItem key={stack} theme={theme}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                letterSpacing: '0.05em',
                color: theme.palette.text.primary,
              }}
            >
              {stack}
            </Typography>
          </StackItem>
        ))}
      </StackWrapper>

      {/* SVG Rectangle Border + Comet */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        {/* 🟡 UPDATED: Dynamic viewBox based on container size */}
        <motion.svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="none"
        >
          {/* Rectangle Border */}
          <motion.rect
            x={padding}
            y={padding}
            width={borderWidth}
            height={borderHeight}
            rx="16"
            ry="16"
            fill="none"
            stroke={borderColor}
            strokeWidth="2"
          />

          {/* Comet trail with blur */}
          <motion.circle
            r="12"
            fill={borderColor}
            style={{ cx, cy }}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.4, 0.1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            filter="url(#blur)"
          />

          {/* Comet head */}
          <motion.circle
            r="6"
            fill={borderColor}
            style={{ cx, cy }}
          />

          {/* Blur filter definition */}
          <defs>
            <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>
        </motion.svg>
      </Box>
    </Container>
  );
}

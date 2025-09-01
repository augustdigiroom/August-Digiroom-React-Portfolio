import React from 'react';
import { Container, Box, Typography, Button, useTheme } from '@mui/material';
import GitHubCalendar from 'react-github-calendar';

export default function AboutMeSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // colors array (index 0..4) — used to set CSS vars that style the SVG rects
  const levelColors = isDark
    ? ['#0b0f0a', '#053016', '#0b4d2b', '#1f7a3a', '#39d353'] // dark-friendly greens
    : ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']; // github-like greens

  return (
    <Container maxWidth="xl" disableGutters>
      {/* headline image */}
      <Box
        component="img"
        src="/images/about/profile.jpg"
        alt="About Me Headline Photo"
        sx={{
          width: '100%',
          height: '320px',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      <Box sx={{ py: 8, px: 2, maxWidth: '800px', mx: 'auto' }}>
        <Typography variant="h4" fontWeight="bold" mb={3}>
          About Me
        </Typography>

        <Typography variant="body1" fontSize="1.125rem" mb={2}>
          Hello! I'm{' '}
          <Box component="span" fontWeight="bold" color="primary.main">
            August
          </Box>
          , a Full Stack Web Developer who loves turning ideas into interactive,
          user-friendly web experiences.
        </Typography>

        <Typography paragraph> My journey into tech started with design and digital content, where I worked with global brands to craft creative solutions. Today, I combine that creative background with my developer skills in MERN, PHP/Laravel, and AWS Cloud, building applications that are not just functional—but delightful to use. 
        </Typography> 
        
        <Typography paragraph> On the frontend, I enjoy crafting sleek and responsive designs with React.js, Tailwind CSS, Material UI and Bootstrap. On the backend, I build powerful and secure systems using Node.js, Express.js, Laravel, MySQL, and MongoDB. And when it comes to the cloud, I work with AWS EC2, Lambda, S3, and DynamoDB to bring projects to life at scale. 
        </Typography> 
        
        <Typography paragraph> What excites me most is bridging the gap between design and development—making apps that don’t just work, but also look amazing and tell a story. Whether it’s a portfolio site, a business platform, or a cloud-powered app, my goal is to build tools that empower people and create impact. </Typography>
        
        <Typography paragraph> 🚀 Let’s code, create, and build something awesome together and performance. </Typography> 
        
        <Typography paragraph> When I’m not coding, I enjoy shooting events, editing videos, and exploring tech communities online. </Typography>

        {/* social buttons */}
        <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            href="https://www.linkedin.com/in/augustinegrepo/"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            href="https://github.com/augustdigiroom"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </Button>
        </Box>

        {/* GitHub Calendar container */}
        <Box
          sx={{
            mt: 6,
            // set CSS variables from our levelColors array
            '--gh-0': levelColors[0],
            '--gh-1': levelColors[1],
            '--gh-2': levelColors[2],
            '--gh-3': levelColors[3],
            '--gh-4': levelColors[4],

            // make the calendar responsive and prevent horizontal scrolling
            overflowX: 'hidden',
            '& svg': {
              width: '100% !important',   // scale the svg to container width
              height: 'auto !important',
              display: 'block',
            },

            // override the fill for rects by their data-level attribute
            // this does NOT call any library theme API so it won't cause validation errors
            '& svg rect[data-level="0"]': { fill: 'var(--gh-0) !important' },
            '& svg rect[data-level="1"]': { fill: 'var(--gh-1) !important' },
            '& svg rect[data-level="2"]': { fill: 'var(--gh-2) !important' },
            '& svg rect[data-level="3"]': { fill: 'var(--gh-3) !important' },
            '& svg rect[data-level="4"]': { fill: 'var(--gh-4) !important' },

            // optional: make the small squares slightly less crisp (modern look)
            // Note: rx is an SVG attribute; browsers allow setting via attribute,
            // but if you prefer, you can remove this line.
            '& svg rect': {
              // no standard CSS property for rx; some browsers accept style attribute override,
              // but if it doesn't apply you can ignore this line.
            },
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={2}>
            GitHub Contributions
          </Typography>

          {/* No theme/color props passed — library gets default behavior */}
          <GitHubCalendar
            username="augustdigiroom"
            blockSize={12}   // smaller blocks help fit more weeks
            blockMargin={4}
            fontSize={12}
          />
        </Box>
      </Box>
    </Container>
  );
}

 
import { Container } from '@mui/material';
import React from 'react';

export default function AboutMeSection() {
  return (
      <Container>
        <section className="bg-white py-16 text-gray-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg leading-relaxed mb-4">
              Hello! I'm <span className="font-semibold text-indigo-600">EG</span>, a passionate full-stack web developer
              with a focus on building modern web applications using the MERN stack, RESTful APIs, and cloud platforms like AWS and Render.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I enjoy building blogs, portfolios, and tools that help people share ideas and collaborate. I’m also diving into
              DevOps and exploring how serverless, EC2, and managed services can improve app deployment and scalability.

              Mabuhay Philippines
            </p>
            <p className="text-lg leading-relaxed">
              When I’m not coding, I enjoy playing music, editing videos, and exploring tech communities online.
            </p>
          </div>
        </section>
      </Container>
  );
}

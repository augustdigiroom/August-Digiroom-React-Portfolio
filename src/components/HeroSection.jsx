import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const roles = [
  'Full Stack Developer',
  'MERN Stack',
  'Laravel Developer',
  'AWS Enthusiast',
];

export default function HeroSection() {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between py-32 px-8
      bg-gradient-to-b from-indigo-600 to-fuchsia-600 text-white
      dark:from-gray-900 dark:to-gray-800 dark:text-gray-100 font-inter"
    >
      {/* Left Text Section */}
      <div className="text-left max-w-xl">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          This is August!
        </motion.h1>

        {/* Animated Roles */}
        <div className="mt-6 space-y-4">
          {roles.map((role, index) => (
            <motion.p
              key={role}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + index * 1, duration: 0.6 }}
              className="text-2xl md:text-3xl font-semibold"
            >
              {role.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 1 + i * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 5 }}
          className="mt-8"
        >
        </motion.div>
        
      </div>

      {/* Right Image Placeholder */}
      <div className="hidden md:block md:w-1/2">
        {/* You can upload your image here */}
        <div className="w-full h-96 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-gray-700">Your Image Here</span>
        </div>
      </div>
    </section>
  );
}


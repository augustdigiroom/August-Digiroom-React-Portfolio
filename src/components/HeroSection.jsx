import { Typewriter } from 'react-simple-typewriter';

const roles = [
  'Full Stack Developer',
  'MERN Stack Development',
  'PHP / Laravel Framework',
  'AWS Managed Services',
];

export default function HeroSection() {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between py-32 px-8
      bg-gradient-to-b from-indigo-600 to-fuchsia-600 text-white
      dark:from-gray-900 dark:to-gray-800 dark:text-gray-100 font-inter"
    >
      {/* Left Text Section */}
      <div className="text-left max-w-xl space-y-4">
        <h1 className="text-4xl font-bold">THIS IS AUGUST!</h1>

       <p className="text-2xl font-normal">
        <Typewriter
          words={roles}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          typeStyle={{ fontSize: '1.5rem', fontWeight: 400 }}
        />
        <br />
        Static text to check font size
      </p>

      <h1 className="text-5xl text-red-500 font-inter font-bold">
         Tailwind + Inter Works!
      </h1>

      </div>

      {/* Right Image */}
        <div className="hidden md:flex md:w-1/2 justify-center">
          <div className="w-full h-96 max-w-md rounded-lg shadow-lg overflow-hidden">
            <img
              src="/august_image.png"
              alt="August Portfolio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

    </section>
  );
}



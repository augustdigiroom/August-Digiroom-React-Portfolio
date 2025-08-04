export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24
      bg-gradient-to-b from-indigo-600 to-fuchsia-600 text-white
      dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      
      <h1 className="text-5xl md:text-6xl font-extrabold">Hi, I'm EG 👋</h1>

      <p className="mt-4 text-lg md:text-xl max-w-xl">
        Full Stack Developer | MERN • Laravel • AWS | Bootcamp Graduate
      </p>

      <a
        href="#projects"
        className="mt-6 inline-block bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold
        hover:bg-gray-100
        dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
      >
        View My Projects
      </a>
    </section>
  );
}

const stacks = ['React', 'Node.js', 'MongoDB', 'Laravel', 'AWS', 'Tailwind CSS', 'MySQL'];

export default function StackSection() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8 text-indigo-700">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {stacks.map((tech, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-white shadow rounded-full text-sm font-medium text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

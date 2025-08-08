import projects from '../data/project.js';

export default function ProjectSection() {
  return (
    <section id="projects" className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600">{proj.title}</h3>
            <p className="text-sm my-2">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {proj.tags.map((tag, i) => (
                <span key={i} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
            >
              Look at my Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

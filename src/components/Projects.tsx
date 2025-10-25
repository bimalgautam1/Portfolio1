import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'gradient-1',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, team workspaces, and progress tracking.',
    tags: ['TypeScript', 'React', 'Supabase', 'Tailwind'],
    image: 'gradient-2',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location search, forecasts, and interactive maps.',
    tags: ['React', 'API Integration', 'Charts.js'],
    image: 'gradient-3',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Portfolio CMS',
    description: 'Content management system for portfolio websites with drag-and-drop builder and SEO optimization.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma'],
    image: 'gradient-4',
    github: 'https://github.com',
    demo: 'https://example.com'
  }
];

const gradients = {
  'gradient-1': 'from-blue-400 to-cyan-400',
  'gradient-2': 'from-emerald-400 to-teal-400',
  'gradient-3': 'from-orange-400 to-rose-400',
  'gradient-4': 'from-violet-400 to-fuchsia-400'
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
            >
              <div className={`h-48 bg-gradient-to-br ${gradients[project.image as keyof typeof gradients]} flex items-center justify-center text-white text-sm`}>
                Project Screenshot
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

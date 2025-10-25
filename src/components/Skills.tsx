import { Code2, Database, Palette, Server, Smartphone, Globe } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend Development',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js']
  },
  {
    icon: Server,
    title: 'Backend Development',
    skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL']
  },
  {
    icon: Database,
    title: 'Database & Cloud',
    skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Firebase', 'AWS']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    skills: ['Figma', 'Responsive Design', 'Accessibility', 'Prototyping']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    skills: ['React Native', 'Progressive Web Apps', 'Mobile-First Design']
  },
  {
    icon: Globe,
    title: 'Tools & Others',
    skills: ['Git', 'Docker', 'CI/CD', 'Testing', 'Agile']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

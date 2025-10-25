import { BookOpen, Coffee, Code2, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-1">
              <div className="bg-white rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm">
                    Your Photo or Illustration
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-blue-600">5+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="bg-cyan-50 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-cyan-600">2+</div>
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              About Me
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating elegant,
              user-friendly applications. With expertise in modern web technologies,
              I transform ideas into functional, beautiful digital experiences.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="font-semibold text-gray-900">City, Country</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Coffee size={20} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Availability</div>
                  <div className="font-semibold text-gray-900">Open to work</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Code2 size={20} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Specialization</div>
                  <div className="font-semibold text-gray-900">Full-Stack Dev</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <BookOpen size={20} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Education</div>
                  <div className="font-semibold text-gray-900">CS Degree</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

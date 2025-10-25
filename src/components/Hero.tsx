import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full">
              <span className="text-sm font-medium text-blue-600">Available for opportunities</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Hi, I'm
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Bimal</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Full-stack developer crafting elegant solutions to complex problems.
              Passionate about creating user-centered digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-3 bg-gray-100 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in-delay">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-1">
              <div className="w-full h-full bg-gray-200 rounded-3xl flex items-center justify-center text-gray-400 text-sm">
                Your Photo Here
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

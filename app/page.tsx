import Link from 'next/link';
import { ChevronRight, Code, Briefcase, User, Download, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="max-w-6xl w-full">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Développeur Full Stack
            </h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
              {portfolioData.profile.description}
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Spécialisé dans la création d'applications web modernes et performantes
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex gap-4 justify-center flex-wrap">
              <Link 
                href="/projets"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 font-medium"
              >
                <Briefcase size={20} />
                Découvrir mes projets
                <ChevronRight size={20} />
              </Link>
              <Link 
                href="/a-propos"
                className="bg-white text-gray-800 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 border border-gray-200 font-medium"
              >
                <User size={20} />
                En savoir plus
              </Link>
            </div>
          </div>

          {/* Quick Stats ou Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="text-blue-600 mb-4">
                <Briefcase size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {portfolioData.projects.length}+ Projets
              </h3>
              <p className="text-gray-600">
                Réalisés avec succès pour différents clients
              </p>
              <Link href="/projets" className="text-blue-600 hover:text-blue-700 font-medium mt-4 inline-flex items-center gap-1">
                Voir les projets <ChevronRight size={16} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="text-purple-600 mb-4">
                <Code size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {Object.values(portfolioData.stack).flat().length}+ Technologies
              </h3>
              <p className="text-gray-600">
                Maîtrisées pour créer des solutions complètes
              </p>
              <Link href="/stack" className="text-purple-600 hover:text-purple-700 font-medium mt-4 inline-flex items-center gap-1">
                Voir la stack <ChevronRight size={16} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="text-green-600 mb-4">
                <Mail size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Disponible
              </h3>
              <p className="text-gray-600">
                Pour de nouvelles opportunités et collaborations
              </p>
              <a href={`mailto:${portfolioData.profile.email}`} className="text-green-600 hover:text-green-700 font-medium mt-4 inline-flex items-center gap-1">
                Me contacter <ChevronRight size={16} />
              </a>
            </div>
          </div>

          {/* Recent Projects Preview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Projets récents</h2>
              <Link 
                href="/projets" 
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
              >
                Voir tout <ChevronRight size={20} />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.projects.slice(0, 2).map((project) => (
                <Link
                  key={project.id}
                  href={`/projets/${project.id}`}
                  className="group p-6 rounded-xl border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {project.role}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-sm">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
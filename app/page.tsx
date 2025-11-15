'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronRight, ChevronLeft, Code, Briefcase, User, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const projectsToShow = 2;
  const maxIndex = Math.max(0, portfolioData.projects.length - projectsToShow);

  const nextProjects = () => {
    setCurrentProjectIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevProjects = () => {
    setCurrentProjectIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleProjects = portfolioData.projects.slice(
    currentProjectIndex,
    currentProjectIndex + projectsToShow
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="max-w-6xl w-full">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Concepteur & Développeur Web/Mobile
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
              {portfolioData.profile.description}
            </p>
          </div>

          {/* Quick Stats */}
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

          {/* Recent Projects Carousel */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Projets récents</h2>
              <div className="flex items-center gap-4">
                {/* Boutons de navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={prevProjects}
                    disabled={currentProjectIndex === 0}
                    className={`p-2 rounded-lg transition-all ${
                      currentProjectIndex === 0
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                    }`}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextProjects}
                    disabled={currentProjectIndex >= maxIndex}
                    className={`p-2 rounded-lg transition-all ${
                      currentProjectIndex >= maxIndex
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                    }`}
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
                <Link
                  href="/projets"
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                >
                  Voir tout <ChevronRight size={20} />
                </Link>
              </div>
            </div>

            {/* Carousel de projets */}
            <div className="grid md:grid-cols-2 gap-6">
              {visibleProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projets/${project.id}`}
                  className="group rounded-xl border-2 border-gray-100 hover:border-blue-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  {/* Image du projet */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Briefcase size={64} className="text-blue-300" />
                      </div>
                    )}
                  </div>

                  {/* Contenu */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                          {project.title}
                        </h3>
                        {project.client && (
                          <p className="text-sm text-gray-500">Client: {project.client}</p>
                        )}
                      </div>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ml-2">
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
                  </div>
                </Link>
              ))}
            </div>

            {/* Indicateurs de pagination */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentProjectIndex
                      ? 'w-8 bg-blue-600'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
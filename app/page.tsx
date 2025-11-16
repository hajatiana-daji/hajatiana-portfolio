'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Code, Briefcase, User, Mail, Sparkles, Rocket, Zap } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const projectsToShow = 2;
  const maxIndex = Math.max(0, portfolioData.projects.length - projectsToShow);

  // Animation au chargement
  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 relative overflow-hidden">
      {/* Particules décoratives animées en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Header />
      
      <main className="flex-grow flex items-center justify-center px-4 py-16 relative z-10">
        <div className="max-w-6xl w-full">
          {/* Hero Section avec animations */}
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Badge animé */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 animate-fade-in-down">
              <Sparkles size={18} className="animate-pulse" />
              <span className="font-medium">Disponible pour de nouveaux projets</span>
            </div>

            <h1 className="text-2xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              {portfolioData.profile.title}
              <br />
              <span className="inline-flex items-center gap-3">
                <Zap className="text-yellow-500 animate-pulse" size={48} />
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in">
              {portfolioData.profile.description}
            </p>

            {/* CTA Buttons avec animations */}
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/projets"
                className="group bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-2xl hover:scale-105 font-medium animate-fade-in-up"
              >
                <Briefcase size={20} className="group-hover:rotate-12 transition-transform" />
                Découvrir mes projets
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/a-propos"
                className="group bg-white text-gray-800 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-2xl hover:scale-105 border border-gray-200 font-medium animate-fade-in-up animation-delay-200"
              >
                <User size={20} className="group-hover:scale-110 transition-transform" />
                En savoir plus
              </Link>
            </div>
          </div>

          {/* Quick Stats avec animations au survol */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <Briefcase size={40} />,
                color: 'blue',
                title: `${portfolioData.projects.length}+ Projets`,
                description: 'Réalisés avec succès pour différents clients',
                link: '/projets',
                linkText: 'Voir les projets',
                delay: '0'
              },
              {
                icon: <Code size={40} />,
                color: 'purple',
                title: `${Object.values(portfolioData.stack).flat().length}+ Technologies`,
                description: 'Maîtrisées pour créer des solutions complètes',
                link: '/stack',
                linkText: 'Voir la stack',
                delay: '200'
              },
              {
                icon: <Mail size={40} />,
                color: 'green',
                title: 'Disponible',
                description: 'Pour de nouvelles opportunités et collaborations',
                link: `mailto:${portfolioData.profile.email}`,
                linkText: 'Me contacter',
                delay: '400'
              }
            ].map((stat, index) => (
              <div
                key={index}
                className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 cursor-pointer animate-fade-in-up`}
                style={{ animationDelay: `${stat.delay}ms` }}
              >
                <div className={`text-${stat.color}-600 mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {stat.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {stat.description}
                </p>
                {stat.link.startsWith('mailto:') ? (
                  <a 
                    href={stat.link} 
                    className={`text-${stat.color}-600 hover:text-${stat.color}-700 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all`}
                  >
                    {stat.linkText} <ChevronRight size={16} />
                  </a>
                ) : (
                  <Link 
                    href={stat.link} 
                    className={`text-${stat.color}-600 hover:text-${stat.color}-700 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all`}
                  >
                    {stat.linkText} <ChevronRight size={16} />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Recent Projects Carousel avec animations améliorées */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 animate-fade-in-up animation-delay-600">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Rocket className="text-blue-600 animate-bounce-slow" size={32} />
                Projets récents
              </h2>
              <div className="flex items-center gap-4">
                {/* Boutons de navigation avec animations */}
                <div className="flex gap-2">
                  <button
                    onClick={prevProjects}
                    disabled={currentProjectIndex === 0}
                    className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                      currentProjectIndex === 0
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200 hover:-translate-x-1'
                    }`}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextProjects}
                    disabled={currentProjectIndex >= maxIndex}
                    className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                      currentProjectIndex >= maxIndex
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200 hover:translate-x-1'
                    }`}
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
                <Link
                  href="/projets"
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Voir tout <ChevronRight size={20} />
                </Link>
              </div>
            </div>

            {/* Carousel de projets avec transition fluide */}
            <div className="grid md:grid-cols-2 gap-6">
              {visibleProjects.map((project, index) => (
                <Link
                  key={project.id}
                  href={`/projets/${project.id}`}
                  className="group rounded-xl border-2 border-gray-100 hover:border-blue-300 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-slide-in-right"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image du projet avec overlay animé */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Briefcase size={64} className="text-blue-300 group-hover:scale-125 transition-transform duration-300" />
                      </div>
                    )}
                    {/* Overlay au survol */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6 bg-white group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-white transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                          {project.title}
                        </h3>
                        {project.client && (
                          <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                            Client: {project.client}
                          </p>
                        )}
                      </div>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ml-2 group-hover:scale-110 transition-transform">
                        {project.role}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-800 transition-colors">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i} 
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors"
                        >
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

            {/* Indicateurs de pagination animés */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentProjectIndex
                      ? 'w-8 bg-blue-600 scale-110'
                      : 'w-2 bg-gray-300 hover:bg-gray-400 hover:scale-125'
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
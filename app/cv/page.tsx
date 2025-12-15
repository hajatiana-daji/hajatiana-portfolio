'use client';

import { portfolioData } from '@/data/portfolio-data';
import { useEffect } from 'react';

export default function CVPage() {
  useEffect(() => {
    // Ajouter les styles d'impression
    document.title = `CV - ${portfolioData.profile.name}`;
  }, []);

  const formatDate = () => {
    return new Date().toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <style jsx global>{`
        @page {
          size: A4;
          margin: 1cm;
        }

        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
          .cv-container {
            padding: 0 !important;
          }
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background: #fff;
        }
      `}</style>

      {/* Bouton d'impression (caché à l'impression) */}
      <div className="no-print fixed top-4 right-4 z-50">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <span>📄</span>
          Télécharger en PDF
        </button>
      </div>

      <div className="cv-container max-w-[210mm] mx-auto bg-white p-5">
        {/* HEADER */}
        <header className="text-center pb-5 border-b-[3px] border-blue-600 mb-6">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">
            {portfolioData.profile.name}
          </h1>
          <div className="text-base text-gray-600 font-semibold mb-3">
            {portfolioData.profile.title}
          </div>
          <div className="flex justify-center gap-5 flex-wrap text-xs text-gray-600">
            <span>📧 {portfolioData.profile.email}</span>
            <span>📱 {portfolioData.profile.phone.split('|')[0].trim()}</span>
            <span>💼 {portfolioData.profile.linkedin.replace('linkedin.com/in/', '')}</span>
            <span>🔗 {portfolioData.profile.github.replace('github.com/', '')}</span>
          </div>
        </header>

        {/* PROFIL PROFESSIONNEL */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-blue-900 mb-3 pb-1 border-b-2 border-blue-400 flex items-center gap-2">
            <div className="w-1.5 h-5 bg-blue-600 rounded"></div>
            Profil Professionnel
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            {portfolioData.profile.description}
          </p>
        </section>

        {/* EXPÉRIENCES PROFESSIONNELLES */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-blue-900 mb-3 pb-1 border-b-2 border-blue-400 flex items-center gap-2">
            <div className="w-1.5 h-5 bg-blue-600 rounded"></div>
            Expériences Professionnelles
          </h2>
          {portfolioData.experiences.map((exp, index) => (
            <div key={index} className="mb-4 pl-4 border-l-[3px] border-blue-600">
              <div className="mb-1.5">
                <h3 className="text-sm font-bold text-gray-900">{exp.title}</h3>
                <p className="text-xs text-blue-600 font-semibold">{exp.company}</p>
                <p className="text-xs text-gray-600 italic">{exp.date}</p>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                {exp.description}
              </p>
              {exp.skills && exp.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-50 text-blue-900 px-2.5 py-0.5 rounded-full text-[10px] font-medium border border-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* FORMATION ACADÉMIQUE */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-blue-900 mb-3 pb-1 border-b-2 border-blue-400 flex items-center gap-2">
            <div className="w-1.5 h-5 bg-blue-600 rounded"></div>
            Formation Académique
          </h2>
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="mb-3 pl-4 border-l-[3px] border-green-600 relative">
              <div className="absolute -left-[11px] top-0 w-5 h-5 bg-green-600 rounded-full border-4 border-white"></div>
              <h3 className="text-sm font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-xs text-green-600 font-semibold">{edu.school}</p>
              <p className="text-xs text-gray-600 italic">{edu.date}</p>
            </div>
          ))}
        </section>

        {/* COMPÉTENCES TECHNIQUES */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-blue-900 mb-3 pb-1 border-b-2 border-blue-400 flex items-center gap-2">
            <div className="w-1.5 h-5 bg-blue-600 rounded"></div>
            Compétences Techniques
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 p-3 rounded-lg border-l-[3px] border-blue-600">
              <h3 className="text-xs font-bold text-gray-900 mb-1.5">Langages</h3>
              <p className="text-[10px] text-gray-700 leading-relaxed">
                {portfolioData.stack.languages.join(', ')}
              </p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg border-l-[3px] border-blue-600">
              <h3 className="text-xs font-bold text-gray-900 mb-1.5">Frameworks & Technologies</h3>
              <p className="text-[10px] text-gray-700 leading-relaxed">
                {portfolioData.stack.technologies_frameworks.join(', ')}
              </p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg border-l-[3px] border-blue-600">
              <h3 className="text-xs font-bold text-gray-900 mb-1.5">Bases de données</h3>
              <p className="text-[10px] text-gray-700 leading-relaxed">
                {portfolioData.stack.databases.join(', ')}
              </p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg border-l-[3px] border-blue-600">
              <h3 className="text-xs font-bold text-gray-900 mb-1.5">Outils & Méthodologies</h3>
              <p className="text-[10px] text-gray-700 leading-relaxed">
                {[...portfolioData.stack.outils, ...portfolioData.stack.architecture_conception.slice(0, 3)].join(', ')}
              </p>
            </div>
          </div>
        </section>

        {/* PROJETS CLÉS - TOUS LES PROJETS */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-blue-900 mb-3 pb-1 border-b-2 border-blue-400 flex items-center gap-2">
            <div className="w-1.5 h-5 bg-blue-600 rounded"></div>
            Projets Clés
          </h2>
          {portfolioData.projects.map((project, index) => (
            <div key={project.id} className="mb-3 p-2.5 bg-gray-50 rounded-md border-l-[3px] border-purple-600">
              <div className="flex justify-between items-start mb-1">
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-gray-900">{project.title}</h3>
                  <p className="text-xs text-purple-600 font-semibold">{project.role}</p>
                </div>
                <span className="text-[10px] bg-purple-600 text-white px-2 py-0.5 rounded-full">
                  {project.type}
                </span>
              </div>
              <p className="text-[10px] text-gray-700 leading-relaxed mb-1">
                {project.description}
              </p>
              <p className="text-[9px] text-gray-600 italic">
                {project.technologies.join(' • ')}
              </p>
            </div>
          ))}
        </section>

        {/* QUALITÉS PROFESSIONNELLES */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-blue-900 mb-3 pb-1 border-b-2 border-blue-400 flex items-center gap-2">
            <div className="w-1.5 h-5 bg-blue-600 rounded"></div>
            Qualités Professionnelles
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {portfolioData.characteristics.map((char, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg border-l-[3px] border-blue-600">
                <h3 className="text-xs font-bold text-gray-900 mb-1">{char.title}</h3>
                <p className="text-[10px] text-gray-700">{char.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIVERS - NOUVELLE SECTION */}
        {portfolioData.divers && (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3 pb-1 border-b-2 border-blue-400 flex items-center gap-2">
              <div className="w-1.5 h-5 bg-blue-600 rounded"></div>
              {portfolioData.divers.title}
            </h2>
            <div className="space-y-2">
              {portfolioData.divers.items.map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <span className="text-blue-600 font-bold text-xs mt-0.5">•</span>
                  <div className="flex-1">
                    <span className="font-semibold text-xs text-gray-900">{item.label}</span>
                    {item.period && (
                      <span className="text-[10px] text-gray-600 italic ml-2">
                        ({item.period})
                      </span>
                    )}
                    <p className="text-[10px] text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FOOTER */}
        <footer className="text-center mt-6 pt-4 border-t-2 border-gray-200 text-[10px] text-gray-500">
          CV généré le {formatDate()} • Disponible pour de nouvelles opportunités
        </footer>
      </div>
    </>
  );
}
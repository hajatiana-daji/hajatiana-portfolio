import { portfolioData } from '@/data/portfolio-data';
import ProjectCard from '@/components/ProjectCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Briefcase } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <Header />
      
      <main className="flex-grow px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header de la page */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
              <Briefcase size={32} className="text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mes Projets
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez une sélection de projets sur lesquels j'ai travaillé en tant que développeur 
              et responsable technique
            </p>
          </div>

          {/* Grille de projets */}
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Message si aucun projet */}
          {portfolioData.projects.length === 0 && (
            <div className="text-center py-16">
              <Briefcase size={64} className="text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-500">Aucun projet à afficher pour le moment</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
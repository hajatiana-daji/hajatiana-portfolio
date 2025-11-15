import Link from 'next/link';
import { ArrowLeft, Users, ChevronRight, Calendar } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = portfolioData.projects.find(p => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link 
            href="/projets"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
          >
            <ArrowLeft size={20} /> Retour aux projets
          </Link>
        </div>
      </nav>
      
      <main className="flex-grow px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-800">{project.title}</h1>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                {project.role}
              </span>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Contexte</h3>
              <p className="text-gray-600 leading-relaxed">{project.details.context}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center gap-2">
                <Users size={20} /> Équipe
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.team.map((member, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg">
                    {member}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Mes responsabilités</h3>
              <ul className="space-y-2">
                {project.details.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <ChevronRight size={20} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <h3 className="text-lg font-semibold mb-2 text-green-800">Résultats</h3>
              <p className="text-green-700">{project.details.results}</p>
            </div>

            <div className="mt-6 flex items-center text-sm text-gray-500">
              <Calendar size={16} className="mr-2" />
              Période: {project.date}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
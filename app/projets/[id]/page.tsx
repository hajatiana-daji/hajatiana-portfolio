import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Users, ChevronRight, Calendar, User, Briefcase, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { notFound } from 'next/navigation';
import type { Metadata } from "next";
import { portfolioData } from '@/data/portfolio-data';

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = portfolioData.projects.find(p => p.id === params.id);
  
  if (!project) {
    return {
      title: 'Projet non trouvé',
    };
  }

  return {
    title: project.title,
    description: `${project.description} - Technologies: ${project.technologies.join(', ')}. ${project.role} sur ce projet ${project.client ? 'pour ' + project.client : ''}.`,
    openGraph: {
      title: `${project.title} | Hajatiana ANDRIANJAKA`,
      description: project.description,
      url: `https://hajatiana.vercel.app/projets/${project.id}`,
      images: project.image ? [project.image] : ['/images/og-image.jpg'],
    },
  };
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = portfolioData.projects.find(p => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link 
              href="/projets"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <ArrowLeft size={20} />
              Retour aux projets
            </Link>
          </div>

          {/* Header du projet */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            {/* Images du projet */}
            <div className="grid md:grid-cols-2 gap-4 p-6 bg-gray-50">
              {/* Image principale */}
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Briefcase size={80} className="text-blue-300" />
                  </div>
                )}
              </div>

              {/* Image secondaire ou grille d'images */}
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                {project.images && project.images.length > 0 ? (
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} - Image 2`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Briefcase size={80} className="text-purple-300" />
                  </div>
                )}
              </div>
            </div>

            {/* Informations principales */}
            <div className="p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{project.title}</h1>
                  {project.client && (
                    <p className="text-lg text-gray-600 flex items-center gap-2">
                      <User size={20} />
                      Client: <span className="font-semibold text-gray-900">{project.client}</span>
                    </p>
                  )}
                </div>
                <span className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-lg font-semibold">
                  {project.role}
                </span>
              </div>

              {/* Métadonnées */}
              <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={20} className="text-blue-600" />
                  <span className="font-medium">{project.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users size={20} className="text-green-600" />
                  <span className="font-medium">{project.team.length} membres d'équipe</span>
                </div>
              </div>

              {/* Résumé du projet */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Résumé du projet</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </div>

          {/* Contexte */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-1 h-8 bg-blue-600 rounded"></div>
              Contexte
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {project.details.context}
            </p>
          </div>

          {/* Technologies utilisées */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <div className="w-1 h-8 bg-purple-600 rounded"></div>
              Technologies utilisées
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="bg-blue-50 text-blue-700 px-5 py-3 rounded-xl font-medium text-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Mes missions */}
          {project.details.missions && project.details.missions.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-1 h-8 bg-green-600 rounded"></div>
                Mes missions
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.details.missions.map((mission, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{mission}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Responsabilités (si différent des missions) */}
          {project.details.responsibilities && project.details.responsibilities.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-1 h-8 bg-orange-600 rounded"></div>
                Responsabilités
              </h2>
              <ul className="space-y-3">
                {project.details.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                    <ChevronRight size={24} className="text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* L'équipe */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Users size={28} className="text-indigo-600" />
              L'équipe sur ce projet
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {project.team.map((member, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-200"
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
                    {member.charAt(0)}
                  </div>
                  <span className="text-gray-700 font-medium">{member}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Résultats */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle size={28} />
              Résultats obtenus
            </h2>
            <p className="text-lg leading-relaxed text-green-50">
              {project.details.results}
            </p>
          </div>

          {/* Navigation vers d'autres projets */}
          <div className="flex justify-center">
            <Link 
              href="/projets"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl font-medium"
            >
              Voir tous les projets
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
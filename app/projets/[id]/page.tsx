'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, Users, Calendar, Briefcase, 
  CheckCircle, Code, TrendingUp,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // ✅ IMPORTANT : Unwrap la Promise avec use()
  const { id } = use(params);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  
  const project = portfolioData.projects.find(p => p.id === id);
  
  // Si projet non trouvé
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <Briefcase size={80} className="text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Projet non trouvé</h1>
            <p className="text-gray-600 mb-8">
              Le projet avec l'ID "{id}" n'existe pas.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              IDs disponibles : {portfolioData.projects.map(p => p.id).join(', ')}
            </p>
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              <ArrowLeft size={20} />
              Retour aux projets
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Toutes les images du projet
  const allImages = [
    project.image,
    ...(project.images || [])
  ].filter(Boolean);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Header />
      
      <main className="flex-grow px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center justify-between">
            <Link 
              href="/projets"
              className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-all bg-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Retour aux projets
            </Link>

            {/* Navigation entre projets */}
            <div className="flex gap-2">
              {portfolioData.projects.map((p) => (
                <Link
                  key={p.id}
                  href={`/projets/${p.id}`}
                  className={`w-3 h-3 rounded-full transition-all ${
                    p.id === project.id 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-blue-400'
                  }`}
                  title={p.title}
                />
              ))}
            </div>
          </div>

          {/* Hero avec image */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
            
            {/* Image carousel */}
            {allImages.length > 0 ? (
              <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-blue-100 to-purple-100">
                <Image
                  src={allImages[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                  onError={() => setImageError(true)}
                />
                
                {imageError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="text-center">
                      <Briefcase size={80} className="text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">Image non disponible</p>
                    </div>
                  </div>
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Navigation carousel */}
                {allImages.length > 1 && !imageError && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl transition-all hover:scale-110"
                    >
                      <ChevronLeft size={24} className="text-gray-800" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl transition-all hover:scale-110"
                    >
                      <ChevronRight size={24} className="text-gray-800" />
                    </button>

                    {/* Indicateurs */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {allImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-2 rounded-full transition-all ${
                            index === currentImageIndex
                              ? 'w-8 bg-white'
                              : 'w-2 bg-white/50 hover:bg-white/75'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Infos en overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-end justify-between gap-4 flex-wrap">
                    <div>
                      <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                        {project.title}
                      </h1>
                      {project.client && (
                        <p className="text-lg md:text-xl flex items-center gap-2 text-blue-200">
                          <Briefcase size={20} />
                          Client: <span className="font-semibold text-white">{project.client}</span>
                        </p>
                      )}
                    </div>
                    <span className="bg-white text-blue-600 px-6 py-3 rounded-2xl text-base md:text-lg font-bold shadow-2xl whitespace-nowrap">
                      {project.role}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-96 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <Briefcase size={120} className="text-blue-300" />
              </div>
            )}

            {/* Métadonnées */}
            <div className="grid md:grid-cols-3 gap-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Période</p>
                  <p className="font-bold text-gray-900 text-sm">{project.date}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <Users className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Équipe</p>
                  <p className="font-bold text-gray-900 text-sm">{project.team.length} membres</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                  <Code className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Technologies</p>
                  <p className="font-bold text-gray-900 text-sm">{project.technologies.length} outils</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Colonne gauche (2/3) */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Description */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
                  <p className="text-gray-700">{project.details.context}</p>
                </div>
              </div>

              {/* Missions */}
              {project.details.missions && project.details.missions.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Mes missions</h2>
                  <div className="space-y-3">
                    {project.details.missions.map((mission, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{mission}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Résultats */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp size={28} />
                  <h2 className="text-2xl font-bold">Résultats</h2>
                </div>
                <p className="text-lg leading-relaxed text-green-50">
                  {project.details.results}
                </p>
              </div>
            </div>

            {/* Sidebar (1/3) */}
            <div className="space-y-6">
              
              {/* Technologies */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Code size={24} className="text-purple-600" />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-purple-100 text-purple-700 px-3 py-2 rounded-lg font-medium text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Équipe */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Users size={24} className="text-blue-600" />
                  Équipe
                </h3>
                <div className="space-y-2">
                  {project.team.map((member, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                        {member.charAt(0)}
                      </div>
                      <span className="text-gray-700 text-sm font-medium">{member}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold mb-3">Projet similaire ?</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Je peux réaliser un projet semblable pour vous. Discutons-en !
                </p>
                <Link
                  href="/a-propos"
                  className="block w-full bg-white text-blue-600 px-6 py-3 rounded-xl font-bold text-center hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
                >
                  Me contacter
                </Link>
              </div>
            </div>
          </div>

          {/* Bouton retour */}
          <div className="flex justify-center mt-12">
            <Link 
              href="/projets"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl font-medium"
            >
              <ArrowLeft size={20} />
              Retour à tous les projets
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
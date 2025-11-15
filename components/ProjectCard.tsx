import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ChevronRight, Briefcase } from 'lucide-react';
import { Project } from '@/data/portfolio-data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projets/${project.id}`}
      className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
    >
      {/* Image */}
      <div className="relative h-56 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Briefcase size={64} className="text-blue-300" />
          </div>
        )}
        {/* Badge role */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            {project.role}
          </span>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        
        {project.client && (
          <p className="text-sm text-gray-500 mb-3">Client: {project.client}</p>
        )}
        
        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-gray-500 text-sm font-medium">+{project.technologies.length - 4}</span>
          )}
        </div>
        
        {/* Date */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar size={16} className="mr-2" />
            {project.date}
          </div>
          <div className="text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Voir détails
            <ChevronRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
}
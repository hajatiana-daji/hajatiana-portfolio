import Link from 'next/link';
import {
  Calendar,
  ChevronRight,
  Briefcase,
  Smartphone,
  Monitor
} from 'lucide-react';
import { Project } from '@/data/portfolio-data';

interface ProjectCardProps {
  project: Project;
}

/**
 * Configuration visuelle par type de projet
 */
const PROJECT_TYPE_CONFIG = {
  Mobile: {
    icon: Smartphone,
    bg: 'bg-emerald-600',
    badge: 'bg-emerald-100 text-emerald-700',
    gradient: 'from-emerald-50 via-green-50 to-teal-50',
  },
  Web: {
    icon: Monitor,
    bg: 'bg-indigo-600',
    badge: 'bg-indigo-100 text-indigo-700',
    gradient: 'from-indigo-50 via-blue-50 to-purple-50',
  },
  Default: {
    icon: Briefcase,
    bg: 'bg-blue-600',
    badge: 'bg-blue-100 text-blue-700',
    gradient: 'from-blue-50 via-sky-50 to-indigo-50',
  },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const config =
    PROJECT_TYPE_CONFIG[
      project.type as keyof typeof PROJECT_TYPE_CONFIG
    ] || PROJECT_TYPE_CONFIG.Default;

  const Icon = config.icon;

  return (
    <Link
      href={`/projets/${project.id}`}
      className="group bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:border-blue-200"
    >
      {/* Header visuel */}
      <div
        className={`relative p-6 bg-gradient-to-br ${config.gradient}`}
      >
        {/* Badge type */}
        <span
          className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold shadow ${config.badge}`}
        >
          {project.type}
        </span>

        {/* Icône centrale */}
        <div
          className={`w-14 h-14 rounded-xl ${config.bg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
        >
          <Icon className="text-white" size={28} />
        </div>

        {/* Badge rôle */}
        <span className="absolute top-4 right-4 bg-white text-gray-700 px-4 py-1.5 rounded-full text-xs font-semibold shadow">
          {project.role}
        </span>

        {/* Titre */}
        <h3 className="mt-6 text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        {/* Client */}
        {project.client && (
          <p className="text-sm text-gray-500 mt-1">
            Client : {project.client}
          </p>
        )}
      </div>

      {/* Contenu */}
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-gray-500 text-sm font-medium">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar size={16} className="mr-2" />
            {project.date}
          </div>

          <div className="text-blue-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            Voir détails
            <ChevronRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
}

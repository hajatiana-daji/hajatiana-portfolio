import Link from 'next/link';
import { Calendar, ChevronRight } from 'lucide-react';
import { Project } from '@/data/portfolio-data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
          {project.role}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <Calendar size={16} className="mr-2" />
        {project.date}
      </div>
      <Link 
        href={`/projets/${project.id}`}
        className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
      >
        Voir les détails <ChevronRight size={18} />
      </Link>
    </div>
  );
}
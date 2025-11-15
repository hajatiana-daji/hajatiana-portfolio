import { Mail, Phone, Facebook, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-4 text-center">Me contacter</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href={`mailto:${portfolioData.profile.email}`} 
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <Mail size={20} />
            <span>{portfolioData.profile.email}</span>
          </a>
          <a 
            href={`tel:${portfolioData.profile.phone}`} 
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <Phone size={20} />
            <span>{portfolioData.profile.phone}</span>
          </a>
          <a 
            href={`https://${portfolioData.profile.facebook}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <Facebook size={20} />
            <span>Facebook</span>
          </a>
          <a 
            href={`https://${portfolioData.profile.github}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a 
            href={`https://${portfolioData.profile.linkedin}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
        <p className="text-center mt-6 text-gray-400 text-sm">
          © 2024 {portfolioData.profile.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
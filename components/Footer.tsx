import { Mail, Phone, Facebook, Github, Linkedin, MapPin } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1 : À propos */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {portfolioData.profile.name}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Développeur Full Stack passionné, spécialisé dans la création d'applications web et mobile modernes.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={18} />
              <span>Madagascar</span>
            </div>
          </div>

          {/* Colonne 2 : Navigation rapide */}
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/a-propos" className="text-gray-400 hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="/projets" className="text-gray-400 hover:text-white transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="/stack" className="text-gray-400 hover:text-white transition-colors">
                  Stack technique
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Me contacter</h3>
            <div className="space-y-3">
              <a 
                href={`mailto:${portfolioData.profile.email}`} 
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
                <span className="text-sm">{portfolioData.profile.email}</span>
              </a>
              <a 
                href={`tel:${portfolioData.profile.phone.split('|')[0].trim()}`} 
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Phone size={20} />
                <span className="text-sm">{portfolioData.profile.phone.split('|')[0].trim()}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            <a 
              href={`https://${portfolioData.profile.facebook}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-slate-700 hover:bg-blue-600 transition-colors flex items-center justify-center"
            >
              <Facebook size={20} />
            </a>
            <a 
              href={`https://${portfolioData.profile.github}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-slate-700 hover:bg-gray-600 transition-colors flex items-center justify-center"
            >
              <Github size={20} />
            </a>
            <a 
              href={`https://${portfolioData.profile.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-slate-700 hover:bg-blue-500 transition-colors flex items-center justify-center"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            © {currentYear} {portfolioData.profile.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
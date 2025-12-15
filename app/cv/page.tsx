'use client';

import { portfolioData } from '@/data/portfolio-data';
import { Mail, Phone, Github, Linkedin, Facebook, Download } from 'lucide-react';
import { useEffect } from 'react';

export default function CVPage() {
    useEffect(() => {
        // Ajouter des styles d'impression
        const style = document.createElement('style');
        style.innerHTML = `
            @media print {
                body { margin: 0; padding: 0; }
                .no-print { display: none !important; }
                .cv-container { box-shadow: none !important; margin: 0 !important; }
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            {/* Bouton d'impression */}
            <div className="max-w-5xl mx-auto mb-4 no-print">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                    <Download size={20} />
                    Télécharger en PDF
                </button>
            </div>

            {/* CV Container */}
            <div className="cv-container max-w-5xl mx-auto bg-white shadow-2xl">
                {/* En-tête */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
                    <h1 className="text-4xl font-bold mb-2">{portfolioData.profile.name}</h1>
                    <p className="text-xl text-blue-100 mb-4">{portfolioData.profile.title}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <Mail size={16} />
                            <span>{portfolioData.profile.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>{portfolioData.profile.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Linkedin size={16} />
                            <span>{portfolioData.profile.linkedin}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Github size={16} />
                            <span>{portfolioData.profile.github}</span>
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    {/* Profil */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-2">
                            Profil
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            {portfolioData.profile.description}
                        </p>
                    </section>

                    {/* Expériences */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                            Expériences Professionnelles
                        </h2>
                        {portfolioData.experiences.map((exp, index) => (
                            <div key={index} className="mb-6">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                                        <p className="text-blue-600 font-medium">{exp.company}</p>
                                    </div>
                                    <span className="text-sm text-gray-600 whitespace-nowrap">{exp.date}</span>
                                </div>
                                <p className="text-gray-700 mb-2">{exp.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill, i) => (
                                        <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Formation */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                            Formation
                        </h2>
                        {portfolioData.education.map((edu, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex justify-between items-start mb-1">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                                        <p className="text-blue-600">{edu.school}</p>
                                    </div>
                                    <span className="text-sm text-gray-600 whitespace-nowrap">{edu.date}</span>
                                </div>
                                <p className="text-gray-700 text-sm">{edu.description}</p>
                            </div>
                        ))}
                    </section>

                    {/* Compétences Techniques */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                            Compétences Techniques
                        </h2>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">Langages</h3>
                                <div className="flex flex-wrap gap-2">
                                    {portfolioData.stack.languages.map((lang, i) => (
                                        <span key={i} className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded">
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">Frameworks</h3>
                                <div className="flex flex-wrap gap-2">
                                    {portfolioData.stack.technologies_frameworks.map((tech, i) => (
                                        <span key={i} className="text-sm bg-green-50 text-green-700 px-3 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">Bases de données</h3>
                                <div className="flex flex-wrap gap-2">
                                    {portfolioData.stack.databases.map((db, i) => (
                                        <span key={i} className="text-sm bg-purple-50 text-purple-700 px-3 py-1 rounded">
                                            {db}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">Outils</h3>
                                <div className="flex flex-wrap gap-2">
                                    {portfolioData.stack.outils.map((tool, i) => (
                                        <span key={i} className="text-sm bg-orange-50 text-orange-700 px-3 py-1 rounded">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h3 className="font-semibold text-gray-900 mb-2">Architecture & Conception</h3>
                            <div className="flex flex-wrap gap-2">
                                {portfolioData.stack.architecture_conception.map((arch, i) => (
                                    <span key={i} className="text-sm bg-indigo-50 text-indigo-700 px-3 py-1 rounded">
                                        {arch}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4">
                            <h3 className="font-semibold text-gray-900 mb-2">Gestion & Pilotage</h3>
                            <div className="flex flex-wrap gap-2">
                                {portfolioData.stack.gestion_pilotage_technique.map((gestion, i) => (
                                    <span key={i} className="text-sm bg-teal-50 text-teal-700 px-3 py-1 rounded">
                                        {gestion}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Projets Clés */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                            Projets Principaux
                        </h2>
                        {portfolioData.projects.slice(0, 4).map((project, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex justify-between items-start mb-1">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                                        <p className="text-sm text-gray-600">{project.role} • {project.client}</p>
                                    </div>
                                    <span className="text-sm text-gray-600 whitespace-nowrap">{project.date}</span>
                                </div>
                                <p className="text-gray-700 text-sm mb-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 6).map((tech, i) => (
                                        <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Centres d'intérêt */}
                    {portfolioData.divers && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                                {portfolioData.divers.title}
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                {portfolioData.divers.items.map((item, index) => (
                                    <div key={index}>
                                        <h3 className="font-semibold text-gray-900">{item.label}</h3>
                                        <p className="text-sm text-gray-700">{item.description}</p>
                                        {item.period && <p className="text-xs text-gray-500 mt-1">{item.period}</p>}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}
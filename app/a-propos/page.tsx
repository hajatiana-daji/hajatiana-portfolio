import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolio-data';
import { Mail, Phone } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: "Ingénieur informatique diplômé de l'ENI (2022), spécialisé en développement Full Stack. Découvrez mon parcours académique et professionnel, mes compétences et mes motivations.",
  openGraph: {
    title: "À propos | Hajatiana ANDRIANJAKA",
    description: "Parcours, formation et compétences d'un ingénieur informatique passionné.",
    url: 'https://hajatiana.vercel.app/a-propos',
  },
};

export default function AProposPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <Header />

      <main className="flex-grow px-4 py-12">
        <div className="max-w-5xl mx-auto">

          {/* Section Hero avec photo */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Photo */}
              <div className="relative">
                <Image
                  src={portfolioData.profile.photo}
                  alt={portfolioData.profile.name}
                  width={200}
                  height={200}
                  className="rounded-2xl object-cover border-4 border-blue-500 shadow-xl"
                />
                {portfolioData.profileExtra?.available && (
                  <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    Disponible
                  </div>
                )}
              </div>

              {/* Intro */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {portfolioData.profile.name}
                </h1>
                <p className="text-xl text-blue-600 font-semibold mb-4">
                  {portfolioData.profile.title}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {portfolioData.profile.description}
                </p>
              </div>
            </div>
          </div>

          {/* Mon parcours */}
          {portfolioData.profileExtra?.parcours && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-1 h-10 bg-blue-600 rounded"></div>
                Mon parcours
              </h2>
              <div className="prose prose-lg max-w-none space-y-4">
                {portfolioData.profileExtra.parcours.map((item, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Expérience professionnelle */}
          {portfolioData.experiences && portfolioData.experiences.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-indigo-600">📅</span>
                Expérience professionnelle
              </h2>
              <div className="space-y-6">
                {portfolioData.experiences.map((exp, index) => {
                  const borderColorClasses = {
                    blue: 'border-blue-600',
                    green: 'border-green-600',
                    purple: 'border-purple-600',
                    orange: 'border-orange-600',
                    indigo: 'border-indigo-600',
                    gray: 'border-gray-600',
                  }[exp.color] || 'border-gray-600';

                  const textColorClasses = {
                    blue: 'text-blue-600',
                    green: 'text-green-600',
                    purple: 'text-purple-600',
                    orange: 'text-orange-600',
                    indigo: 'text-indigo-600',
                    gray: 'text-gray-600',
                  }[exp.color] || 'text-gray-600';

                  const bgColorClasses = {
                    blue: 'bg-blue-50',
                    green: 'bg-green-50',
                    purple: 'bg-purple-50',
                    orange: 'bg-orange-50',
                    indigo: 'bg-indigo-50',
                    gray: 'bg-gray-50',
                  }[exp.color] || 'bg-gray-50';

                  return (
                    <div key={index} className={`border-l-4 ${borderColorClasses} pl-6`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className={`${textColorClasses} font-medium mb-2`}>
                        {exp.company} | {exp.date}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        {exp.description}
                      </p>
                      
                      {/* Skills - si présents */}
                      {exp.skills && exp.skills.length > 0 && (
                        <div className="mt-3">
                          <p className="text-sm font-semibold text-gray-700 mb-2">
                            Compétences développées :
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex} 
                                className={`${bgColorClasses} ${textColorClasses} px-3 py-1 rounded-full text-xs font-medium border border-current`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Formation académique */}
          {portfolioData.education && portfolioData.education.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-blue-600">🎓</span>
                Formation académique
              </h2>
              <div className="space-y-6">
                {portfolioData.education.map((edu, index) => {
                  const borderColorClasses = {
                    blue: 'border-blue-600 bg-blue-600',
                    green: 'border-green-600 bg-green-600',
                    purple: 'border-purple-600 bg-purple-600',
                    orange: 'border-orange-600 bg-orange-600',
                  }[edu.color] || 'border-gray-600 bg-gray-600';

                  const textColorClasses = {
                    blue: 'text-blue-600',
                    green: 'text-green-600',
                    purple: 'text-purple-600',
                    orange: 'text-orange-600',
                  }[edu.color] || 'text-gray-600';

                  return (
                    <div key={index} className={`border-l-4 ${borderColorClasses.split(' ')[0]} pl-6 relative`}>
                      <div className={`absolute -left-3 top-0 w-6 h-6 ${borderColorClasses.split(' ')[1]} rounded-full border-4 border-white`}></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {edu.degree}
                      </h3>
                      <p className={`${textColorClasses} font-medium mb-2`}>
                        {edu.school} | {edu.date}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Ce qui me caractérise */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {portfolioData.characteristics.map((char, index) => {
              const Icon = char.icon;
              const colorClasses = {
                blue: 'border-blue-600 text-blue-600',
                green: 'border-green-600 text-green-600',
                purple: 'border-purple-600 text-purple-600',
                orange: 'border-orange-600 text-orange-600',
              }[char.color] || 'border-gray-600 text-gray-600';

              return (
                <div key={index} className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${colorClasses.split(' ')[0]}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className={colorClasses.split(' ')[1]} size={28} />
                    <h3 className="text-xl font-bold text-gray-900">{char.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {char.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Ce qui me motive */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-red-500">❤️</span>
              Ce qui me motive
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.motivations.map((motivation, index) => {
                const Icon = motivation.icon;
                const bgColorClasses = {
                  blue: 'bg-blue-100 text-blue-600',
                  green: 'bg-green-100 text-green-600',
                  purple: 'bg-purple-100 text-purple-600',
                  orange: 'bg-orange-100 text-orange-600',
                }[motivation.bg] || 'bg-gray-100 text-gray-600';

                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full ${bgColorClasses.split(' ')[0]} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={bgColorClasses.split(' ')[1]} size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{motivation.title}</h4>
                      <p className="text-gray-600 text-sm">
                        {motivation.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Contact */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-3">Travaillons ensemble !</h2>
              {portfolioData.profileExtra?.ctaText && (
                <p className="text-lg text-blue-100">
                  {portfolioData.profileExtra.ctaText}
                </p>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${portfolioData.profile.email}`}
                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-lg"
              >
                <Mail size={20} />
                {portfolioData.profile.email}
              </a>
              <a
                href={`tel:${portfolioData.profile.phone.split('|')[0].trim()}`}
                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-lg"
              >
                <Phone size={20} />
                {portfolioData.profile.phone.split('|')[0].trim()}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
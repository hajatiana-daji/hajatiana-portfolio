import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolio-data';
import { Mail, Phone, MapPin, Calendar, Award, Code, Target, Heart, Rocket, Users, TrendingUp, Lightbulb } from 'lucide-react';
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
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  Disponible
                </div>
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
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-1 h-10 bg-blue-600 rounded"></div>
              Mon parcours
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Fort de plusieurs années d'expérience dans le développement logiciel, je me suis spécialisé
                dans la conception et la réalisation d'applications web et mobiles modernes. Mon approche
                allie expertise technique, vision produit et sens du management.
              </p>
              <p className="text-gray-700 leading-relaxed">
                De la conception de l'architecture à la livraison du produit final, j'accompagne les projets
                à chaque étape en garantissant qualité, performance et maintenabilité du code.
              </p>
            </div>
          </div>

          {/* Ce qui me caractérise */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
              <div className="flex items-center gap-3 mb-3">
                <Code className="text-blue-600" size={28} />
                <h3 className="text-xl font-bold text-gray-900">Excellence technique</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Maîtrise approfondie des technologies modernes, architecture logicielle solide
                et clean code pour des applications performantes et maintenables.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-green-600" size={28} />
                <h3 className="text-xl font-bold text-gray-900">Leadership technique</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Capacité à piloter des équipes de développement, coordonner les efforts et
                garantir l'atteinte des objectifs dans les délais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-600">
              <div className="flex items-center gap-3 mb-3">
                <Target className="text-purple-600" size={28} />
                <h3 className="text-xl font-bold text-gray-900">Vision produit</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Compréhension fine des besoins métier et capacité à traduire les exigences
                fonctionnelles en solutions techniques adaptées.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-600">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="text-orange-600" size={28} />
                <h3 className="text-xl font-bold text-gray-900">Innovation continue</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Veille technologique constante et capacité à intégrer les meilleures pratiques
                et technologies émergentes dans les projets.
              </p>
            </div>
          </div>

          {/* Ce qui me motive */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Heart className="text-red-500" size={32} />
              Ce qui me motive
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Rocket className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Créer des solutions impactantes</h4>
                  <p className="text-gray-600 text-sm">
                    Développer des applications qui résolvent de vrais problèmes et améliorent
                    le quotidien des utilisateurs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Progresser continuellement</h4>
                  <p className="text-gray-600 text-sm">
                    Apprendre de nouvelles technologies, améliorer mes compétences et
                    relever des défis techniques stimulants.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Users className="text-purple-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Travailler en équipe</h4>
                  <p className="text-gray-600 text-sm">
                    Collaborer avec des profils variés, partager mes connaissances et
                    apprendre des autres.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Award className="text-orange-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Viser l'excellence</h4>
                  <p className="text-gray-600 text-sm">
                    Produire du code de qualité, suivre les meilleures pratiques et
                    livrer des projets dont je suis fier.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expérience professionnelle */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Calendar className="text-indigo-600" size={32} />
              Expérience professionnelle
            </h2>
            <div className="space-y-6">
              {/* Vous pouvez ajouter vos expériences ici */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Responsable Technique & Développeur Full Stack
                </h3>
                <p className="text-blue-600 font-medium mb-2">CELAVI | Juillet 2023 - Aujourd'hui</p>
                <p className="text-gray-600 leading-relaxed">
                  Pilotage technique du projet CELAVI Gestion, développement d'une plateforme
                  de gestion locative complète avec CodeIgniter, MySQL et intégration de
                  multiples modules métier.
                </p>
              </div>

              {/* Ajoutez d'autres expériences si nécessaire */}
            </div>
          </div>

          {/* Formation académique */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Award className="text-blue-600" size={32} />
              Formation académique
            </h2>
            <div className="space-y-6">
              {/* Master */}
              <div className="border-l-4 border-blue-600 pl-6 relative">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Master Professionnel en Informatique
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  École Nationale d'Informatique (ENI) | 2020 - 2022
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Équivalent diplôme d'ingénieur en informatique. Formation approfondie en
                  génie logiciel, architecture des systèmes, gestion de projets informatiques
                  et développement d'applications.
                </p>
              </div>

              {/* Licence */}
              <div className="border-l-4 border-green-600 pl-6 relative">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-green-600 rounded-full border-4 border-white"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Licence Professionnelle en Informatique
                </h3>
                <p className="text-green-600 font-medium mb-2">
                  École Nationale d'Informatique (ENI) | 2017 - 2020
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Formation en développement logiciel, bases de données, réseaux et
                  systèmes d'exploitation. Acquisition des fondamentaux du développement
                  web et mobile.
                </p>
              </div>

              {/* Baccalauréat */}
              <div className="border-l-4 border-purple-600 pl-6 relative">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full border-4 border-white"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Baccalauréat Série D (Sciences expérimentales)
                </h3>
                <p className="text-purple-600 font-medium mb-2">
                  Lycée Ambatofinandrahana | 2013 - 2016
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Formation scientifique avec spécialisation en mathématiques, physique,
                  chimie et sciences de la vie et de la terre.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Contact */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-3">Travaillons ensemble !</h2>
              <p className="text-lg text-blue-100">
                Je suis ouvert à de nouvelles opportunités professionnelles et à des collaborations
                sur des projets passionnants.
              </p>
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
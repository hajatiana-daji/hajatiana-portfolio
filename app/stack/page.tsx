import { Code, Database, Wrench, Layers, Target, Users, Briefcase, Lightbulb } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stack Technique",
  description: "Technologies et compétences maîtrisées : Langages (PHP, JavaScript, TypeScript, Dart, Python, Java), Frameworks (React, Next.js, Flutter, Laravel), Bases de données (MySQL, PostgreSQL), Architecture logicielle et gestion de projets Agile.",
  openGraph: {
    title: "Stack Technique | Hajatiana ANDRIANJAKA",
    description: "Compétences techniques complètes : développement web, mobile, architecture et gestion de projets.",
    url: 'https://hajatiana.vercel.app/stack',
  },
};

interface StackCategoryProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  color: 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'indigo' | 'teal' | 'amber';
}

function StackCategory({ title, icon, items, color }: StackCategoryProps) {
  const colorClasses = {
    blue: 'from-blue-50 to-blue-100 border-blue-300',
    green: 'from-green-50 to-green-100 border-green-300',
    purple: 'from-purple-50 to-purple-100 border-purple-300',
    orange: 'from-orange-50 to-orange-100 border-orange-300',
    pink: 'from-pink-50 to-pink-100 border-pink-300',
    indigo: 'from-indigo-50 to-indigo-100 border-indigo-300',
    teal: 'from-teal-50 to-teal-100 border-teal-300',
    amber: 'from-amber-50 to-amber-100 border-amber-300'
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="text-gray-700">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {items.map((item, i) => (
          <span key={i} className="bg-white text-gray-700 px-4 py-2 rounded-xl shadow-sm font-medium hover:shadow-md transition-shadow text-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="mb-8 mt-12 first:mt-0">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-gray-700">{icon}</div>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      </div>
      <p className="text-gray-600 text-lg ml-11">{subtitle}</p>
    </div>
  );
}

export default function StackPage() {
  const { stack } = portfolioData;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <Header />

      <main className="flex-grow px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header principal */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
              <Code size={32} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Compétences & Technologies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un aperçu complet de mes compétences techniques, mes outils et mon approche du développement
            </p>
          </div>

          {/* SECTION 1 : Technologies de Développement */}
          <SectionHeader 
            icon={<Code size={32} className="text-blue-600" />}
            title="Technologies de Développement"
            subtitle="Langages, frameworks et outils pour créer des applications modernes"
          />
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <StackCategory
              title="Langages"
              icon={<Code size={24} />}
              items={stack.languages}
              color="blue"
            />

            <StackCategory
              title="Frameworks & Librairies"
              icon={<Layers size={24} />}
              items={stack.technologies_frameworks}
              color="green"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <StackCategory
              title="Bases de données"
              icon={<Database size={24} />}
              items={stack.databases}
              color="purple"
            />

            <StackCategory
              title="Outils & DevOps"
              icon={<Wrench size={24} />}
              items={stack.outils}
              color="orange"
            />
          </div>

          {/* SECTION 2 : Architecture & Bonnes Pratiques */}
          <SectionHeader 
            icon={<Lightbulb size={32} className="text-purple-600" />}
            title="Architecture & Bonnes Pratiques"
            subtitle="Principes et méthodologies pour un code maintenable et évolutif"
          />
          
          <div className="grid md:grid-cols-1 gap-6">
            <StackCategory
              title="Architecture & Conception"
              icon={<Briefcase size={24} />}
              items={stack.architecture_conception}
              color="pink"
            />
          </div>

          {/* SECTION 3 : Gestion & Leadership */}
          <SectionHeader 
            icon={<Target size={32} className="text-indigo-600" />}
            title="Gestion & Leadership Technique"
            subtitle="Compétences en pilotage de projets et coordination d'équipes"
          />
          
          <div className="grid md:grid-cols-1 gap-6">
            <StackCategory
              title="Gestion & Pilotage Technique"
              icon={<Users size={24} />}
              items={stack.gestion_pilotage_technique}
              color="indigo"
            />
          </div>

          {/* Stats finales */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 text-center">
            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div>
                <p className="text-5xl font-bold mb-2">
                  {stack.languages.length}
                </p>
                <p className="text-blue-100 text-lg">Langages</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">
                  {stack.technologies_frameworks.length + stack.databases.length}
                </p>
                <p className="text-purple-100 text-lg">Technologies & DB</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">
                  {stack.architecture_conception.length + stack.gestion_pilotage_technique.length}
                </p>
                <p className="text-pink-100 text-lg">Compétences Métier</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
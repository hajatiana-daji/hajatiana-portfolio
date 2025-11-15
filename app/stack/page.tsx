import { Code, Database, Wrench, Layers, Users, Briefcase } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface StackCategoryProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  color: 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'indigo';
}

function StackCategory({ title, icon, items, color }: StackCategoryProps) {
  const colorClasses = {
    blue: 'from-blue-50 to-blue-100 border-blue-300',
    green: 'from-green-50 to-green-100 border-green-300',
    purple: 'from-purple-50 to-purple-100 border-purple-300',
    orange: 'from-orange-50 to-orange-100 border-orange-300',
    pink: 'from-pink-50 to-pink-100 border-pink-300',
    indigo: 'from-indigo-50 to-indigo-100 border-indigo-300'
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="text-gray-700">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {items.map((item, i) => (
          <span key={i} className="bg-white text-gray-700 px-4 py-2 rounded-xl shadow-sm font-medium hover:shadow-md transition-shadow">
            {item}
          </span>
        ))}
      </div>
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
          {/* Header de la page */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-4">
              <Code size={32} className="text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stack Technique
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies, outils et compétences que je maîtrise pour créer des solutions complètes
            </p>
          </div>

          {/* Grille des technologies */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Langages */}
            <StackCategory
              title="Langages"
              icon={<Code size={28} />}
              items={stack.languages}
              color="blue"
            />

            {/* Frameworks & Technologies */}
            <StackCategory
              title="Frameworks & Technologies"
              icon={<Layers size={28} />}
              items={stack.technologies_frameworks}
              color="green"
            />

            {/* Bases de données */}
            <StackCategory
              title="Bases de données"
              icon={<Database size={28} />}
              items={stack.databases}
              color="purple"
            />

            {/* Outils & DevOps */}
            <StackCategory
              title="Outils & DevOps"
              icon={<Wrench size={28} />}
              items={stack.outils}
              color="orange"
            />

            {/* Architecture & Conception */}
            <StackCategory
              title="Architecture & Conception"
              icon={<Briefcase size={28} />}
              items={stack.architecture_conception}
              color="pink"
            />

            {/* Gestion & Pilotage Technique */}
            <StackCategory
              title="Gestion & Pilotage Technique"
              icon={<Users size={28} />}
              items={stack.gestion_pilotage_technique}
              color="indigo"
            />
          </div>

          {/* Stats en bas */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 text-center">
            <p className="text-gray-600 text-lg mb-2">
              Au total, je maîtrise
            </p>
            <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {Object.values(stack).flat().length}+
            </p>
            <p className="text-gray-600 text-lg mt-2">
              technologies et compétences
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
import Link from 'next/link';
import { ArrowLeft, Code, Briefcase } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface StackCategoryProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  color: 'blue' | 'green' | 'purple' | 'orange' | 'pink';
}

function StackCategory({ title, icon, items, color }: StackCategoryProps) {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200',
    green: 'bg-green-50 border-green-200',
    purple: 'bg-purple-50 border-purple-200',
    orange: 'bg-orange-50 border-orange-200',
    pink: 'bg-pink-50 border-pink-200'
  };

  return (
    <div className={`${colorClasses[color]} border-2 rounded-xl p-6`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="text-gray-700">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span key={i} className="bg-white text-gray-700 px-3 py-2 rounded-lg shadow-sm font-medium">
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Langages */}
            <StackCategory
              title="Langages"
              icon={<Code size={24} />}
              items={stack.languages}
              color="blue"
            />

            {/* Frameworks & Technologies */}
            <StackCategory
              title="Frameworks & Technologies"
              icon={<Briefcase size={24} />}
              items={stack.technologies_frameworks}
              color="green"
            />

            {/* Bases de données */}
            <StackCategory
              title="Bases de données"
              icon={<Code size={24} />}
              items={stack.databases}
              color="purple"
            />

            {/* Outils & DevOps */}
            <StackCategory
              title="Outils & DevOps"
              icon={<Code size={24} />}
              items={stack.outils}
              color="orange"
            />

            {/* Architecture & Conception */}
            <StackCategory
              title="Architecture & Conception"
              icon={<Code size={24} />}
              items={stack.architecture_conception}
              color="pink"
            />

            {/* Gestion & Pilotage Technique */}
            <StackCategory
              title="Gestion & Pilotage Technique"
              icon={<Briefcase size={24} />}
              items={stack.gestion_pilotage_technique}
              color="blue"
            />

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

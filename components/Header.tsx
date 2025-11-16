'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, Code, User } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';

export default function Header() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/' && pathname === '/') return true;
        if (path !== '/' && pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <nav className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Section gauche : Photo + Nom */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image 
                            src={portfolioData.profile.photo}
                            alt={portfolioData.profile.name}
                            width={48}
                            height={48}
                            className="rounded-full object-cover border-2 border-gray-200 group-hover:border-blue-500 transition-all duration-300"
                        />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {portfolioData.profile.name}
                            </span>
                            <span className="text-sm text-gray-500 hidden md:block">{portfolioData.profile.title}</span>
                        </div>
                    </Link>

                    {/* Section droite : Navigation */}
                    <div className="flex items-center gap-1">
                        <Link
                            href="/"
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                                isActive('/') && pathname === '/'
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                        >
                            <Home size={20} />
                            <span className="hidden md:inline">Accueil</span>
                        </Link>

                        <Link
                            href="/projets"
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                                isActive('/projets')
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                        >
                            <Briefcase size={20} />
                            <span className="hidden md:inline">Projets</span>
                        </Link>

                        <Link
                            href="/stack"
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                                isActive('/stack')
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                        >
                            <Code size={20} />
                            <span className="hidden md:inline">Stack</span>
                        </Link>
                        <Link
                            href="/a-propos"
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                                isActive('/a-propos')
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                        >
                            <User size={20} />
                            <span className="hidden md:inline">À propos</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
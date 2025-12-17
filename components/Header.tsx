'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, Code, User, Download, Menu, X } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';
import { useState } from 'react';

export default function Header() {
    const pathname = usePathname();
    const [isGenerating, setIsGenerating] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path: string) => {
        if (path === '/' && pathname === '/') return true;
        if (path !== '/' && pathname.startsWith(path)) return true;
        return false;
    };

    const handleDownloadCV = async () => {
        setIsGenerating(true);
        try {
            const { generateCVPDF } = await import('@/utils/generateCVPDF');
            await generateCVPDF();
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors de la génération du CV. Veuillez réessayer.');
        } finally {
            setIsGenerating(false);
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 sm:gap-3 group" onClick={closeMobileMenu}>
                        <Image 
                            src={portfolioData.profile.photo}
                            alt={portfolioData.profile.name}
                            width={40}
                            height={40}
                            className="sm:w-12 sm:h-12 rounded-full object-cover border-2 border-gray-200 group-hover:border-blue-500 transition-all duration-300"
                        />
                        <div className="flex flex-col">
                            <span className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {portfolioData.profile.name}
                            </span>
                            <span className="text-xs sm:text-sm text-gray-500 hidden sm:block">
                                {portfolioData.profile.title}
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        <Link
                            href="/"
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                                isActive('/') && pathname === '/'
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                        >
                            <Home size={20} />
                            <span>Accueil</span>
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
                            <span>Projets</span>
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
                            <span>Stack</span>
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
                            <span>À propos</span>
                        </Link>

                        <button
                            onClick={handleDownloadCV}
                            disabled={isGenerating}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed ml-2"
                        >
                            <Download size={20} className={isGenerating ? 'animate-bounce' : ''} />
                            <span>{isGenerating ? 'Génération...' : 'CV'}</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden items-center gap-2">
                        <button
                            onClick={handleDownloadCV}
                            disabled={isGenerating}
                            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm font-medium"
                            title="Télécharger mon CV"
                        >
                            <Download size={16} className={isGenerating ? 'animate-bounce' : ''} />
                            <span>CV</span>
                        </button>
                        
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 hover:bg-gray-100"
                            aria-label="Menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-gray-200 py-4">
                        <div className="flex flex-col gap-2">
                            <Link
                                href="/"
                                onClick={closeMobileMenu}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                    isActive('/') && pathname === '/'
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                            >
                                <Home size={20} />
                                <span>Accueil</span>
                            </Link>

                            <Link
                                href="/projets"
                                onClick={closeMobileMenu}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                    isActive('/projets')
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                            >
                                <Briefcase size={20} />
                                <span>Projets</span>
                            </Link>

                            <Link
                                href="/stack"
                                onClick={closeMobileMenu}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                    isActive('/stack')
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                            >
                                <Code size={20} />
                                <span>Stack</span>
                            </Link>
                            
                            <Link
                                href="/a-propos"
                                onClick={closeMobileMenu}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                    isActive('/a-propos')
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                            >
                                <User size={20} />
                                <span>À propos</span>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
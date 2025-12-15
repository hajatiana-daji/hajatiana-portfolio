'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, Code, User, Menu, X, Download } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';
import { useState } from 'react';
import { generateCV } from '@/app/lib/generate-cv';

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);

    const isActive = (path: string) => {
        if (path === '/' && pathname === '/') return true;
        if (path !== '/' && pathname.startsWith(path)) return true;
        return false;
    };

    const navItems = [
        { href: '/', icon: Home, label: 'Accueil' },
        { href: '/projets', icon: Briefcase, label: 'Projets' },
        { href: '/stack', icon: Code, label: 'Stack' },
        { href: '/a-propos', icon: User, label: 'À propos' }
    ];

    const closeMenu = () => setIsMenuOpen(false);

    const handleDownloadCV = async () => {
        setIsGenerating(true);
        try {
            await generateCV(portfolioData);
        } catch (error) {
            console.error('Erreur génération CV:', error);
            alert('Erreur lors de la génération du CV');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo et Nom */}
                    <Link href="/" className="flex items-center gap-2 sm:gap-3 group" onClick={closeMenu}>
                        <Image 
                            src={portfolioData.profile.photo}
                            alt={portfolioData.profile.name}
                            width={40}
                            height={40}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-gray-200 group-hover:border-blue-500 transition-all duration-300"
                        />
                        <div className="flex flex-col">
                            <span className="text-base sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {portfolioData.profile.name}
                            </span>
                            <span className="text-xs sm:text-sm text-gray-500 hidden sm:block">
                                {portfolioData.profile.title}
                            </span>
                        </div>
                    </Link>

                    {/* Navigation Desktop */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map(({ href, icon: Icon, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                                    isActive(href)
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                            >
                                <Icon size={20} />
                                <span>{label}</span>
                            </Link>
                        ))}

                        {/* BOUTON CV DESKTOP */}
                        <button
                            onClick={handleDownloadCV}
                            disabled={isGenerating}
                            className="ml-2 flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isGenerating ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    <span className="hidden lg:inline">Génération...</span>
                                </>
                            ) : (
                                <>
                                    <Download size={20} />
                                    <span className="hidden lg:inline">Télécharger CV</span>
                                    <span className="lg:hidden">CV</span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* Bouton Menu Mobile */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Menu Mobile */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 py-4 space-y-1 animate-fade-in">
                        {navItems.map(({ href, icon: Icon, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={closeMenu}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                    isActive(href)
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                            >
                                <Icon size={22} />
                                <span className="text-base">{label}</span>
                            </Link>
                        ))}

                        {/* BOUTON CV MOBILE */}
                        <button
                            onClick={() => {
                                handleDownloadCV();
                                closeMenu();
                            }}
                            disabled={isGenerating}
                            className="flex items-center gap-3 px-4 py-3 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50"
                        >
                            {isGenerating ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    <span className="text-base">Génération...</span>
                                </>
                            ) : (
                                <>
                                    <Download size={22} />
                                    <span className="text-base">Télécharger mon CV</span>
                                </>
                            )}
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
}
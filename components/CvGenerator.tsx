'use client';

import { PortfolioData } from '@/data/portfolio-data';
import { useEffect, useRef } from 'react';

// Import dynamique des librairies PDF pour s'assurer qu'elles ne sont chargées que côté client
const importHtmlToImage = async () => {
    // Si vous utilisez html2pdf.js (méthode CDN, plus simple):
    // const html2pdf = (await import('html2pdf.js')).default;
    // return html2pdf;

    // Si vous utilisez jspdf + html2canvas (méthode npm) :
    const jspdf = (await import('jspdf')).default;
    const html2canvas = (await import('html2canvas')).default;
    return { jspdf, html2canvas };
};

interface CvGeneratorProps {
    data: PortfolioData;
    isGenerating: boolean;
    setIsGenerating: (value: boolean) => void;
}

export default function CvGenerator({ data, isGenerating, setIsGenerating }: CvGeneratorProps) {
    const cvRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isGenerating && cvRef.current) {
            generatePdf();
        }
    }, [isGenerating]);

    const generatePdf = async () => {
        try {
            const { jspdf, html2canvas } = await importHtmlToImage();

            if (!cvRef.current) {
                console.error("CV content reference is missing.");
                setIsGenerating(false);
                return;
            }

            // 1. Convertir le contenu HTML en Canvas
            const canvas = await html2canvas(cvRef.current, {
                scale: 2, // Améliore la résolution
                useCORS: true,
                allowTaint: true,
            });

            const imgData = canvas.toDataURL('image/png');
            
            // Dimensions du document PDF (A4)
            const pdfWidth = 210;
            const pdfHeight = 297;
            
            // Dimensions de l'image sur le PDF
            const imgWidth = pdfWidth;
            const imgHeight = canvas.height * imgWidth / canvas.width;

            const doc = new jspdf('p', 'mm', 'a4');
            let heightLeft = imgHeight;
            let position = 0;

            // 2. Ajouter l'image au PDF, en gérant le multi-page si nécessaire
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pdfHeight;
            }

            // 3. Téléchargement
            doc.save(`${data.profile.name.replace(/\s/g, '_')}_CV.pdf`);
            
        } catch (error) {
            console.error("Erreur lors de la génération du PDF:", error);
        } finally {
            setIsGenerating(false); // Réinitialiser l'état après le téléchargement
        }
    };

    // Style minimal pour le CV (ajustez le design dans un fichier CSS dédié pour un CV propre)
    const cvStyle: React.CSSProperties = {
        width: '210mm', // Correspond à la largeur A4
        padding: '10mm',
        backgroundColor: 'white',
        color: '#333',
        fontSize: '10pt',
        fontFamily: 'Arial, sans-serif',
    };

    return (
        // Le contenu du CV, masqué de la vue, mais nécessaire pour la conversion HTML -> PDF
        <div ref={cvRef} style={cvStyle} className="cv-template">
            {/* --- Contenu du CV --- */}
            
            {/* En-tête / Profil */}
            <h1 style={{ fontSize: '18pt', fontWeight: 'bold', marginBottom: '5px' }}>
                {data.profile.name}
            </h1>
            <p style={{ fontSize: '12pt', color: '#007bff', marginBottom: '10px' }}>
                {data.profile.title}
            </p>
            <p style={{ marginBottom: '15px' }}>
                Email: {data.profile.email} | Téléphone: {data.profile.phone.split(' | ')[0]} | LinkedIn: {data.profile.linkedin}
            </p>
            
            {/* Expériences */}
            <h2 style={{ fontSize: '14pt', fontWeight: 'bold', borderBottom: '2px solid #007bff', paddingBottom: '5px', marginTop: '20px', marginBottom: '10px' }}>
                Expériences Professionnelles
            </h2>
            {data.experiences.map((exp, index) => (
                <div key={index} style={{ marginBottom: '15px' }}>
                    <p style={{ fontWeight: 'bold' }}>
                        {exp.title} | {exp.company} ({exp.date})
                    </p>
                    <p style={{ fontStyle: 'italic', marginBottom: '5px' }}>
                        {exp.description}
                    </p>
                    <p style={{ fontSize: '8pt', color: '#666' }}>
                        Compétences clés: {exp.skills.join(', ')}
                    </p>
                </div>
            ))}

            {/* Stack Technique */}
            <h2 style={{ fontSize: '14pt', fontWeight: 'bold', borderBottom: '2px solid #007bff', paddingBottom: '5px', marginTop: '20px', marginBottom: '10px' }}>
                Compétences Techniques
            </h2>
            {Object.entries(data.stack).map(([key, values]) => (
                <div key={key} style={{ marginBottom: '10px' }}>
                    <p style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
                        {key.replace(/_/g, ' ')}:
                    </p>
                    <p>{values.join(' | ')}</p>
                </div>
            ))}
            
            {/* Projets Principaux */}
            <h2 style={{ fontSize: '14pt', fontWeight: 'bold', borderBottom: '2px solid #007bff', paddingBottom: '5px', marginTop: '20px', marginBottom: '10px' }}>
                Projets Clés ({data.projects.length} réalisés)
            </h2>
            {data.projects.slice(0, 3).map((project, index) => (
                <div key={index} style={{ marginBottom: '15px' }}>
                    <p style={{ fontWeight: 'bold' }}>
                        {project.title} - {project.role} ({project.date.split(' - ')[0]})
                    </p>
                    <p style={{ fontStyle: 'italic', marginBottom: '5px' }}>
                        {project.description}
                    </p>
                    <p style={{ fontSize: '8pt', color: '#666' }}>
                        Tech: {project.technologies.join(', ')}
                    </p>
                </div>
            ))}

            {/* Éducation */}
            <h2 style={{ fontSize: '14pt', fontWeight: 'bold', borderBottom: '2px solid #007bff', paddingBottom: '5px', marginTop: '20px', marginBottom: '10px' }}>
                Formation
            </h2>
            {data.education.map((edu, index) => (
                <div key={index} style={{ marginBottom: '15px' }}>
                    <p style={{ fontWeight: 'bold' }}>
                        {edu.degree} - {edu.school} ({edu.date.split(' - ')[1]})
                    </p>
                </div>
            ))}

            {/* --- Fin du Contenu du CV --- */}
        </div>
    );
}

// Remarque: La mise en page ci-dessus est très basique. Pour un CV de qualité professionnelle,
// il est FORTEMENT recommandé de créer un design CSS détaillé pour l'élément .cv-template
// afin de contrôler précisément le rendu HTML avant sa conversion en image/PDF.
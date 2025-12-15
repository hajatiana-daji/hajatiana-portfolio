import { PortfolioData } from '@/data/portfolio-data';

export async function generateCV(data: PortfolioData) {
  // Import dynamique de jsPDF
  const { default: jsPDF } = await import('jspdf');
  
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  let yPos = margin;

  // Couleurs
  const primaryColor: [number, number, number] = [37, 99, 235]; // blue-600
  const grayColor: [number, number, number] = [107, 114, 128]; // gray-500
  const darkColor: [number, number, number] = [31, 41, 55]; // gray-800

  // === FONCTION : Vérifier espace et ajouter page si nécessaire ===
  const checkPageBreak = (requiredSpace: number) => {
    if (yPos + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
      return true;
    }
    return false;
  };

  // === FONCTION : Ajouter un titre de section ===
  const addSectionTitle = (title: string) => {
    checkPageBreak(15);
    
    doc.setFillColor(...primaryColor);
    doc.rect(margin, yPos, pageWidth - 2 * margin, 8, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(title, margin + 2, yPos + 5.5);
    
    yPos += 12;
    doc.setTextColor(...darkColor);
  };

  // ==============================
  // EN-TÊTE
  // ==============================
  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, pageWidth, 50, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text(data.profile.name, margin, 18);
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  const titleLines = doc.splitTextToSize(data.profile.title, pageWidth - 2 * margin);
  doc.text(titleLines, margin, 26);
  
  // Contact
  doc.setFontSize(9);
  const contactY = 26 + (titleLines.length * 5);
  doc.text(`📧 ${data.profile.email}`, margin, contactY + 6);
  doc.text(`📱 ${data.profile.phone}`, margin, contactY + 10);
  
  if (data.profile.linkedin) {
    doc.text(`💼 ${data.profile.linkedin}`, margin, contactY + 14);
  }
  if (data.profile.github) {
    doc.text(`🔗 ${data.profile.github}`, pageWidth - margin - 60, contactY + 14);
  }

  yPos = 62;

  // ==============================
  // PROFIL / PRÉSENTATION
  // ==============================
  addSectionTitle('PROFIL');
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const descLines = doc.splitTextToSize(data.profile.description, pageWidth - 2 * margin);
  doc.text(descLines, margin, yPos);
  yPos += descLines.length * 5 + 8;

  // ==============================
  // EXPÉRIENCES PROFESSIONNELLES
  // ==============================
  addSectionTitle('EXPÉRIENCES PROFESSIONNELLES');

  data.experiences.forEach((exp) => {
    checkPageBreak(25);
    
    // Titre du poste
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...darkColor);
    doc.text(exp.title, margin, yPos);
    
    // Entreprise et dates
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...grayColor);
    doc.text(`${exp.company} | ${exp.date}`, margin, yPos + 5);
    
    // Description
    doc.setFontSize(9);
    doc.setTextColor(...darkColor);
    const expDescLines = doc.splitTextToSize(exp.description, pageWidth - 2 * margin);
    doc.text(expDescLines, margin, yPos + 10);
    
    let currentY = yPos + 10 + (expDescLines.length * 4);
    
    // Compétences clés
    if (exp.skills && exp.skills.length > 0) {
      doc.setFontSize(8);
      doc.setTextColor(...grayColor);
      doc.setFont('helvetica', 'italic');
      const skillsText = `Compétences: ${exp.skills.slice(0, 6).join(', ')}`;
      const skillLines = doc.splitTextToSize(skillsText, pageWidth - 2 * margin);
      doc.text(skillLines, margin, currentY + 3);
      currentY += skillLines.length * 3.5;
    }
    
    yPos = currentY + 6;
  });

  // ==============================
  // FORMATION
  // ==============================
  addSectionTitle('FORMATION');

  data.education.forEach((edu) => {
    checkPageBreak(18);
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...darkColor);
    doc.text(edu.degree, margin, yPos);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...grayColor);
    doc.text(`${edu.school} | ${edu.date}`, margin, yPos + 5);
    
    if (edu.description) {
      doc.setFontSize(9);
      doc.setTextColor(...darkColor);
      const eduDescLines = doc.splitTextToSize(edu.description, pageWidth - 2 * margin);
      doc.text(eduDescLines, margin, yPos + 9);
      yPos += 9 + (eduDescLines.length * 4) + 5;
    } else {
      yPos += 12;
    }
  });

  // ==============================
  // COMPÉTENCES TECHNIQUES
  // ==============================
  addSectionTitle('COMPÉTENCES TECHNIQUES');

  doc.setFontSize(10);
  doc.setTextColor(...darkColor);

  // Langages
  if (data.stack.languages && data.stack.languages.length > 0) {
    doc.setFont('helvetica', 'bold');
    doc.text('Langages:', margin, yPos);
    doc.setFont('helvetica', 'normal');
    const langText = data.stack.languages.join(', ');
    const langLines = doc.splitTextToSize(langText, pageWidth - 2 * margin - 30);
    doc.text(langLines, margin + 30, yPos);
    yPos += langLines.length * 5 + 3;
  }

  // Frameworks & Technologies
  if (data.stack.technologies_frameworks && data.stack.technologies_frameworks.length > 0) {
    doc.setFont('helvetica', 'bold');
    doc.text('Frameworks:', margin, yPos);
    doc.setFont('helvetica', 'normal');
    const fwText = data.stack.technologies_frameworks.join(', ');
    const fwLines = doc.splitTextToSize(fwText, pageWidth - 2 * margin - 30);
    doc.text(fwLines, margin + 30, yPos);
    yPos += fwLines.length * 5 + 3;
  }

  // Bases de données
  if (data.stack.databases && data.stack.databases.length > 0) {
    doc.setFont('helvetica', 'bold');
    doc.text('Bases de données:', margin, yPos);
    doc.setFont('helvetica', 'normal');
    const dbText = data.stack.databases.join(', ');
    const dbLines = doc.splitTextToSize(dbText, pageWidth - 2 * margin - 40);
    doc.text(dbLines, margin + 40, yPos);
    yPos += dbLines.length * 5 + 3;
  }

  // Outils
  if (data.stack.outils && data.stack.outils.length > 0) {
    doc.setFont('helvetica', 'bold');
    doc.text('Outils:', margin, yPos);
    doc.setFont('helvetica', 'normal');
    const outilsText = data.stack.outils.join(', ');
    const outilsLines = doc.splitTextToSize(outilsText, pageWidth - 2 * margin - 30);
    doc.text(outilsLines, margin + 30, yPos);
    yPos += outilsLines.length * 5 + 5;
  }

  // Architecture & Conception
  if (data.stack.architecture_conception && data.stack.architecture_conception.length > 0) {
    doc.setFont('helvetica', 'bold');
    doc.text('Architecture:', margin, yPos);
    doc.setFont('helvetica', 'normal');
    const archText = data.stack.architecture_conception.join(', ');
    const archLines = doc.splitTextToSize(archText, pageWidth - 2 * margin - 35);
    doc.text(archLines, margin + 35, yPos);
    yPos += archLines.length * 5 + 5;
  }

  // ==============================
  // PROJETS RÉCENTS (Top 3-4)
  // ==============================
  if (yPos < pageHeight - 60) {
    addSectionTitle('PROJETS RÉCENTS');

    data.projects.slice(0, 3).forEach((project) => {
      checkPageBreak(20);
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...darkColor);
      doc.text(`${project.title} (${project.type})`, margin, yPos);
      
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...grayColor);
      doc.text(project.date, margin, yPos + 4);
      
      doc.setTextColor(...darkColor);
      const projDescLines = doc.splitTextToSize(project.description, pageWidth - 2 * margin);
      doc.text(projDescLines, margin, yPos + 8);
      
      // Technologies
      doc.setFontSize(8);
      doc.setTextColor(...grayColor);
      doc.setFont('helvetica', 'italic');
      const techText = `Tech: ${project.technologies.slice(0, 5).join(', ')}`;
      doc.text(techText, margin, yPos + 8 + (projDescLines.length * 4) + 3);
      
      yPos += 8 + (projDescLines.length * 4) + 8;
    });
  }

  // ==============================
  // CENTRES D'INTÉRÊT (si présent)
  // ==============================
  if (data.divers && yPos < pageHeight - 40) {
    addSectionTitle(data.divers.title.toUpperCase());
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...darkColor);
    
    data.divers.items.forEach((item) => {
      checkPageBreak(10);
      
      const itemText = item.period 
        ? `• ${item.label}: ${item.description} (${item.period})`
        : `• ${item.label}: ${item.description}`;
      
      const itemLines = doc.splitTextToSize(itemText, pageWidth - 2 * margin);
      doc.text(itemLines, margin, yPos);
      yPos += itemLines.length * 4 + 2;
    });
  }

  // ==============================
  // PIED DE PAGE
  // ==============================
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(...grayColor);
    doc.text(
      `CV ${data.profile.name} - Généré le ${new Date().toLocaleDateString('fr-FR')} - Page ${i}/${totalPages}`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    );
  }

  // ==============================
  // TÉLÉCHARGEMENT
  // ==============================
  const fileName = `CV_${data.profile.name.replace(/\s+/g, '_')}.pdf`;
  doc.save(fileName);
}
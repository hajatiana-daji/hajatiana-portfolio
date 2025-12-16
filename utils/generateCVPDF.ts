// utils/generateCVPDF.ts
import { portfolioData } from '@/data/portfolio-data';

export async function generateCVPDF() {
    const { default: jsPDF } = await import('jspdf');
    const html2canvas = (await import('html2canvas')).default;

    // ===== PDF CONSTANTS =====
    const PAGE_WIDTH = 210;
    const PAGE_HEIGHT = 297;

    const MARGIN_X = 15;
    const MARGIN_TOP = 25;
    const MARGIN_BOTTOM = 25;
    const HEADER_HEIGHT = 15;
    const FOOTER_HEIGHT = 15;

    const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2;
    const CONTENT_HEIGHT = PAGE_HEIGHT - MARGIN_TOP - MARGIN_BOTTOM - HEADER_HEIGHT - FOOTER_HEIGHT;

    // ===== TEMP CONTAINER =====
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.top = '0';
    container.style.width = '210mm';
    container.style.background = 'white';
    document.body.appendChild(container);

    container.innerHTML = generateCVHTML();

    try {
        await new Promise(resolve => setTimeout(resolve, 200));

        const canvas = await html2canvas(container, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff'
        });

        const pdf = new jsPDF('p', 'mm', 'a4');

        // ===== CANVAS PAGINATION (NO DUPLICATION) =====
        const pxPerMm = canvas.width / CONTENT_WIDTH;
        const pageHeightPx = CONTENT_HEIGHT * pxPerMm;

        const totalPages = Math.ceil(canvas.height / pageHeightPx);
        const imgWidth = CONTENT_WIDTH;

        for (let page = 0; page < totalPages; page++) {
            if (page > 0) pdf.addPage();

            // ===== HEADER & FOOTER (AVANT LE CONTENU) =====
            pdf.setFontSize(10);
            pdf.setTextColor(120);
            pdf.text(`CV Hajatiana : ${portfolioData.profile.portfolio} - ${portfolioData.profile.linkedin} - ${portfolioData.profile.github}`, PAGE_WIDTH / 2, 12, { align: 'center' });

            pdf.setFontSize(9);
            pdf.setTextColor(150);
            pdf.text(
                `Page ${page + 1} / ${totalPages}`,
                PAGE_WIDTH / 2,
                PAGE_HEIGHT - 10,
                { align: 'center' }
            );

            // ===== CONTENU DE LA PAGE =====
            const sourceY = page * pageHeightPx;
            const sliceHeight = Math.min(pageHeightPx, canvas.height - sourceY);

            const pageCanvas = document.createElement('canvas');
            pageCanvas.width = canvas.width;
            pageCanvas.height = sliceHeight;

            const ctx = pageCanvas.getContext('2d')!;
            ctx.drawImage(
                canvas,
                0,
                sourceY,
                canvas.width,
                sliceHeight,
                0,
                0,
                canvas.width,
                sliceHeight
            );

            const pageImgHeight = (sliceHeight * imgWidth) / canvas.width;

            pdf.addImage(
                pageCanvas.toDataURL('image/png'),
                'PNG',
                MARGIN_X,
                MARGIN_TOP,
                imgWidth,
                pageImgHeight
            );
        }

        pdf.save(`CV_${portfolioData.profile.name.replace(/\s+/g, '_')}.pdf`);
    } finally {
        document.body.removeChild(container);
    }
}

function generateCVHTML() {
    const data = portfolioData;

    return `
    <div style="font-family:'Segoe UI',Tahoma,sans-serif;padding:30px;color:#111827;line-height:1.6;">

        <!-- HEADER avec gradient -->
        <div style="background:linear-gradient(135deg,#2563eb,#1e40af);color:white;padding:35px 35px;border-radius:12px;text-align:center;margin-bottom:40px;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
            <h1 style="font-size:34px;margin:0;font-weight:700;letter-spacing:-0.5px;">${data.profile.name}</h1>
            <div style="font-size:19px;color:#bfdbfe;margin:10px 0 25px;font-weight:500;">${data.profile.title}</div>
            <div style="display:flex;justify-content:center;gap:25px;flex-wrap:wrap;font-size:14px;opacity:0.95;">
                <span style="display:flex;align-items:center;gap:6px;">✉️ ${data.profile.email}</span>
                <span style="display:flex;align-items:center;gap:6px;">📞 ${data.profile.phone}</span>
                <a href="${data.profile.linkedin}" style="color:white;text-decoration:none;border-bottom:1px solid rgba(255,255,255,0.4);padding-bottom:2px;">LinkedIn : ${data.profile.linkedin}</a>
                <a href="${data.profile.github}" style="color:white;text-decoration:none;border-bottom:1px solid rgba(255,255,255,0.4);padding-bottom:2px;">GitHub : "${data.profile.github}</a>
            </div>
        </div>

        <!-- PROFIL -->
        <section style="margin-bottom:35px;">
            <h2 style="border-bottom:3px solid #2563eb;padding-bottom:8px;color:#1e40af;font-size:22px;font-weight:700;margin-bottom:16px;">
                💼 Profil
            </h2>
            <p style="line-height:1.8;color:#374151;text-align:justify;font-size:15px;">${data.profile.description}</p>
        </section>

        <!-- EXPÉRIENCES PROFESSIONNELLES -->
        <section style="margin-bottom:35px;">
            <h2 style="border-bottom:3px solid #2563eb;padding-bottom:8px;color:#1e40af;font-size:22px;font-weight:700;margin-bottom:16px;">
                🏢 Expériences Professionnelles
            </h2>
            ${data.experiences.map(exp => `
                <div style="margin-bottom:24px;padding:18px;background:#f9fafb;border-left:4px solid #2563eb;border-radius:6px;">
                    <div style="display:flex;justify-content:space-between;margin-bottom:10px;">
                        <div>
                            <strong style="font-size:16px;color:#111827;">${exp.title}</strong>
                            <span style="color:#2563eb;font-weight:600;"> — ${exp.company}</span>
                        </div>
                        <div style="color:#6b7280;font-size:13px;white-space:nowrap;">${exp.date}</div>
                    </div>
                    <p style="margin:10px 0;color:#4b5563;font-size:14px;line-height:1.7;">${exp.description}</p>
                    <div style="display:flex;flex-wrap:wrap;gap:7px;margin-top:12px;">
                        ${exp.skills.map(s => `<span style="background:#dbeafe;color:#1e40af;padding:5px 12px;border-radius:5px;font-size:12px;font-weight:500;">${s}</span>`).join('')}
                    </div>
                </div>
            `).join('')}
        </section>

        <!-- PROJETS MARQUANTS -->
        <section style="margin-bottom:35px;">
            <h2 style="border-bottom:3px solid #2563eb;padding-bottom:8px;color:#1e40af;font-size:22px;font-weight:700;margin-bottom:16px;">
                🚀 Projets Marquants
            </h2>
            ${data.projects.slice(0, 3).map(proj => `
                <div style="margin-bottom:22px;padding:16px;background:#f0f9ff;border-left:4px solid #0ea5e9;border-radius:6px;">
                    <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                        <div>
                            <strong style="font-size:15px;color:#111827;">${proj.title}</strong>
                            <span style="color:#0ea5e9;font-weight:600;"> — ${proj.client}</span>
                        </div>
                        <div style="color:#6b7280;font-size:13px;white-space:nowrap;">${proj.date}</div>
                    </div>
                    <p style="margin:8px 0 12px;color:#4b5563;font-size:14px;line-height:1.7;">${proj.description}</p>
                    <div style="display:flex;flex-wrap:wrap;gap:6px;">
                        ${proj.technologies.slice(0, 6).map(tech => `<span style="background:white;border:1px solid #bae6fd;color:#0369a1;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:500;">${tech}</span>`).join('')}
                    </div>
                </div>
            `).join('')}
        </section>

        <!-- FORMATION -->
        <section style="margin-bottom:35px;">
            <h2 style="border-bottom:3px solid #2563eb;padding-bottom:8px;color:#1e40af;font-size:22px;font-weight:700;margin-bottom:16px;">
                🎓 Formation
            </h2>
            ${data.education.map(edu => `
                <div style="margin-bottom:20px;padding:16px;background:#fef3c7;border-left:4px solid #f59e0b;border-radius:6px;">
                    <strong style="font-size:15px;color:#111827;">${edu.degree}</strong>
                    <span style="color:#f59e0b;font-weight:600;"> — ${edu.school}</span><br/>
                    <span style="font-size:13px;color:#6b7280;margin-top:4px;display:inline-block;">${edu.date}</span>
                    <p style="margin:10px 0 0;color:#4b5563;font-size:14px;line-height:1.7;">${edu.description}</p>
                </div>
            `).join('')}
        </section>

        <!-- ARCHITECTURE & CONCEPTION -->
        <section style="margin-bottom:35px;">
            <h2 style="border-bottom:3px solid #2563eb;padding-bottom:8px;color:#1e40af;font-size:22px;font-weight:700;margin-bottom:16px;">
                🏗️ Architecture & Conception
            </h2>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
                ${data.stack.architecture_conception.map(val => `
                    <div style="display:flex;align-items:center;gap:8px;padding:10px;background:#f3f4f6;border-radius:6px;">
                        <span style="color:#2563eb;font-size:16px;">✓</span>
                        <span style="font-size:14px;color:#374151;">${val}</span>
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- PILOTAGE TECHNIQUE -->
        <section style="margin-bottom:35px;">
            <h2 style="border-bottom:3px solid #2563eb;padding-bottom:8px;color:#1e40af;font-size:22px;font-weight:700;margin-bottom:16px;">
                📊 Pilotage Technique & Gestion de Projet
            </h2>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
                ${data.stack.gestion_pilotage_technique.map(val => `
                    <div style="display:flex;align-items:center;gap:8px;padding:10px;background:#f3f4f6;border-radius:6px;">
                        <span style="color:#10b981;font-size:16px;">✓</span>
                        <span style="font-size:14px;color:#374151;">${val}</span>
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- COMPÉTENCES TECHNIQUES -->
        <section style="margin-bottom:35px;">
            <h2 style="border-bottom:3px solid #2563eb;padding-bottom:8px;color:#1e40af;font-size:22px;font-weight:700;margin-bottom:16px;">
                💻 Compétences Techniques
            </h2>
            <div style="background:#f9fafb;padding:20px;border-radius:8px;">
                <div style="margin-bottom:16px;">
                    <strong style="color:#1e40af;font-size:15px;">Langages :</strong>
                    <div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:8px;">
                        ${data.stack.languages.map(lang => `<span style="background:#dbeafe;color:#1e40af;padding:6px 14px;border-radius:6px;font-size:13px;font-weight:500;">${lang}</span>`).join('')}
                    </div>
                </div>
                <div style="margin-bottom:16px;">
                    <strong style="color:#1e40af;font-size:15px;">Frameworks & Technologies :</strong>
                    <div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:8px;">
                        ${data.stack.technologies_frameworks.map(tech => `<span style="background:#dbeafe;color:#1e40af;padding:6px 14px;border-radius:6px;font-size:13px;font-weight:500;">${tech}</span>`).join('')}
                    </div>
                </div>
                <div style="margin-bottom:16px;">
                    <strong style="color:#1e40af;font-size:15px;">Bases de données :</strong>
                    <div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:8px;">
                        ${data.stack.databases.map(db => `<span style="background:#dbeafe;color:#1e40af;padding:6px 14px;border-radius:6px;font-size:13px;font-weight:500;">${db}</span>`).join('')}
                    </div>
                </div>
                <div>
                    <strong style="color:#1e40af;font-size:15px;">Outils :</strong>
                    <div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:8px;">
                        ${data.stack.outils.map(outil => `<span style="background:#dbeafe;color:#1e40af;padding:6px 14px;border-radius:6px;font-size:13px;font-weight:500;">${outil}</span>`).join('')}
                    </div>
                </div>
            </div>
        </section>

        <!-- LANGUES -->
        <section style="margin-bottom:35px;">
            <h2 style="border-bottom:3px solid #2563eb;padding-bottom:8px;color:#1e40af;font-size:22px;font-weight:700;margin-bottom:16px;">
                🌍 Langues
            </h2>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
                ${data.langues.map(lang => `
                    <div style="text-align:center;padding:16px;background:#f0fdf4;border:2px solid #86efac;border-radius:8px;">
                        <strong style="color:#16a34a;font-size:16px;display:block;margin-bottom:6px;">${lang.langue}</strong>
                        <span style="font-size:13px;color:#4b5563;">${lang.niveau}</span>
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- DIVERS -->
        <section style="margin-bottom:20px;">
            <h2 style="border-bottom:3px solid #2563eb;padding-bottom:8px;color:#1e40af;font-size:22px;font-weight:700;margin-bottom:16px;">
                ⭐ ${data.divers.title}
            </h2>
            <div style="background:#fef3c7;padding:20px;border-radius:8px;border-left:4px solid #f59e0b;">
                ${data.divers.items.map(item => `
                    <div style="margin-bottom:14px;">
                        <strong style="color:#92400e;font-size:15px;">${item.label} :</strong>
                        <span style="color:#4b5563;font-size:14px;"> ${item.description}</span>
                        ${item.period ? `<span style="color:#6b7280;font-size:13px;font-style:italic;"> (${item.period})</span>` : ''}
                    </div>
                `).join('')}
            </div>
        </section>

    </div>`;
}
// utils/generateCVPDF.ts
import { portfolioData } from '@/data/portfolio-data';

export async function generateCVPDF() {
    const { default: jsPDF } = await import('jspdf');
    const html2canvas = (await import('html2canvas')).default;

    // ===== PDF CONSTANTS =====
    const PAGE_WIDTH = 210;
    const PAGE_HEIGHT = 297;

    const MARGIN_X = 15;
    const MARGIN_TOP = 20;
    const MARGIN_BOTTOM = 20;

    const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2;
    const CONTENT_HEIGHT = PAGE_HEIGHT - MARGIN_TOP - MARGIN_BOTTOM;

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

        // ===== HEADER & FOOTER =====
        const pageCount = pdf.getNumberOfPages();

        for (let i = 1; i <= pageCount; i++) {
            pdf.setPage(i);

            // Header
            pdf.setFontSize(10);
            pdf.setTextColor(120);
            pdf.text('CV Hajatiana', PAGE_WIDTH / 2, 10, { align: 'center' });

            // Footer
            pdf.setFontSize(9);
            pdf.setTextColor(150);
            pdf.text(
                `Page ${i} / ${pageCount}`,
                PAGE_WIDTH / 2,
                PAGE_HEIGHT - 7,
                { align: 'center' }
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
    <div style="font-family:'Segoe UI',Tahoma,sans-serif;padding:30px;color:#111827;">

        <div style="background:linear-gradient(135deg,#2563eb,#1e40af);color:white;padding:40px;border-radius:10px;text-align:center;margin-bottom:35px;">
            <h1 style="font-size:36px;margin:0;">${data.profile.name}</h1>
            <div style="font-size:18px;color:#bfdbfe;margin:8px 0 20px;">${data.profile.title}</div>
            <div style="display:flex;justify-content:center;gap:22px;flex-wrap:wrap;font-size:14px;">
                <span>✉️ ${data.profile.email}</span>
                <span>📞 ${data.profile.phone}</span>
                <a href="${data.profile.linkedin}" target="_blank" style="color:white;text-decoration:underline;">🔗 LinkedIn</a>
                <a href="${data.profile.github}" target="_blank" style="color:white;text-decoration:underline;">💻 GitHub</a>
            </div>
        </div>

        <section style="margin-bottom:32px;">
            <h2 style="border-bottom:3px solid #2563eb;padding-bottom:6px;color:#1e40af;">Profil</h2>
            <p style="line-height:1.8;color:#374151;text-align:justify;">${data.profile.description}</p>
        </section>

        <section style="margin-bottom:32px;">
            <h2 style="border-bottom:3px solid #2563eb;padding-bottom:6px;color:#1e40af;">Expériences Professionnelles</h2>
            ${data.experiences.map(exp => `
                <div style="margin-bottom:20px;">
                    <div style="display:flex;justify-content:space-between;">
                        <div>
                            <strong>${exp.title}</strong><br/>
                            <span style="color:#2563eb;">${exp.company}</span>
                        </div>
                        <div style="color:#6b7280;font-size:13px;">${exp.date}</div>
                    </div>
                    <p style="margin:8px 0;color:#374151;">${exp.description}</p>
                    <div style="display:flex;flex-wrap:wrap;gap:6px;">
                        ${exp.skills.map(s => `<span style="background:#f3f4f6;padding:4px 10px;border-radius:4px;font-size:11px;">${s}</span>`).join('')}
                    </div>
                </div>
            `).join('')}
        </section>

        <section style="margin-bottom:32px;">
            <h2 style="border-bottom:3px solid #2563eb;padding-bottom:6px;color:#1e40af;">Formation</h2>
            ${data.education.map(edu => `
                <div style="margin-bottom:18px;">
                    <strong>${edu.degree}</strong> — <span style="color:#2563eb;">${edu.school}</span><br/>
                    <span style="font-size:13px;color:#6b7280;">${edu.date}</span>
                    <p style="margin-top:6px;color:#374151;">${edu.description}</p>
                </div>
            `).join('')}
        </section>

        <section>
            <h2 style="border-bottom:3px solid #2563eb;padding-bottom:6px;color:#1e40af;">Compétences</h2>
            <p><strong>Langages :</strong> ${data.stack.languages.join(', ')}</p>
            <p><strong>Frameworks :</strong> ${data.stack.technologies_frameworks.join(', ')}</p>
            <p><strong>Bases de données :</strong> ${data.stack.databases.join(', ')}</p>
            <p><strong>Outils :</strong> ${data.stack.outils.join(', ')}</p>
        </section>

    </div>`;
}

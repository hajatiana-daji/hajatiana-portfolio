import { portfolioData } from '@/data/portfolio-data';

export default function CvDocument() {
  const formatDate = () =>
    new Date().toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>CV - {portfolioData.profile.name}</title>

        <style>{`
          @page {
            size: A4;
            margin: 1cm;
          }

          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #fff;
          }

          h1, h2, h3 {
            margin: 0;
          }
        `}</style>
      </head>

      <body>
        <div style={{ maxWidth: '210mm', margin: '0 auto' }}>
          {/* HEADER */}
          <header style={{ textAlign: 'center', borderBottom: '3px solid #2563eb', paddingBottom: 16, marginBottom: 24 }}>
            <h1 style={{ fontSize: 28, color: '#1e3a8a' }}>
              {portfolioData.profile.name}
            </h1>
            <div style={{ fontWeight: 600, color: '#4b5563', marginBottom: 12 }}>
              {portfolioData.profile.title}
            </div>
            <div style={{ fontSize: 10, color: '#4b5563' }}>
              {portfolioData.profile.email} · {portfolioData.profile.phone}
            </div>
          </header>

          {/* PROFIL */}
          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 16, color: '#1e3a8a', borderBottom: '2px solid #60a5fa', marginBottom: 8 }}>
              Profil Professionnel
            </h2>
            <p style={{ fontSize: 11 }}>{portfolioData.profile.description}</p>
          </section>

          {/* EXPÉRIENCES */}
          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 16, color: '#1e3a8a', borderBottom: '2px solid #60a5fa', marginBottom: 8 }}>
              Expériences Professionnelles
            </h2>

            {portfolioData.experiences.map((exp, i) => (
              <div key={i} style={{ marginBottom: 12, paddingLeft: 12, borderLeft: '3px solid #2563eb' }}>
                <strong>{exp.title}</strong><br />
                <span style={{ color: '#2563eb', fontSize: 10 }}>{exp.company}</span><br />
                <em style={{ fontSize: 10 }}>{exp.date}</em>
                <p style={{ fontSize: 10 }}>{exp.description}</p>
              </div>
            ))}
          </section>

          {/* FOOTER */}
          <footer style={{ textAlign: 'center', fontSize: 9, color: '#6b7280', borderTop: '1px solid #e5e7eb', paddingTop: 8 }}>
            CV généré le {formatDate()}
          </footer>
        </div>
      </body>
    </html>
  );
}

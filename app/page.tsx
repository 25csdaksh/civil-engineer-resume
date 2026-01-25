export default function Home() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Er. Rakeshbhai Soni | Civil Engineer</title>
        <meta name="description" content="Professional Civil Engineer with 27+ years of experience in construction, project management, and quality-focused engineering solutions." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --bg-color: #ffffff;
            --bg-secondary: #f8fafc;
            --text-color: #1e293b;
            --text-muted: #64748b;
            --primary: #2563eb;
            --primary-light: rgba(37, 99, 235, 0.1);
            --border-color: #e2e8f0;
            --card-bg: #ffffff;
            --card-hover: #f1f5f9;
            --progress-bg: #e2e8f0;
          }

          [data-theme="dark"] {
            --bg-color: #0f172a;
            --bg-secondary: #1e293b;
            --text-color: #f1f5f9;
            --text-muted: #94a3b8;
            --primary: #3b82f6;
            --primary-light: rgba(59, 130, 246, 0.15);
            --border-color: #334155;
            --card-bg: #1e293b;
            --card-hover: #334155;
            --progress-bg: #334155;
          }

          * { margin: 0; padding: 0; box-sizing: border-box; }
          html { scroll-behavior: smooth; }

          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: var(--bg-color);
            border-bottom: 1px solid var(--border-color);
            z-index: 1000;
            transition: background-color 0.3s ease, border-color 0.3s ease;
          }

          .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .nav-logo {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--text-color);
            text-decoration: none;
          }

          .nav-logo span { color: var(--primary); }

          .nav-links {
            display: flex;
            gap: 2rem;
            align-items: center;
          }

          .nav-links a {
            color: var(--text-muted);
            text-decoration: none;
            font-size: 0.875rem;
            font-weight: 500;
            transition: color 0.2s ease;
          }

          .nav-links a:hover { color: var(--primary); }

          .nav-right {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .theme-toggle {
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }

          .theme-toggle:hover { background: var(--card-hover); }
          .theme-toggle svg { width: 20px; height: 20px; stroke: var(--text-color); fill: none; transition: stroke 0.3s ease; }
          .sun-icon { display: none; }
          [data-theme="dark"] .sun-icon { display: block; }
          [data-theme="dark"] .moon-icon { display: none; }

          .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.5rem;
          }

          .mobile-menu-btn svg { width: 24px; height: 24px; stroke: var(--text-color); }

          .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 500;
            font-size: 0.875rem;
            text-decoration: none;
            transition: all 0.2s ease;
            cursor: pointer;
            border: none;
          }

          .btn-primary { background: var(--primary); color: white; }
          .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
          .btn-outline { background: transparent; color: var(--text-color); border: 1px solid var(--border-color); }
          .btn-outline:hover { background: var(--bg-secondary); }

          section { padding: 5rem 1.5rem; }
          .section-bg { background: var(--bg-secondary); }
          .container { max-width: 1200px; margin: 0 auto; }

          .section-header { text-align: center; margin-bottom: 3rem; }
          .section-label { color: var(--primary); font-weight: 500; text-transform: uppercase; font-size: 0.875rem; letter-spacing: 0.05em; margin-bottom: 0.5rem; }
          .section-title { font-size: 2rem; font-weight: 700; margin-bottom: 1rem; }
          .section-desc { color: var(--text-muted); max-width: 600px; margin: 0 auto; }

          .hero { min-height: 100vh; display: flex; align-items: center; padding-top: 80px; }
          .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
          .hero-label { color: var(--primary); font-weight: 500; text-transform: uppercase; font-size: 0.875rem; letter-spacing: 0.05em; }
          .hero-title { font-size: 3rem; font-weight: 700; line-height: 1.1; margin: 0.5rem 0 1.5rem; }
          .hero-desc { color: var(--text-muted); font-size: 1.125rem; margin-bottom: 1.5rem; }
          .hero-contact { display: flex; gap: 1.5rem; color: var(--text-muted); font-size: 0.875rem; margin-bottom: 2rem; }
          .hero-contact-item { display: flex; align-items: center; gap: 0.5rem; }
          .hero-contact-item svg { width: 16px; height: 16px; stroke: var(--primary); }
          .hero-buttons { display: flex; gap: 1rem; flex-wrap: wrap; }
          .hero-image { display: flex; justify-content: center; }

          .profile-card {
            width: 320px;
            height: 320px;
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            transition: background-color 0.3s ease, border-color 0.3s ease;
          }

          .profile-avatar {
            width: 128px;
            height: 128px;
            background: var(--primary-light);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
          }

          .profile-avatar span { font-size: 3rem; font-weight: 700; color: var(--primary); }
          .profile-text { color: var(--text-muted); font-size: 0.875rem; }

          .stats {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            margin-top: 4rem;
            padding-top: 4rem;
            border-top: 1px solid var(--border-color);
          }

          .stat { text-align: center; }
          .stat-value { font-size: 2.5rem; font-weight: 700; color: var(--primary); }
          .stat-label { font-size: 0.875rem; color: var(--text-muted); margin-top: 0.25rem; }

          .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
          .about-text p { color: var(--text-muted); margin-bottom: 1rem; }
          .about-interest { margin-top: 1.5rem; }
          .about-interest span:first-child { color: var(--primary); font-weight: 600; }

          .feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

          .feature-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 0.75rem;
            padding: 1.5rem;
            transition: border-color 0.2s ease, background-color 0.3s ease;
          }

          .feature-card:hover { border-color: var(--primary); }

          .feature-icon {
            width: 40px;
            height: 40px;
            background: var(--primary-light);
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
          }

          .feature-icon svg { width: 20px; height: 20px; stroke: var(--primary); }
          .feature-card h3 { font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; }
          .feature-card p { font-size: 0.875rem; color: var(--text-muted); }

          .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }

          .skills-section h3 {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
          }

          .skills-section h3::before {
            content: '';
            width: 32px;
            height: 4px;
            background: var(--primary);
            border-radius: 2px;
          }

          .skill-item {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 0.5rem;
            padding: 1rem;
            margin-bottom: 1rem;
            transition: background-color 0.3s ease, border-color 0.3s ease;
          }

          .skill-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; }
          .skill-name { display: flex; align-items: center; gap: 0.75rem; font-weight: 500; }
          .skill-name svg { width: 18px; height: 18px; stroke: var(--primary); }
          .skill-level { font-size: 0.875rem; color: var(--text-muted); }
          .skill-bar { height: 8px; background: var(--progress-bg); border-radius: 4px; overflow: hidden; }
          .skill-progress { height: 100%; background: var(--primary); border-radius: 4px; transition: width 0.5s ease; }

          .soft-skill {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 0.5rem;
            padding: 1.5rem;
            margin-bottom: 1rem;
            display: flex;
            gap: 1rem;
            transition: border-color 0.2s ease, background-color 0.3s ease;
          }

          .soft-skill:hover { border-color: var(--primary); }

          .soft-skill-icon {
            width: 48px;
            height: 48px;
            background: var(--primary-light);
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .soft-skill-icon svg { width: 24px; height: 24px; stroke: var(--primary); }
          .soft-skill h4 { font-weight: 600; margin-bottom: 0.25rem; }
          .soft-skill p { font-size: 0.875rem; color: var(--text-muted); }

          .tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.5rem; }
          .tag { padding: 0.375rem 0.75rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 9999px; font-size: 0.875rem; transition: background-color 0.3s ease, border-color 0.3s ease; }

          .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }

          .project-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 0.75rem;
            padding: 1.5rem;
            transition: border-color 0.2s ease, background-color 0.3s ease;
          }

          .project-card:hover { border-color: var(--primary); }
          .project-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; }

          .project-icon {
            width: 48px;
            height: 48px;
            background: var(--primary-light);
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .project-icon svg { width: 24px; height: 24px; stroke: var(--primary); }
          .project-badge { padding: 0.25rem 0.75rem; background: var(--bg-secondary); border-radius: 9999px; font-size: 0.75rem; color: var(--text-muted); }
          .project-card h3 { font-size: 1.125rem; font-weight: 600; margin-bottom: 1rem; }
          .project-meta { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem; }
          .project-meta-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--text-muted); }
          .project-meta-item svg { width: 16px; height: 16px; stroke: var(--primary); }
          .project-desc { font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1rem; }
          .project-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
          .project-tag { padding: 0.25rem 0.5rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 0.25rem; font-size: 0.75rem; transition: background-color 0.3s ease, border-color 0.3s ease; }
          .projects-footer { text-align: center; margin-top: 2rem; color: var(--text-muted); display: flex; align-items: center; justify-content: center; gap: 0.5rem; }
          .projects-footer svg { width: 16px; height: 16px; stroke: var(--primary); }

          .education-card { max-width: 800px; margin: 0 auto; position: relative; padding-left: 2rem; }
          .education-line { position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--primary-light); }

          .education-dot {
            position: absolute;
            left: -10px;
            top: 0;
            width: 24px;
            height: 24px;
            background: var(--primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .education-dot svg { width: 12px; height: 12px; stroke: white; }

          .education-content {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 0.75rem;
            padding: 2rem;
            transition: background-color 0.3s ease, border-color 0.3s ease;
          }

          .education-header { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; }
          .education-title { font-size: 1.5rem; font-weight: 700; }
          .education-field { color: var(--primary); font-weight: 500; margin-top: 0.25rem; }
          .education-cgpa { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: var(--primary-light); border-radius: 0.5rem; font-weight: 700; }
          .education-cgpa svg { width: 20px; height: 20px; stroke: var(--primary); }
          .education-details { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
          .education-detail { display: flex; align-items: center; gap: 0.75rem; }
          .education-detail svg { width: 20px; height: 20px; stroke: var(--primary); }
          .education-detail-label { font-size: 0.875rem; color: var(--text-muted); }
          .education-detail-value { font-weight: 500; }
          .coursework { padding-top: 1.5rem; border-top: 1px solid var(--border-color); }
          .coursework h4 { font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1rem; }

          .certs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
          .cert-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

          .cert-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 0.75rem;
            padding: 1.25rem;
            transition: border-color 0.2s ease, background-color 0.3s ease;
          }

          .cert-card:hover { border-color: var(--primary); }

          .cert-icon {
            width: 36px;
            height: 36px;
            background: var(--primary-light);
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
          }

          .cert-icon svg { width: 18px; height: 18px; stroke: var(--primary); }
          .cert-category { font-size: 0.75rem; color: var(--primary); text-transform: uppercase; font-weight: 500; letter-spacing: 0.05em; }
          .cert-card h4 { font-size: 0.875rem; font-weight: 600; margin: 0.25rem 0 0.5rem; }
          .cert-card p { font-size: 0.75rem; color: var(--text-muted); }

          .achievements-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            transition: background-color 0.3s ease, border-color 0.3s ease;
          }

          .achievement-item { display: flex; gap: 1rem; margin-bottom: 1rem; }
          .achievement-item:last-child { margin-bottom: 0; }
          .achievement-num { width: 32px; height: 32px; background: var(--primary-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--primary); font-size: 0.875rem; flex-shrink: 0; }
          .achievement-text { padding-top: 0.25rem; }

          .quote-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 0.75rem;
            padding: 1.5rem;
            transition: background-color 0.3s ease, border-color 0.3s ease;
          }

          .quote-text { font-style: italic; color: var(--text-muted); margin-bottom: 1rem; }
          .quote-author { display: flex; align-items: center; gap: 0.75rem; }
          .quote-avatar { width: 40px; height: 40px; background: var(--primary-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--primary); }
          .quote-name { font-weight: 500; font-size: 0.875rem; }
          .quote-role { font-size: 0.75rem; color: var(--text-muted); }

          .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
          .contact-cards { display: flex; flex-direction: column; gap: 1rem; }

          .contact-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 0.75rem;
            padding: 1rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            transition: border-color 0.2s ease, background-color 0.3s ease;
            text-decoration: none;
            color: inherit;
          }

          .contact-card:hover { border-color: var(--primary); }

          .contact-icon {
            width: 48px;
            height: 48px;
            background: var(--primary-light);
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .contact-icon svg { width: 20px; height: 20px; stroke: var(--primary); }
          .contact-label { font-size: 0.875rem; color: var(--text-muted); }
          .contact-value { font-weight: 500; }

          .resume-card {
            background: var(--primary-light);
            border: 1px solid var(--primary);
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-top: 1rem;
          }

          .resume-card h3 { font-weight: 600; margin-bottom: 0.5rem; }
          .resume-card p { font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1rem; }

          .form-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 0.75rem;
            padding: 1.5rem;
            transition: background-color 0.3s ease, border-color 0.3s ease;
          }

          .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
          .form-group { margin-bottom: 1rem; }
          .form-group label { display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem; }

          .form-group input,
          .form-group textarea {
            width: 100%;
            padding: 0.75rem 1rem;
            background: var(--bg-color);
            border: 1px solid var(--border-color);
            border-radius: 0.5rem;
            font-family: inherit;
            font-size: 0.875rem;
            color: var(--text-color);
            transition: border-color 0.2s ease, background-color 0.3s ease;
          }

          .form-group input:focus,
          .form-group textarea:focus { outline: none; border-color: var(--primary); }
          .form-group textarea { resize: vertical; min-height: 120px; }

          footer {
            background: var(--bg-secondary);
            border-top: 1px solid var(--border-color);
            padding: 3rem 1.5rem 1.5rem;
            transition: background-color 0.3s ease, border-color 0.3s ease;
          }

          .footer-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; margin-bottom: 2rem; }
          .footer-brand h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; }
          .footer-brand h3 span { color: var(--primary); }
          .footer-brand p { color: var(--text-muted); font-size: 0.875rem; }
          .footer-section h4 { font-weight: 600; margin-bottom: 1rem; }
          .footer-links { display: flex; flex-direction: column; gap: 0.5rem; }
          .footer-links a { color: var(--text-muted); text-decoration: none; font-size: 0.875rem; transition: color 0.2s ease; }
          .footer-links a:hover { color: var(--primary); }
          .footer-bottom { max-width: 1200px; margin: 0 auto; padding-top: 1.5rem; border-top: 1px solid var(--border-color); text-align: center; color: var(--text-muted); font-size: 0.875rem; }

          @media (max-width: 1024px) {
            .projects-grid { grid-template-columns: repeat(2, 1fr); }
          }

          @media (max-width: 768px) {
            .nav-links { display: none; }
            .mobile-menu-btn { display: block; }
            .hero-grid, .about-grid, .skills-grid, .certs-grid, .contact-grid { grid-template-columns: 1fr; }
            .hero-title { font-size: 2rem; }
            .hero-contact { flex-direction: column; gap: 0.5rem; }
            .hero-image { order: -1; }
            .profile-card { width: 200px; height: 200px; }
            .profile-avatar { width: 80px; height: 80px; }
            .profile-avatar span { font-size: 2rem; }
            .stats { grid-template-columns: repeat(2, 1fr); }
            .feature-grid, .cert-cards { grid-template-columns: 1fr; }
            .projects-grid { grid-template-columns: 1fr; }
            .education-details { grid-template-columns: 1fr; }
            .form-row { grid-template-columns: 1fr; }
            .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
          }
        ` }} />
      </head>
      <body>
        <nav className="navbar">
          <div className="nav-container">
            <a href="#" className="nav-logo">Er. <span>RS</span></a>
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="nav-right">
              <button className="theme-toggle" id="themeToggle" aria-label="Toggle theme">
                <svg className="moon-icon" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                <svg className="sun-icon" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              </button>
              <button className="mobile-menu-btn" aria-label="Menu">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div>
                <p className="hero-label">Civil Engineer</p>
                <h1 className="hero-title">Er. Rakeshbhai Soni</h1>
                <p className="hero-desc">
                  Professional civil engineer with over 27 years of experience. 
                  Committed to professional work with quality as my primary goal. 
                  Specialized in project management and construction engineering.
                </p>
                <div className="hero-contact">
                  <span className="hero-contact-item">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    Patan, India
                  </span>
                  <span className="hero-contact-item">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    +91 09825750781
                  </span>
                </div>
                <div className="hero-buttons">
                  <a href="#contact" className="btn btn-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                    Download Resume
                  </a>
                  <a href="#contact" className="btn btn-outline">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    Contact Me
                  </a>
                </div>
              </div>
              <div className="hero-image">
                <div className="profile-card">
                  <div className="profile-avatar"><span>RS</span></div>
                  <p className="profile-text">27+ Years Experience</p>
                </div>
              </div>
            </div>
            <div className="stats">
              <div className="stat"><p className="stat-value">27+</p><p className="stat-label">Years Experience</p></div>
              <div className="stat"><p className="stat-value">100+</p><p className="stat-label">Projects Completed</p></div>
              <div className="stat"><p className="stat-value">B.Tech</p><p className="stat-label">MS University</p></div>
              <div className="stat"><p className="stat-value">8.90</p><p className="stat-label">CGPA Score</p></div>
            </div>
          </div>
        </section>

        <section id="about" className="section-bg">
          <div className="container">
            <div className="about-grid">
              <div className="about-text">
                <p className="section-label">About Me</p>
                <h2 className="section-title">Professional Biography</h2>
                <p>I am Er. Rakeshbhai Soni, a dedicated civil engineer with over 27 years of professional experience in the construction industry. My career has been built on a foundation of professional excellence and an unwavering commitment to quality.</p>
                <p>Throughout my career, I have successfully managed numerous construction projects, specializing in commercial and institutional buildings. My approach combines technical expertise with strong project management skills to deliver exceptional results.</p>
                <p>Quality is not just a goal for me—it is a guiding principle that influences every aspect of my work. I believe in delivering projects that stand the test of time, both structurally and aesthetically.</p>
                <div className="about-interest"><span>Core Interest: </span><span>Project Management</span></div>
              </div>
              <div className="feature-grid">
                <div className="feature-card">
                  <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></div>
                  <h3>Experience</h3>
                  <p>27+ years in civil engineering and construction management</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></div>
                  <h3>Focus</h3>
                  <p>Professional work with quality as the primary goal</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg></div>
                  <h3>Education</h3>
                  <p>B.Tech from MS University Vadodara with 8.90 CGPA</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
                  <h3>Leadership</h3>
                  <p>Team coordination and project management expertise</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Skills</p>
              <h2 className="section-title">Technical & Professional Skills</h2>
              <p className="section-desc">A comprehensive skill set developed over 27+ years in the civil engineering industry</p>
            </div>
            <div className="skills-grid">
              <div className="skills-section">
                <h3>Technical Skills</h3>
                <div className="skill-item">
                  <div className="skill-header"><span className="skill-name"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M2 12h20M2 12l10-10M2 12l10 10" /></svg>AutoCAD</span><span className="skill-level">95%</span></div>
                  <div className="skill-bar"><div className="skill-progress" style={{ width: '95%' }} /></div>
                </div>
                <div className="skill-item">
                  <div className="skill-header"><span className="skill-name"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>STAAD / ETABS</span><span className="skill-level">90%</span></div>
                  <div className="skill-bar"><div className="skill-progress" style={{ width: '90%' }} /></div>
                </div>
                <div className="skill-item">
                  <div className="skill-header"><span className="skill-name"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="3" x2="15" y2="21" /></svg>MS Excel</span><span className="skill-level">92%</span></div>
                  <div className="skill-bar"><div className="skill-progress" style={{ width: '92%' }} /></div>
                </div>
                <div className="skill-item">
                  <div className="skill-header"><span className="skill-name"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><line x1="4" y1="9" x2="20" y2="9" /><line x1="4" y1="15" x2="20" y2="15" /><line x1="10" y1="3" x2="8" y2="21" /><line x1="16" y1="3" x2="14" y2="21" /></svg>Quantity Surveying</span><span className="skill-level">95%</span></div>
                  <div className="skill-bar"><div className="skill-progress" style={{ width: '95%' }} /></div>
                </div>
                <div className="skill-item">
                  <div className="skill-header"><span className="skill-name"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" /><circle cx="16.5" cy="7.5" r=".5" /></svg>Site Supervision</span><span className="skill-level">98%</span></div>
                  <div className="skill-bar"><div className="skill-progress" style={{ width: '98%' }} /></div>
                </div>
                <div className="skill-item">
                  <div className="skill-header"><span className="skill-name"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>Estimation & Costing</span><span className="skill-level">95%</span></div>
                  <div className="skill-bar"><div className="skill-progress" style={{ width: '95%' }} /></div>
                </div>
              </div>
              <div className="skills-section">
                <h3>Soft Skills</h3>
                <div className="soft-skill">
                  <div className="soft-skill-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
                  <div><h4>Team Coordination</h4><p>Leading and coordinating construction teams effectively</p></div>
                </div>
                <div className="soft-skill">
                  <div className="soft-skill-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></div>
                  <div><h4>Communication</h4><p>Clear communication with clients and stakeholders</p></div>
                </div>
                <div className="soft-skill">
                  <div className="soft-skill-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
                  <div><h4>Time Management</h4><p>Efficient project scheduling and deadline management</p></div>
                </div>
                <h4 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '1.5rem', marginBottom: '1rem' }}>Additional Expertise</h4>
                <div className="tags">
                  <span className="tag">Structural Analysis</span>
                  <span className="tag">Blueprint Reading</span>
                  <span className="tag">Quality Control</span>
                  <span className="tag">Safety Compliance</span>
                  <span className="tag">Material Testing</span>
                  <span className="tag">Contract Management</span>
                  <span className="tag">Budget Planning</span>
                  <span className="tag">RCC Design</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-bg">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Projects</p>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-desc">A selection of significant projects demonstrating expertise in construction engineering and project management</p>
            </div>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-header">
                  <div className="project-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg></div>
                  <span className="project-badge">Commercial</span>
                </div>
                <h3>Shree Vardhman Trust Amilshala</h3>
                <div className="project-meta">
                  <span className="project-meta-item"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>Yamunawadi</span>
                  <span className="project-meta-item"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>Construction Engineer</span>
                </div>
                <p className="project-desc">Led the complete construction engineering for this commercial educational facility, ensuring structural integrity and quality standards.</p>
                <div className="project-tags"><span className="project-tag">AutoCAD</span><span className="project-tag">STAAD Pro</span><span className="project-tag">MS Excel</span></div>
              </div>
              <div className="project-card">
                <div className="project-header">
                  <div className="project-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg></div>
                  <span className="project-badge">Residential</span>
                </div>
                <h3>Residential Complex Development</h3>
                <div className="project-meta">
                  <span className="project-meta-item"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>Patan, Gujarat</span>
                  <span className="project-meta-item"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>Project Manager</span>
                </div>
                <p className="project-desc">Managed the development of a multi-story residential complex from foundation to finishing, coordinating with contractors.</p>
                <div className="project-tags"><span className="project-tag">Quantity Surveying</span><span className="project-tag">Cost Estimation</span></div>
              </div>
              <div className="project-card">
                <div className="project-header">
                  <div className="project-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg></div>
                  <span className="project-badge">Industrial</span>
                </div>
                <h3>Industrial Warehouse Facility</h3>
                <div className="project-meta">
                  <span className="project-meta-item"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>Gujarat</span>
                  <span className="project-meta-item"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>Structural Consultant</span>
                </div>
                <p className="project-desc">Provided structural consultation for a large-scale industrial warehouse, focusing on load-bearing capacity and safety.</p>
                <div className="project-tags"><span className="project-tag">ETABS</span><span className="project-tag">Structural Analysis</span></div>
              </div>
            </div>
            <div className="projects-footer">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              Over 100+ projects completed across commercial, residential, and industrial sectors
            </div>
          </div>
        </section>

        <section id="education">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Education</p>
              <h2 className="section-title">Academic Background</h2>
              <p className="section-desc">A strong educational foundation in civil engineering from a prestigious institution</p>
            </div>
            <div className="education-card">
              <div className="education-line" />
              <div className="education-dot"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg></div>
              <div className="education-content">
                <div className="education-header">
                  <div><h3 className="education-title">Bachelor of Technology (B.Tech)</h3><p className="education-field">Civil Engineering</p></div>
                  <div className="education-cgpa"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>CGPA: 8.90</div>
                </div>
                <div className="education-details">
                  <div className="education-detail"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg><div><p className="education-detail-label">Institution</p><p className="education-detail-value">MS University Vadodara</p></div></div>
                  <div className="education-detail"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg><div><p className="education-detail-label">Year of Passing</p><p className="education-detail-value">1989</p></div></div>
                </div>
                <div className="coursework">
                  <h4>Key Coursework</h4>
                  <div className="tags">
                    <span className="tag">Structural Engineering</span>
                    <span className="tag">Geotechnical Engineering</span>
                    <span className="tag">Construction Management</span>
                    <span className="tag">Surveying</span>
                    <span className="tag">Hydraulics</span>
                    <span className="tag">Transportation Engineering</span>
                    <span className="tag">Concrete Technology</span>
                    <span className="tag">Steel Structures</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="section-bg">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Certifications & Achievements</p>
              <h2 className="section-title">Professional Recognition</h2>
              <p className="section-desc">Continuous professional development and notable achievements throughout my career</p>
            </div>
            <div className="certs-grid">
              <div className="skills-section">
                <h3>Certifications</h3>
                <div className="cert-cards">
                  <div className="cert-card">
                    <div className="cert-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg></div>
                    <span className="cert-category">Software</span>
                    <h4>AutoCAD Professional</h4>
                    <p>Advanced proficiency in AutoCAD for civil engineering drawings</p>
                  </div>
                  <div className="cert-card">
                    <div className="cert-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
                    <span className="cert-category">Safety</span>
                    <h4>Construction Safety Training</h4>
                    <p>Comprehensive training in construction site safety protocols</p>
                  </div>
                  <div className="cert-card">
                    <div className="cert-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></div>
                    <span className="cert-category">Management</span>
                    <h4>Project Management Professional</h4>
                    <p>Expertise in managing complex construction projects</p>
                  </div>
                  <div className="cert-card">
                    <div className="cert-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg></div>
                    <span className="cert-category">Quality</span>
                    <h4>Quality Control & Assurance</h4>
                    <p>Certified in construction quality standards</p>
                  </div>
                </div>
              </div>
              <div className="skills-section">
                <h3>Key Achievements</h3>
                <div className="achievements-card">
                  <div className="achievement-item"><span className="achievement-num">1</span><span className="achievement-text">Successfully completed 100+ construction projects</span></div>
                  <div className="achievement-item"><span className="achievement-num">2</span><span className="achievement-text">27+ years of unblemished professional record</span></div>
                  <div className="achievement-item"><span className="achievement-num">3</span><span className="achievement-text">Recognized for quality-focused engineering solutions</span></div>
                  <div className="achievement-item"><span className="achievement-num">4</span><span className="achievement-text">Led teams of 50+ construction workers on major projects</span></div>
                </div>
                <div className="quote-card">
                  <p className="quote-text">{'"Quality is not just a goal for me—it is a guiding principle that influences every aspect of my work. I believe in delivering projects that stand the test of time."'}</p>
                  <div className="quote-author">
                    <div className="quote-avatar">RS</div>
                    <div><p className="quote-name">Er. Rakeshbhai Soni</p><p className="quote-role">Civil Engineer</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Contact</p>
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-desc">{"Interested in discussing a project or opportunity? I'd love to hear from you."}</p>
            </div>
            <div className="contact-grid">
              <div className="contact-cards">
                <a href="tel:+919825750781" className="contact-card">
                  <div className="contact-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
                  <div><p className="contact-label">Phone</p><p className="contact-value">+91 09825750781</p></div>
                </a>
                <a href="mailto:rakeshsoni05@yahoo.com" className="contact-card">
                  <div className="contact-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></div>
                  <div><p className="contact-label">Email</p><p className="contact-value">rakeshsoni05@yahoo.com</p></div>
                </a>
                <div className="contact-card">
                  <div className="contact-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
                  <div><p className="contact-label">Location</p><p className="contact-value">Patan, India</p></div>
                </div>
                <div className="resume-card">
                  <h3>Download Resume</h3>
                  <p>Get a copy of my complete resume with detailed work experience and qualifications.</p>
                  <a href="#" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                    Download Resume (PDF)
                  </a>
                </div>
              </div>
              <div className="form-card">
                <form id="contactForm">
                  <div className="form-row">
                    <div className="form-group"><label htmlFor="name">Your Name</label><input type="text" id="name" name="name" placeholder="John Doe" required /></div>
                    <div className="form-group"><label htmlFor="email">Email Address</label><input type="email" id="email" name="email" placeholder="john@example.com" required /></div>
                  </div>
                  <div className="form-group"><label htmlFor="subject">Subject</label><input type="text" id="subject" name="subject" placeholder="Project Inquiry" required /></div>
                  <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" name="message" placeholder="Tell me about your project or inquiry..." required /></div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="footer-grid">
            <div className="footer-brand"><h3>Er. <span>Rakeshbhai Soni</span></h3><p>Professional Civil Engineer with 27+ years of experience in construction and project management.</p></div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <div className="footer-links"><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#education">Education</a><a href="#contact">Contact</a></div>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="footer-links"><a href="tel:+919825750781">+91 09825750781</a><a href="mailto:rakeshsoni05@yahoo.com">rakeshsoni05@yahoo.com</a><span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Patan, India</span></div>
            </div>
          </div>
          <div className="footer-bottom">© 2024 Er. Rakeshbhai Soni. All rights reserved.</div>
        </footer>

        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            function getPreferredTheme() {
              const savedTheme = localStorage.getItem('theme');
              if (savedTheme) return savedTheme;
              return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }

            function setTheme(theme) {
              if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
              } else {
                document.documentElement.removeAttribute('data-theme');
              }
              localStorage.setItem('theme', theme);
            }

            setTheme(getPreferredTheme());

            document.addEventListener('DOMContentLoaded', function() {
              const themeToggle = document.getElementById('themeToggle');
              if (themeToggle) {
                themeToggle.addEventListener('click', function() {
                  const currentTheme = document.documentElement.getAttribute('data-theme');
                  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                  setTheme(newTheme);
                });
              }

              const contactForm = document.getElementById('contactForm');
              if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                  e.preventDefault();
                  const formData = new FormData(contactForm);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const subject = formData.get('subject');
                  const message = formData.get('message');
                  const mailtoLink = 'mailto:rakeshsoni05@yahoo.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent('Name: ' + name + '\\nEmail: ' + email + '\\n\\n' + message);
                  window.location.href = mailtoLink;
                });
              }
            });

            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
              if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
              }
            });
          })();
        ` }} />
      </body>
    </html>
  )
}

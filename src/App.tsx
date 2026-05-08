const SECTIONS = [
  { id: 'about', title: 'About' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
] as const;

export function App() {
  const title = 'Developer Portfolio';

  return (
    <div className="layout">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <p className="site-brand">{title}</p>
        <nav className="site-nav" aria-label="Page sections">
          <ul className="site-nav-list">
            {SECTIONS.map(({ id, title: sectionTitle }) => (
              <li key={id}>
                <a href={`#${id}`}>{sectionTitle}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main-content" className="site-main">
        <h1 className="page-title">{title}</h1>
        <p className="lead">
          A minimal Vite + React starter you can extend with your work and links.
        </p>

        <section id="about" className="content-section" aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <p>
            Replace this copy with your background, stack, and what you are building. Keep
            navigation hash links in sync when you add or rename sections.
          </p>
        </section>

        <section id="projects" className="content-section" aria-labelledby="projects-heading">
          <h2 id="projects-heading">Projects</h2>
          <p>
            Showcase repos or demos here. Example placeholder link (opens in a new tab):
          </p>
          <ul className="link-list">
            <li>
              <a
                href="https://vitejs.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vite documentation
              </a>
            </li>
          </ul>
        </section>

        <section id="contact" className="content-section" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact</h2>
          <p>
            Add your email or profiles when you are ready—avoid embedding API keys or
            private tokens in the client bundle.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <small>Built with React and Vite.</small>
      </footer>
    </div>
  );
}

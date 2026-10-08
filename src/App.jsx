import { useEffect, useRef, useState } from 'react'
import './App.css'
import Icon from './components/Icon'
import useScrollReveal from './hooks/useScrollReveal'

// Importing Pages
import HomePage from './pages/HomePage'
import CollegesPage from './pages/CollegesPage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

const tickerItems = ['KEAM 2025 Open', 'TNEA Registration Live', 'COMEDK 2025 Announced', 'JEE Main Results Out', 'NEET Counselling Begins', 'Scholarship Matching Available'];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isNavStuck, setIsNavStuck] = useState(false);
  const [showToTop, setShowToTop] = useState(false);
  const tickerRef = useRef(null);

  useScrollReveal();

  // Shadow under the nav once the ticker has scrolled away; back-to-top after the first screen.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setIsNavStuck(y > (tickerRef.current?.offsetHeight ?? 0));
      setShowToTop(y > 640);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    frame = requestAnimationFrame(update);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // While the drawer is open: lock page scroll, close on Escape or when the desktop nav takes over.
  useEffect(() => {
    if (!isDrawerOpen) return;
    const desktop = window.matchMedia('(min-width: 960px)');
    const onKey = (e) => { if (e.key === 'Escape') setIsDrawerOpen(false); };
    const onResize = (e) => { if (e.matches) setIsDrawerOpen(false); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
    };
  }, [isDrawerOpen]);

  const toggleMenu = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Same page: glide back to the top. New page: start it at the top.
  const go = (id) => {
    setIsDrawerOpen(false);
    if (id === currentPage) {
      window.scrollTo({ top: 0 });
      return;
    }
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const current = (id) => (currentPage === id ? 'page' : undefined);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={go} />;
      case 'colleges': return <CollegesPage />;
      case 'about': return <AboutPage />;
      case 'blog': return <BlogPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage onNavigate={go} />;
    }
  };

  return (
    <div className="app-container">
      <div className="ticker" ref={tickerRef}>
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <ul className="ticker-group" key={copy} aria-hidden={copy === 1 || undefined}>
              {tickerItems.map((item) => (
                <li className="ticker-item" key={item}><span className="ticker-dot"></span>{item}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <nav className={isNavStuck ? 'stuck' : ''}>
        <div className="nav-inner">
          <button type="button" className="logo" onClick={() => go('home')}><img src="/logo.png" alt="Zaptockz Logo" /></button>
          <div className="nav-desktop">
            <button type="button" className="nav-link" aria-current={current('home')} onClick={() => go('home')}>Home</button>
            <button type="button" className="nav-link" aria-current={current('colleges')} onClick={() => go('colleges')}>Colleges</button>
            <button type="button" className="nav-link" aria-current={current('about')} onClick={() => go('about')}>About</button>
            <button type="button" className="nav-link" aria-current={current('blog')} onClick={() => go('blog')}>Blog</button>
            <button type="button" className="nav-cta" onClick={() => go('contact')}>Free Session</button>
          </div>
          <button type="button" className={`hamburger ${isDrawerOpen ? 'open' : ''}`} aria-label="Menu" aria-expanded={isDrawerOpen} aria-controls="mobile-menu" onClick={toggleMenu}>
            <span></span><span></span><span></span>
          </button>
        </div>

        <div id="mobile-menu" className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
          <button type="button" className="drawer-link" style={{ '--i': 0 }} aria-current={current('home')} onClick={() => go('home')}>Home</button>
          <button type="button" className="drawer-link" style={{ '--i': 1 }} aria-current={current('colleges')} onClick={() => go('colleges')}>Colleges</button>
          <button type="button" className="drawer-link" style={{ '--i': 2 }} aria-current={current('about')} onClick={() => go('about')}>About Us</button>
          <button type="button" className="drawer-link" style={{ '--i': 3 }} aria-current={current('blog')} onClick={() => go('blog')}>Blog</button>
          <button type="button" className="drawer-cta" style={{ '--i': 4 }} onClick={() => go('contact')}>Book Free Session</button>
        </div>
      </nav>

      <main key={currentPage} className="page-enter">
        {renderPage()}
      </main>

      <footer>
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="logo"><img src="/logo.png" alt="Zaptockz Logo" /></div>
            <p>Empowering students to find the right college through expert counseling, transparent data, and smart admission tools. Founded in 2024.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <div className="foot-links">
              <button type="button" onClick={() => go('home')}>Home</button>
              <button type="button" onClick={() => go('colleges')}>College Directory</button>
              <button type="button" onClick={() => go('about')}>About Us</button>
              <button type="button" onClick={() => go('blog')}>Blog</button>
              <button type="button" onClick={() => go('contact')}>Contact Us</button>
            </div>
          </div>
          <div>
            <h4>Legal</h4>
            <div className="foot-links">
              <a>Terms of Service</a>
              <a>Privacy Policy</a>
              <a>Refund Policy</a>
              <a>Cookie Policy</a>
            </div>
          </div>
          <div>
            <h4>Connect</h4>
            <div className="foot-links">
              <a>Instagram</a>
              <a>LinkedIn</a>
              <a>WhatsApp Channel</a>
              <a>YouTube</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          © 2024 Zaptockz Admission Platform. All rights reserved.
        </div>
      </footer>

      <button type="button" className={`to-top ${showToTop ? 'show' : ''}`} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0 })}>
        <Icon name="arrowUp" size={18} />
      </button>
    </div>
  )
}

export default App

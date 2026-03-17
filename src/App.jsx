import { useState, useEffect } from 'react'
import './App.css'

// Importing Pages
import HomePage from './pages/HomePage'
import CollegesPage from './pages/CollegesPage'
import ServicesPage from './pages/ServicesPage'
import AbroadPage from './pages/AbroadPage'
import CareerPage from './pages/CareerPage'
import ToolsPage from './pages/ToolsPage'
import PricingPage from './pages/PricingPage'
import AgenciesPage from './pages/AgenciesPage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleMenu = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const go = (id) => {
    setCurrentPage(id);
    setIsDrawerOpen(false);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={go} />;
      case 'colleges': return <CollegesPage />;
      case 'services': return <ServicesPage />;
      case 'abroad': return <AbroadPage />;
      case 'career': return <CareerPage />;
      case 'tools': return <ToolsPage />;
      case 'pricing': return <PricingPage />;
      case 'agencies': return <AgenciesPage />;
      case 'about': return <AboutPage />;
      case 'blog': return <BlogPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage onNavigate={go} />;
    }
  };

  return (
    <div className="app-container">
      <div className="ticker">
        <span className="ticker-track">🟢 KEAM 2025 Open | 🟢 TNEA Registration Live | 🟢 COMEDK 2025 Announced | 🟢 JEE Main Results Out | 🟢 NEET Counselling Begins | 🟢 Scholarship Matching Available&nbsp;&nbsp;&nbsp;&nbsp;🟢 KEAM 2025 Open | 🟢 TNEA Registration Live | 🟢 COMEDK 2025 Announced | 🟢 JEE Main Results Out | 🟢 NEET Counselling Begins | 🟢 Scholarship Matching Available</span>
      </div>

      <nav>
        <div className="nav-inner">
          <div className="logo" onClick={() => go('home')}>Zap<span>tockz</span></div>
          <div className="nav-desktop">
            <a className={currentPage === 'home' ? 'active' : ''} onClick={() => go('home')}>Home</a>
            <a className={currentPage === 'colleges' ? 'active' : ''} onClick={() => go('colleges')}>Colleges</a>
            <a className={currentPage === 'services' ? 'active' : ''} onClick={() => go('services')}>Services</a>
            <a className={currentPage === 'abroad' ? 'active' : ''} onClick={() => go('abroad')}>Study Abroad</a>
            <a className={currentPage === 'career' ? 'active' : ''} onClick={() => go('career')}>Career</a>
            <a className={currentPage === 'tools' ? 'active' : ''} onClick={() => go('tools')}>Tools</a>
            <a className={currentPage === 'pricing' ? 'active' : ''} onClick={() => go('pricing')}>Pricing</a>
            <a className={currentPage === 'agencies' ? 'active' : ''} onClick={() => go('agencies')}>Agencies</a>
            <a className={currentPage === 'about' ? 'active' : ''} onClick={() => go('about')}>About</a>
            <a className={currentPage === 'blog' ? 'active' : ''} onClick={() => go('blog')}>Blog</a>
            <a onClick={() => go('contact')} className="nav-cta">Free Session</a>
          </div>
          <button className={`hamburger ${isDrawerOpen ? 'open' : ''}`} aria-label="Menu" onClick={toggleMenu}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <a onClick={() => go('home')}>Home</a>
        <a onClick={() => go('colleges')}>Colleges</a>
        <a onClick={() => go('services')}>Services</a>
        <a onClick={() => go('abroad')}>Study Abroad</a>
        <a onClick={() => go('career')}>Career Guidance</a>
        <a onClick={() => go('tools')}>Tools & Platform</a>
        <a onClick={() => go('pricing')}>Pricing</a>
        <a onClick={() => go('agencies')}>For Agencies</a>
        <a onClick={() => go('about')}>About Us</a>
        <a onClick={() => go('blog')}>Blog</a>
        <a className="drawer-cta" onClick={() => go('contact')}>Book Free Session</a>
      </div>

      <main>
        {renderPage()}
      </main>

      <footer>
        <div className="nav-inner" style={{ flexWrap: 'wrap', height: 'auto', padding: '60px 16px', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 2, minWidth: '250px', marginBottom: '40px' }}>
            <div className="logo" style={{ marginBottom: '16px' }}>Zap<span>tockz</span></div>
            <p style={{ opacity: 0.7, fontSize: '14px', maxWidth: '300px', lineHeight: 1.6 }}>Empowering students to find the right college through expert counseling, transparent data, and smart admission tools. Founded in 2024.</p>
          </div>
          <div style={{ flex: 1, minWidth: '150px', marginBottom: '40px' }}>
            <h4 style={{ marginBottom: '20px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Sections</h4>
            <div style={{ display: 'grid', gap: '10px', fontSize: '14px', opacity: 0.7 }}>
              <a onClick={() => go('home')} style={{ cursor: 'pointer' }}>Home</a>
              <a onClick={() => go('colleges')} style={{ cursor: 'pointer' }}>College Directory</a>
              <a onClick={() => go('services')} style={{ cursor: 'pointer' }}>Admission Services</a>
              <a onClick={() => go('abroad')} style={{ cursor: 'pointer' }}>Study Abroad</a>
              <a onClick={() => go('tools')} style={{ cursor: 'pointer' }}>Smart Tools</a>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: '150px', marginBottom: '40px' }}>
            <h4 style={{ marginBottom: '20px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Legal</h4>
            <div style={{ display: 'grid', gap: '10px', fontSize: '14px', opacity: 0.7 }}>
              <a>Terms of Service</a>
              <a>Privacy Policy</a>
              <a>Refund Policy</a>
              <a>Cookie Policy</a>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: '150px', marginBottom: '40px' }}>
            <h4 style={{ marginBottom: '20px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Connect</h4>
            <div style={{ display: 'grid', gap: '10px', fontSize: '14px', opacity: 0.7 }}>
              <a>Instagram</a>
              <a>LinkedIn</a>
              <a>WhatsApp Channel</a>
              <a>YouTube</a>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', padding: '24px 16px', borderTop: '1px solid rgba(255,255,255,.05)', fontSize: '12px', opacity: 0.5 }}>
          © 2024 Zaptockz Admission Platform. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App

import React from 'react'

const AboutPage = () => {
  return (
    <div className="page active">
      <section>
        <div className="about-grid">
          <div>
            <div className="tag">Our Story</div>
            <div className="h2">Democratizing Access to Higher Education</div>
            <p className="sub" style={{ marginTop: '20px' }}>Founded in 2024, Zaptockz was born out of a simple observation: students are often more stressed about the *process* of getting into college than the education itself.</p>
            <p className="sub">We believe every student deserves a level playing field, regardless of their background or current location. Our platform bridges the gap between dreams and reality through data-driven guidance.</p>
          </div>
          <div className="about-vis">
            <div style={{ fontSize: '13px', opacity: 0.7, marginBottom: '10px' }}>Founded In</div>
            <div className="about-big">2024</div>
            <div className="mini-grid">
              <div className="mini-stat"><div className="mini-n">200+</div><div className="mini-l">Students</div></div>
              <div className="mini-stat"><div className="mini-n">50+</div><div className="mini-l">Partners</div></div>
              <div className="mini-stat"><div className="mini-n">14</div><div className="mini-l">Cities</div></div>
              <div className="mini-stat"><div className="mini-n">100%</div><div className="mini-l">Transparent</div></div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--light)' }}>
        <div className="center">
          <div className="tag">Our Values</div>
          <div className="h2">What Drives Us Every Day</div>
        </div>
        <div className="g2" style={{ marginTop: '40px' }}>
          <div className="val-item">
            <div className="vdot"></div>
            <div>
              <h4>Radical Transparency</h4>
              <p>No hidden fees, no background commissions, no false promises. Just the facts you need to decide.</p>
            </div>
          </div>
          <div className="val-item">
            <div className="vdot"></div>
            <div>
              <h4>Student-First Focus</h4>
              <p>We work for you, not the colleges. Your aspirations are the only KPI that matters to our team.</p>
            </div>
          </div>
          <div className="val-item">
            <div className="vdot"></div>
            <div>
              <h4>Data Over Hype</h4>
              <p>We use real placement statistics, verified fee structures, and genuine student reviews to guide you.</p>
            </div>
          </div>
          <div className="val-item">
            <div className="vdot"></div>
            <div>
              <h4>Continuous Support</h4>
              <p>Our job doesn't end at admission. We're here for you through scholarships, loans, and career starts.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

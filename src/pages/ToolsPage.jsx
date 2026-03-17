import React from 'react'

const ToolsPage = () => {
  return (
    <div className="page active">
      <section>
        <div className="center">
          <div className="tag">Smart Platform</div>
          <div className="h2">Data-Driven Tools to Remove the Guesswork</div>
          <div className="sub">Stop relying on hearsay. Use our verified tools and data to make decisions based on actual performance and trends.</div>
        </div>

        <div className="g3" style={{ marginTop: '40px' }}>
          <div className="card">
            <div className="ci">📊</div>
            <h3>College Rank Predictor</h3>
            <p>Enter your KEAM/NEET/JEE scores to see which colleges you realistically qualify for.</p>
            <button className="sm-btn sm-navy" style={{ marginTop: '14px' }}>Launch Predictor</button>
          </div>
          <div className="card">
            <div className="ci">💵</div>
            <h3>Fee Comparison Engine</h3>
            <p>Compare total cost of education (fees + hostel + hidden costs) across 3 colleges side-by-side.</p>
            <button className="sm-btn sm-navy" style={{ marginTop: '14px' }}>Compare Now</button>
          </div>
          <div className="card">
            <div className="ci">📋</div>
            <h3>Application Tracker</h3>
            <p>A single dashboard to manage every registration, document upload, and deadline.</p>
            <button className="sm-btn sm-navy" style={{ marginTop: '14px' }}>Open Dashboard</button>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--navy)', color: '#fff' }}>
        <div className="center">
          <div className="h2" style={{ color: '#fff' }}>For Parents: The Peace of Mind Dashboard</div>
          <p className="sub" style={{ color: 'rgba(255,255,255,.7)' }}>Get real-time updates on your child's application status via WhatsApp. No more asking "Did you fill the form?"</p>
          <button className="btn btn-primary" style={{ marginTop: '24px' }}>Setup Parent Alerts</button>
        </div>
      </section>
    </div>
  )
}

export default ToolsPage

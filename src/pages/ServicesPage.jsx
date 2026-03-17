import React from 'react'

const ServiceSection = ({ title, desc, features, price }) => (
  <div className="card" style={{ height: 'auto', textAlign: 'left' }}>
    <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{title}</h3>
    <p style={{ marginBottom: '16px' }}>{desc}</p>
    <div style={{ marginBottom: '20px' }}>
      {features.map((f, i) => (
        <div key={i} className="srv-feat"><span>✅</span>{f}</div>
      ))}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
      <div><span style={{ fontSize: '20px', fontWeight: 'bold' }}>{price}</span><span style={{ fontSize: '13px', opacity: 0.6 }}>/start</span></div>
      <button className="sm-btn sm-navy">Get Service</button>
    </div>
  </div>
)

const ServicesPage = () => {
  return (
    <div className="page active">
      <section>
        <div className="center">
          <div className="tag">Our Services</div>
          <div className="h2">Expert Guidance for Every Milestone</div>
          <div className="sub">We help you navigate the complex Indian education landscape with ease, transparency, and expert support.</div>
        </div>

        <div className="g3" style={{ marginTop: '40px' }}>
          <ServiceSection 
            title="Premium Engineering Admission"
            desc="Complete support for top engineering colleges in South India (Kerala, TN, Karnataka)."
            features={["College Shortlisting", "Admission Formalities", "Fee Negotiations", "Direct Admissions Support"]}
            price="₹4,999"
          />
          <ServiceSection 
            title="KEAM/NATA/JEE Counselling"
            desc="Expert guidance through government counselling rounds to secure your seat."
            features={["Option Entry Support", "Rank Analysis", "Mock Allotments", "Category Reservation Guidance"]}
            price="₹1,999"
          />
          <ServiceSection 
            title="Degree Management"
            desc="Manage your entire degree cycle — from enrollment to certification."
            features={["Distance/Online Mode", "University Verification", "Exam Registration Support", "UGC Recognized"]}
            price="₹2,499"
          />
        </div>
      </section>

      <section style={{ background: 'var(--light)' }}>
        <div className="center">
          <div className="h2">Specialized Support</div>
        </div>
        <div className="g2">
          <div className="card" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div className="ci" style={{ fontSize: '30px' }}>🏦</div>
            <div>
              <h3>Education Loan Assistance</h3>
              <p>We help you with documentation and connects you with bank partners for faster processing.</p>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div className="ci" style={{ fontSize: '30px' }}>💰</div>
            <div>
              <h3>Scholarship Matching</h3>
              <p>Our database matches you with government and private scholarships based on your profile.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

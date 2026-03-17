import React from 'react'

const CountryCard = ({ flag, name, desc, tags }) => (
  <div className="cntry-card">
    <div className="flag">{flag}</div>
    <h3>{name}</h3>
    <p>{desc}</p>
    <div className="ptags">
      {tags.map((t, i) => (
        <span key={i} className="ptag">{t}</span>
      ))}
    </div>
  </div>
)

const AbroadPage = () => {
  return (
    <div className="page active">
      <section style={{ background: 'var(--navy)', color: '#fff' }}>
        <div className="center">
          <div className="tag" style={{ background: 'rgba(255,255,255,.1)', color: 'var(--accent)' }}>Global Education</div>
          <div className="h2" style={{ color: '#fff' }}>Study Medicine and Engineering Overseas</div>
          <div className="sub" style={{ color: 'rgba(255,255,255,.7)' }}>High-quality education at affordable costs. Get NMC/MCI recognized degrees from top global universities.</div>
        </div>
      </section>

      <section>
        <div className="center">
          <div className="h2">Popular Destinations</div>
        </div>
        <div className="country-grid">
          <CountryCard flag="🇬🇪" name="Georgia" desc="Best destination for Medicine with high USMLE/FMGE success rates." tags={["No Donation", "English Medium", "MCI Recognized"]} />
          <CountryCard flag="🇵🇭" name="Philippines" desc="US-based curriculum for MBBS. Affordable and high pass percentages." tags={["IELTS Not Required", "Low Fees", "Safe Environment"]} />
          <CountryCard flag="🇪🇬" name="Egypt" desc="Historic universities with world-class medical facilities and training." tags={["Oldest Universities", "Advanced Hospitals", "Low Living Cost"]} />
          <CountryCard flag="🇷🇺" name="Russia" desc="Highly subsidized medical education with centuries of academic excellence." tags={["Subsidized Fees", "Direct Admission", "Top Rank"]} />
          <CountryCard flag="🇺🇿" name="Uzbekistan" desc="Emerging destination for affordable medical degrees in Central Asia." tags={["Super Low Cost", "6 Year MBBS", "FMGE Coaching"]} />
          <CountryCard flag="🇻🇳" name="Vietnam" desc="Quickly becoming a hub for affordable engineering and medical studies." tags={["Pocket Friendly", "Modern Labs", "Growing Tech"]} />
        </div>
      </section>

      <section style={{ background: 'var(--light)' }}>
        <div className="parent-grid">
          <div>
            <div className="tag">Why Zaptockz?</div>
            <div className="h2">Transparent Process, Zero Surprises</div>
            <div style={{ marginTop: '24px' }}>
              <div className="pf"><div className="pico">✈️</div><div><h4>Pre-Departure Support</h4><p>Visa assistance, documentation, and flight ticket booking — all handled by us.</p></div></div>
              <div className="pf"><div className="pico">🏠</div><div><h4>Settlement Assistance</h4><p>Hostel room allocation and local assistance during the first week of arrival.</p></div></div>
              <div className="pf"><div className="pico">⭐</div><div><h4>Verified Universities</h4><p>We only work with universities recognized by NMC/WHO and national authorities.</p></div></div>
            </div>
          </div>
          <div className="pmock">
            <div className="pmock-head"><div className="mdot"></div><div className="mdot"></div><div className="mdot"></div><div className="mtitle">Student Tracking Dashboard</div></div>
            <div className="pmock-body">
              <div className="mstat-row">
                <div className="mstat"><div className="mstat-n">A+</div><div className="mstat-l">App Status</div></div>
                <div className="mstat"><div className="mstat-n">02</div><div className="mstat-l">Days to Visa</div></div>
                <div className="mstat"><div className="mstat-n">100%</div><div className="mstat-l">Safety</div></div>
              </div>
              <div className="mapp"><span>Visa Approval (Georgia)</span><span className="mst sg">Approved</span></div>
              <div className="mapp"><span>Health Insurance</span><span className="mst sg">Active</span></div>
              <div className="mapp"><span>Accommodation</span><span className="mst sa">Draft</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AbroadPage

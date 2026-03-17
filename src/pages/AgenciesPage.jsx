import React from 'react'

const AgencyCard = ({ featured, name, desc, features }) => (
  <div className={`agcard ${featured ? 'featured' : ''}`}>
    <h3>{name}</h3>
    <p className="desc">{desc}</p>
    <div>
      {features.map((f, i) => (
        <div key={i} className="agf"><span>▶</span>{f}</div>
      ))}
    </div>
    <button className="btn btn-navy" style={{ width: '100%', marginTop: '20px', fontSize: '13px' }}>Join Network</button>
  </div>
)

const AgenciesPage = () => {
  return (
    <div className="page active">
      <section>
        <div className="center">
          <div className="tag">Partner Network</div>
          <div className="h2">Power Your Agency with Zaptockz Data</div>
          <div className="sub">We provide the backend technology and verified college data for independent consultants and education agencies.</div>
        </div>

        <div className="ag-grid">
          <AgencyCard 
            name="Independent Counsellors"
            desc="Level up your guidance with our rank predictors and college comparison tools."
            features={["CRM for Student Tracking", "Verified Cutoff Database", "Branded Result Reports"]}
          />
          <AgencyCard 
            featured={true}
            name="Premium Partners"
            desc="For established agencies looking for an exclusive supply of verified college leads."
            features={["Exclusive Lead Access", "Priority Admission Support", "Direct College Ties"]}
          />
          <AgencyCard 
            name="Digital Creators"
            desc="Monetize your education content by referring students to our expert desk."
            features={["Affiliate Tracking", "High Commission Rates", "Marketing Assets"]}
          />
        </div>
      </section>
    </div>
  )
}

export default AgenciesPage

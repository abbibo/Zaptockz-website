import React, { useState } from 'react'
import Icon from '../components/Icon'

const CollegeCard = ({ logo, name, location, type, tags, fee }) => (
  <div className="ccard reveal">
    <div className="chead">
      <div className="clogo">{logo}</div>
      <div className={`cbadge ${type === 'Government' ? 'bg-govt' : type === 'Private' ? 'bg-pvt' : 'bg-deemed'}`}>
        {type}
      </div>
    </div>
    <div className="cname">{name}</div>
    <div className="cloc"><Icon name="pin" size={15} />{location}</div>
    <div className="ctags">
      {tags.map((tag, i) => (
        <span key={i} className="ctag">{tag}</span>
      ))}
    </div>
    <div className="cfee">{fee}</div>
    <div className="cbtns">
      <button className="sm-btn sm-navy">Check Cutoffs</button>
      <button className="sm-btn sm-bdr">Fee Details</button>
    </div>
  </div>
)

const CollegesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('All')

  const colleges = [
    { logo: 'CE', name: 'College of Engineering Trivandrum', location: 'Trivandrum', type: 'Government', tags: ['High Cutoff', 'Top Placements'], fee: '₹35,000/yr' },
    { logo: 'PS', name: 'PSG College of Technology', location: 'Coimbatore', type: 'Private', tags: ['Excellent ROI', 'Industry Ties'], fee: '₹2.1L - ₹3.5L/yr' },
    { logo: 'RV', name: 'RV College of Engineering', location: 'Bangalore', type: 'Private', tags: ['Top Rank', 'IT Hub'], fee: '₹3.5L - ₹5L/yr' },
    { logo: 'GV', name: 'Government Engineering College', location: 'Thrissur', type: 'Government', tags: ['Public', 'Research Support'], fee: '₹32,500/yr' },
    { logo: 'TH', name: 'Thiagarajar College of Engineering', location: 'Madurai', type: 'Government', tags: ['Historic', 'Research Focus'], fee: '₹42,000/yr' },
    { logo: 'MA', name: 'M.S. Ramaiah Inst. of Tech', location: 'Bangalore', type: 'Private', tags: ['Prime Location', 'Global Focus'], fee: '₹3L - ₹4.5L/yr' },
    { logo: 'VIT', name: 'VIT University', location: 'Vellore', type: 'Deemed', tags: ['Modern Campus', 'Vast Network'], fee: '₹1.98L - ₹4.9L/yr' },
    { logo: 'SRM', name: 'SRM Institute of Technology', location: 'Chennai', type: 'Deemed', tags: ['Placements+', 'Extracurriculars'], fee: '₹2.5L - ₹4.5L/yr' },
    { logo: 'SC', name: 'SCT College of Engineering', location: 'Trivandrum', type: 'Government', tags: ['State Rank', 'Quality Output'], fee: '₹38,000/yr' }
  ]

  const filtered = colleges.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === 'All' || c.type === filterType
    return matchesSearch && matchesType
  })

  return (
    <div className="page active">
      <section>
        <div className="center reveal">
          <div className="tag">Directory</div>
          <div className="h2">India's Top Engineering Colleges</div>
          <div className="sub">Explore verified data, seat availability, and placement stats to make your shortlist.</div>
        </div>

        <div className="filter-bar reveal">
          <input 
            type="text" 
            className="filter-search" 
            placeholder="Search by college or city..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value="All">All Types</option>
            <option value="Government">Government</option>
            <option value="Private">Private</option>
            <option value="Deemed">Deemed</option>
          </select>
          <select><option>Choose State</option><option>Kerala</option><option>Tamil Nadu</option><option>Karnataka</option></select>
          <select><option>Sort By</option><option>Ranking</option><option>Fees (Low to High)</option></select>
        </div>

        <div className="coll-grid">
          {filtered.map((college) => (
            <CollegeCard key={college.name} {...college} />
          ))}
        </div>
      </section>

      <section className="section-dark">
        <div className="center reveal">
          <div className="h2">Don't See Your College?</div>
          <div className="sub">Our database includes 2,000+ colleges across India beyond this list. Talk to a counsellor to find the one that fits your rank.</div>
          <button className="btn btn-primary">Search Entire Database</button>
        </div>
      </section>
    </div>
  )
}

export default CollegesPage

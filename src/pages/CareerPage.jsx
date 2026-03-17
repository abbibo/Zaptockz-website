import React from 'react'

const ToolCard = ({ num, title, desc, benefit }) => (
  <div className="tcrd">
    <div className="tnum">{num}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
    <div className="twhy"><strong>Why:</strong> {benefit}</div>
  </div>
)

const CareerPage = () => {
  return (
    <div className="page active">
      <section>
        <div className="center">
          <div className="tag">Career Guidance</div>
          <div className="h2">Build a Career, Not Just a Degree</div>
          <div className="sub">We help you align your academic choices with the rapidly changing job market through psychometrics and industry data.</div>
        </div>

        <div className="ctool" style={{ marginTop: '40px' }}>
          <div className="ctool-row">
            <div className="cnum">01</div>
            <div>
              <h3>Psychometric Career Mapping</h3>
              <p>Scientific assessment of your personality, interests, and aptitudes to discover which fields you'll actually excel in.</p>
              <button className="sm-btn sm-navy">Take Assessment</button>
            </div>
          </div>
        </div>

        <div className="ctool">
          <div className="ctool-row">
            <div className="cnum">02</div>
            <div>
              <h3>Future-Ready Skills Audit</h3>
              <p>We analyze whether your chosen college curriculum includes industry-relevant certifications and project-based learning.</p>
              <button className="sm-btn sm-navy">Check Curriculum</button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--light)' }}>
        <div className="center">
          <div className="h2">Career Development Tools</div>
        </div>
        <div className="tool-grid">
          <ToolCard num="Tool 01" title="Salary Benchmarking" desc="See what freshers in different branches are actually earning in the current market." benefit="Plan your ROI effectively." />
          <ToolCard num="Tool 02" title="Placement Audit" desc="Verified placement data beyond the glossy brochures — median salary, recruiters, and roles." benefit="No more fake stats." />
          <ToolCard num="Tool 03" title="Skill Gap Analysis" desc="Find what extra certifications you need during college to be job-ready by final year." benefit="Stay ahead of peers." />
        </div>
      </section>
    </div>
  )
}

export default CareerPage

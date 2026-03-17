import React from 'react'

const PriceCard = ({ featured, badge, name, amount, desc, features, btnClass, btnText }) => (
  <div className={`pcard ${featured ? 'featured' : ''}`}>
    {badge && <div className="pbadge">{badge}</div>}
    <div className="pname">{name}</div>
    <div className="pamount">{amount} <span>(Inc. GST)</span></div>
    <p className="pdesc">{desc}</p>
    <ul className="plist">
      {features.map((f, i) => (
        <li key={i}>
          {f.included ? <span className="chk">✓</span> : <span className="xchk">×</span>}
          {f.text}
        </li>
      ))}
    </ul>
    <button className={`btn-b ${btnClass}`}>{btnText}</button>
  </div>
)

const PricingPage = () => {
  return (
    <div className="page active">
      <section>
        <div className="center">
          <div className="tag">Pricing</div>
          <div className="h2">Transparent Pricing. No Hidden Commissions.</div>
          <div className="sub">We charge for our expertise, not for "referring" you to colleges. Choose the plan that fits your needs.</div>
        </div>

        <div className="price-grid">
          <PriceCard 
            name="Free Starter"
            amount="₹0"
            desc="Explore the platform and get basic admission insights."
            features={[
              { included: true, text: "College Directory Access" },
              { included: true, text: "Basic Cutoff Data" },
              { included: true, text: "Scholarship Matches" },
              { included: false, text: "Personal Counsellor" },
              { included: false, text: "Application Tracking" }
            ]}
            btnClass="btn-bdr"
            btnText="Get Started"
          />
          <PriceCard 
            badge="Popular"
            featured={true}
            name="Counselling Plus"
            amount="₹1,999"
            desc="One-on-one expert guidance for state-level counselling."
            features={[
              { included: true, text: "Personal Counsellor" },
              { included: true, text: "Option Entry Support" },
              { included: true, text: "Category Reservation Help" },
              { included: true, text: "Rank Analysis" },
              { included: false, text: "Direct Admission Support" }
            ]}
            btnClass="btn-acc"
            btnText="Choose Plan"
          />
          <PriceCard 
            name="Premium Support"
            amount="₹4,999"
            desc="Comprehensive end-to-end support for top-tier colleges."
            features={[
              { included: true, text: "Everything in Plus" },
              { included: true, text: "Direct Admission Help" },
              { included: true, text: "Fee Negotiation" },
              { included: true, text: "Priority Support" },
              { included: true, text: "Document Verification" }
            ]}
            btnClass="btn-navy"
            btnText="Choose Plan"
          />
          <PriceCard 
            name="Enterprise"
            amount="Custom"
            desc="For agencies and groups needing custom solutions."
            features={[
              { included: true, text: "Custom API Access" },
              { included: true, text: "Bulk Tracking" },
              { included: true, text: "Whitelabel Tools" },
              { included: true, text: "Dedicated Account Mgr" },
              { included: true, text: "Group Discounts" }
            ]}
            btnClass="btn-bdr"
            btnText="Contact Sales"
          />
        </div>
      </section>

      <section style={{ background: 'var(--light)' }}>
        <div className="faq-wrap">
          <div className="center"><div className="h2">Frequently Asked Questions</div></div>
          <div style={{ marginTop: '30px' }}>
            <div className="faq-item open">
              <div className="faq-q">How do you charge such low fees compared to others? <span className="faq-icon">+</span></div>
              <div className="faq-a">We are a technology-first platform. By automating the data collection and application tracking, we reduce our operational costs and pass those savings to you.</div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Do you take money from colleges too? <span className="faq-icon">+</span></div>
              <div className="faq-a">No. We maintain neutrality to ensure you get the best advice. If a college offers a scholarship, that goes directly to the student's fee reduction.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingPage

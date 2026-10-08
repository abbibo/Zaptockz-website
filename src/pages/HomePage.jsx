import React from 'react'
import Icon from '../components/Icon'

const Hero = ({ onCtaClick, onExploreClick }) => (
  <div className="hero">
    <h1 className="reveal">Your Right College Is Out There.<br /><span>We'll Help You Find It.</span></h1>
    <p className="reveal">India's emerging admission platform — expert counselling, smart tools, and end-to-end support so your Class 12 decision is confident, not confusing.</p>
    <div className="hero-btns reveal">
      <button className="btn btn-primary" onClick={onCtaClick}>Start Free Counselling</button>
      <button className="btn btn-outline" onClick={onExploreClick}>Explore Colleges</button>
    </div>
    <div className="trust-strip reveal">
      <div className="trust-item"><div className="tdot"></div>200+ students guided</div>
      <div className="trust-item"><div className="tdot"></div>Kerala · Tamil Nadu · Karnataka</div>
      <div className="trust-item"><div className="tdot"></div>Free first session</div>
    </div>
  </div>
)

const Stats = () => (
  <div className="stats-row">
    <div className="stat reveal"><div className="stat-n">200+</div><div className="stat-l">Students Guided</div></div>
    <div className="stat reveal"><div className="stat-n">3</div><div className="stat-l">States Active</div></div>
    <div className="stat reveal"><div className="stat-n">50+</div><div className="stat-l">Colleges Listed</div></div>
    <div className="stat reveal"><div className="stat-n">2024</div><div className="stat-l">Founded</div></div>
  </div>
)

const ProblemSection = () => (
  <section className="alt">
    <div className="center reveal">
      <div className="tag">The Problem</div>
      <div className="h2">Choosing a College Shouldn't Feel This Hard</div>
      <div className="sub">After Class 12, most students navigate one of life's biggest decisions with incomplete information and no real support.</div>
    </div>
    <div className="g3">
      <div className="card reveal"><div className="ci"><Icon name="target" /></div><h3>Wrong College Choices</h3><p>Students apply to institutions that don't match their profile — and lose seats they deserved elsewhere.</p></div>
      <div className="card reveal"><div className="ci"><Icon name="alarm" /></div><h3>Missed Deadlines</h3><p>With dozens of exam and counselling dates, important rounds get missed with no one tracking them.</p></div>
      <div className="card reveal"><div className="ci"><Icon name="banknote" /></div><h3>Overpaying for Less</h3><p>Families pay inflated fees to consultants who disappear after taking money with nothing to show.</p></div>
    </div>
  </section>
)

const ProcessSteps = ({ onStartClick }) => (
  <section>
    <div className="center reveal">
      <div className="tag">How It Works</div>
      <div className="h2">Your Admission Journey, Step by Step</div>
    </div>
    <div className="steps reveal-line">
      <div className="step reveal"><div className="step-n">1</div><h3>Understand Your Profile</h3><p>Share your marks, interests, and goals. Our counsellors map out the right courses and colleges for you.</p></div>
      <div className="step reveal"><div className="step-n">2</div><h3>Explore Your Options</h3><p>Compare colleges, check cutoffs, and shortlist the best-fit institutions across India.</p></div>
      <div className="step reveal"><div className="step-n">3</div><h3>Apply with Confidence</h3><p>We handle paperwork, track deadlines, and guide you through every form — nothing falls through the cracks.</p></div>
      <div className="step reveal"><div className="step-n">4</div><h3>Secure Your Seat</h3><p>From scholarship matching to loan assistance, we stay with you until you're enrolled and settled.</p></div>
    </div>
    <div className="section-cta reveal">
      <button className="btn btn-primary" onClick={onStartClick}>Begin Your Journey</button>
    </div>
  </section>
)

const Testimonials = () => (
  <section className="alt">
    <div className="center reveal"><div className="tag">Student Stories</div><div className="h2">Students Who Found Their Path</div></div>
    <div className="g3">
      <div className="tcard reveal"><div className="stars">★★★★★</div><p className="ttext">"I had no idea which engineering college to target after KEAM. The counsellor mapped out my options in one session and helped me apply before I knew the deadline was close."</p><div className="tauthor">Arjun M.</div><div className="trole">B.Tech Student, Kerala</div></div>
      <div className="tcard reveal"><div className="stars">★★★★★</div><p className="ttext">"Getting a scholarship felt impossible until Zaptockz matched me with two I actually qualified for. One covered my entire first year."</p><div className="tauthor">Sneha R.</div><div className="trole">BCA Student, Tamil Nadu</div></div>
      <div className="tcard reveal"><div className="stars">★★★★★</div><p className="ttext">"The application tracker kept me calm throughout. I always knew what was pending and what was done — no last-minute surprises."</p><div className="tauthor">Rahul K.</div><div className="trole">B.Com Student, Karnataka</div></div>
    </div>
  </section>
)

const CtaBanner = ({ onCtaClick, onExploreClick }) => (
  <div className="cta-banner">
    <h2 className="reveal">Your Future Starts with One Decision. Make It the Right One.</h2>
    <p className="reveal">Book a free counselling session — no pressure, no confusion.</p>
    <div className="cta-btns reveal">
      <button className="btn btn-primary" onClick={onCtaClick}>Book My Free Session</button>
      <button className="btn btn-outline" onClick={onExploreClick}>Explore Colleges</button>
    </div>
  </div>
)

const HomePage = ({ onNavigate }) => {
  return (
    <div className="page active">
      <Hero onCtaClick={() => onNavigate('contact')} onExploreClick={() => onNavigate('colleges')} />
      <Stats />
      <ProblemSection />
      <ProcessSteps onStartClick={() => onNavigate('contact')} />
      <Testimonials />
      <CtaBanner onCtaClick={() => onNavigate('contact')} onExploreClick={() => onNavigate('colleges')} />
    </div>
  )
}

export default HomePage

import React from 'react'

const BlogCard = ({ cat, title, desc, date, emoji }) => (
  <div className="bcard">
    <div className="bimg" style={{ background: 'var(--light)' }}>{emoji}</div>
    <div className="bbody">
      <div className="bcat">{cat}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="bmeta">Posted on {date}</div>
    </div>
  </div>
)

const BlogPage = () => {
  return (
    <div className="page active">
      <section>
        <div className="center">
          <div className="tag">Insights</div>
          <div className="h2">The Admission Guidebook</div>
          <div className="sub">Latest news, deep-dives into exam patterns, and tips for your Class 12 journey.</div>
        </div>

        <div className="blog-grid">
          <BlogCard 
            emoji="📚" 
            cat="Exams" 
            title="Understanding the KEAM 2025 Normalization Process" 
            desc="How different boards are balanced to create a fair rank list. What you need to know." 
            date="Oct 12, 2024" 
          />
          <BlogCard 
            emoji="🏗️" 
            cat="Careers" 
            title="CS vs IT vs AI/ML: Which Branch Should You Pick?" 
            desc="Breaking down the curriculum and job market for the most popular engineering branches." 
            date="Oct 10, 2024" 
          />
          <BlogCard 
            emoji="🏥" 
            cat="Abroad" 
            title="Is Georgia or Philippines Better for MBBS in 2025?" 
            desc="A cost vs quality comparison for Indian medical aspirants looking overseas." 
            date="Oct 08, 2024" 
          />
        </div>
      </section>
    </div>
  )
}

export default BlogPage

import React from 'react'
import Icon from '../components/Icon'

const ContactPage = () => {
  return (
    <div className="page active">
      <section>
        <div className="contact-grid">
          <div className="cinfo reveal">
            <div className="tag">Contact Us</div>
            <div className="h2">We're Here to Listen</div>
            <p className="sub">Whether you're a student, a parent, or an institution, our team is ready to help you navigate the next steps.</p>
            
            <div className="citem">
              <div className="cicon"><Icon name="pin" size={20} /></div>
              <div>
                <h4>Main Office</h4>
                <p>Trivandrum · Kochi · Chennai<br />(By appointment only)</p>
              </div>
            </div>
            <div className="citem">
              <div className="cicon"><Icon name="mail" size={20} /></div>
              <div>
                <h4>Email Support</h4>
                <p>hello@zaptockz.com<br />24/7 Response Desk</p>
              </div>
            </div>
            <div className="citem">
              <div className="cicon"><Icon name="chat" size={20} /></div>
              <div>
                <h4>WhatsApp Support</h4>
                <p>+91 90000 00000<br />(Mon-Sat, 9 AM - 6 PM)</p>
              </div>
            </div>
          </div>

          <div className="form-box reveal">
            <h3>Send a Message</h3>
            <p className="sub form-note">Fill out the form below and a counsellor will reach out within 4 hours.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); }}>
              <div className="fr">
                <div className="fg-single"><label>Full Name</label><input type="text" placeholder="John Doe" required /></div>
                <div className="fg-single"><label>Phone Number</label><input type="tel" placeholder="+91 00000 00000" required /></div>
              </div>
              <div className="fg-single"><label>Current Education</label><select><option>Plus Two (Ongoing)</option><option>Plus Two (Completed)</option><option>Degree Student</option><option>Parent/Other</option></select></div>
              <div className="fg-single"><label>Your Question</label><textarea placeholder="How can we help you today?"></textarea></div>
              <button type="submit" className="btn btn-primary btn-block">Submit Request</button>
            </form>
          </div>
        </div>
      </section>

      <section className="urgent-wrap">
        <div className="urgent reveal">
          <div className="h2">For Urgent Assistance</div>
          <p className="sub">Are you facing a counselling deadline today? Skip the form and call us directly.</p>
          <div className="urgent-btns">
            <button className="btn btn-primary">Call +91 90000 00000</button>
            <button className="btn btn-outline-navy">Chat on WhatsApp</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

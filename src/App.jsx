import { useState } from 'react'
import './App.css'

const limerick = `There once was a man with a mower,
Who made every lawn look much lower.
  He'd trim all the grass
  With notable class,
And leave every neighbour in awe-r.`

function Modal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <h2>A Poem for Your Lawn</h2>
        <pre className="limerick">{limerick}</pre>
        <p className="modal-sub">We take our craft seriously. Our poetry? Less so.</p>
        <button className="btn btn-primary" onClick={onClose}>Mow Yeah!</button>
      </div>
    </div>
  )
}

export default function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {/* Nav */}
      <header className="nav">
        <div className="nav-inner">
          <div className="logo">
            <span className="logo-icon">🌿</span>
            <span>Sir Mows-a-Lot</span>
          </div>
          <nav>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Premium Lawn Care</p>
          <h1>I like big yards<br />and I cannot lie.</h1>
          <p className="hero-sub">
            Professional lawn mowing, edging, and maintenance for homes and
            businesses across Meadowbrook. Your neighbours will be jealous.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Get a Free Quote</a>
            <button className="btn btn-outline" onClick={() => setShowModal(true)}>
              Read Our Manifesto
            </button>
          </div>
        </div>
        <div className="hero-graphic" aria-hidden="true">
          <div className="grass-rows">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="grass-row" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
          <div className="mower">🚜</div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <div className="cards">
            {[
              { icon: '✂️', title: 'Lawn Mowing', desc: 'Weekly, fortnightly, or one-off cuts. We leave those satisfying stripe patterns at no extra charge.' },
              { icon: '📐', title: 'Edging & Trimming', desc: 'Crisp borders along paths, driveways, and garden beds. Precision is our middle name.' },
              { icon: '🌱', title: 'Lawn Health', desc: 'Fertilising, aeration, and weed control to keep your turf thick, green, and envy-inducing.' },
              { icon: '🍂', title: 'Seasonal Clean-Up', desc: 'Leaf blowing, debris removal, and end-of-season tidy-ups so your yard looks great year round.' },
            ].map(({ icon, title, desc }) => (
              <div className="card" key={title}>
                <div className="card-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section section-alt">
        <div className="container about-grid">
          <div>
            <h2 className="section-title">About Us</h2>
            <p>
              Sir Mows-a-Lot was founded in 2008 by brothers Dale and Kevin Trimshaw,
              who got tired of watching their neighbours struggle with overgrown lawns.
              Armed with a beat-up ride-on and an unshakeable belief that every yard
              deserves to look its best, they set out to change Meadowbrook — one lawn at a time.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Today we run a fleet of modern mowers and serve over 200 happy customers
              across the suburb. Fully insured, always on time, and 100% committed to
              leaving your grass greener on <em>your</em> side of the fence.
            </p>
          </div>
          <div className="stats">
            {[
              { value: '200+', label: 'Happy Customers' },
              { value: '15+', label: 'Years Experience' },
              { value: '5★', label: 'Average Rating' },
              { value: '0', label: 'Lawns Left Shaggy' },
            ].map(({ value, label }) => (
              <div className="stat" key={label}>
                <span className="stat-value">{value}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container contact-grid">
          <div>
            <h2 className="section-title">Get in Touch</h2>
            <p>Ready for the best-looking lawn on the street? Reach out — we'll get back to you within one business day.</p>
            <ul className="contact-list">
              <li>
                <span className="contact-icon">📍</span>
                <span>14 Clover Street, Meadowbrook VIC 3180, Australia</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span>(03) 9555 0142</span>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <span>hello@sirmowsalot.com.au</span>
              </li>
              <li>
                <span className="contact-icon">🕐</span>
                <span>Mon – Sat: 7:00 am – 5:00 pm</span>
              </li>
            </ul>
          </div>
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <label>
              Name
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" placeholder="your@email.com" required />
            </label>
            <label>
              Message
              <textarea rows={4} placeholder="Tell us about your lawn..." required />
            </label>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Sir Mows-a-Lot. All blades reserved.</p>
      </footer>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </>
  )
}

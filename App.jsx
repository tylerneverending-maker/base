import Navbar from './Navbar'
import Card from './Card'
import Footer from './Footer'
import PortfolioItem from './PortfolioItem'

function App() {
  return (
    <>
      <Navbar />

      <section id="home" className="hero">
        <div className="container">
            <h1>Building Strong Digital Foundations</h1>
            <p>We craft stunning websites and robust applications that bridge the gap between your brand and your audience.</p>
            <a href="#contact" className="btn">Start Your Project</a>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
            <h2>Our Expertise</h2>
            <div className="grid">
                <Card 
                    title="Web Design" 
                    description="User-centric interfaces designed to engage and convert." 
                />
                <Card 
                    title="Development" 
                    description="Clean, scalable code using modern frameworks and best practices." 
                />
                <Card 
                    title="Strategy" 
                    description="Digital roadmaps to help your business grow online." 
                />
            </div>
        </div>
      </section>

      <section id="work" className="work">
        <div className="container">
            <h2>Our Recent Work</h2>
            <div className="portfolio-grid">
                <PortfolioItem 
                    image="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    title="Project Alpha"
                    category="E-commerce Platform"
                />
                <PortfolioItem 
                    image="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    title="Project Beta"
                    category="Corporate Branding"
                />
                <PortfolioItem 
                    image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    title="Project Gamma"
                    category="Mobile Application"
                />
            </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
            <h2>Let's Build Something Together</h2>
            <p>Ready to elevate your online presence? Reach out to us today.</p>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
            </form>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
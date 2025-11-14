import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Rekindle from "./components/Rekindle";
import "./App.css";

const App = () => {
  return (
    <div className="app-root">
      <Navbar />
      <Section className="hero-section">
        <Hero />
      </Section>
      <Section>
        <Rekindle></Rekindle>
      </Section>
      <Section>
        <h1>And another banner</h1>
      </Section>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand-container">
              <img src="./logo/Lumin.svg" alt="Lumin Logo" className="footer-logo" />
              <h3 className="footer-brand">Lumin</h3>
            </div>
            <p className="footer-tagline">
              Strike a balance between moments of tension and genuine wonder.
            </p>
          </div>

          <div className="footer-section">
            <h4>Product</h4>
            <ul className="footer-links">
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" aria-label="Twitter">
                𝕏
              </a>
              <a href="#" aria-label="LinkedIn">
                in
              </a>
              <a href="#" aria-label="GitHub">
                ⚙
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Lumin. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

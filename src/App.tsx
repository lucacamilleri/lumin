import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";

import "./App.css";

const App = () => {
  return (
    <div className="app-root">
      <Navbar />
      <Section className="hero-section">
        <Hero />
      </Section>
      <Section>
        <h1>Test</h1>
      </Section>
    </div>
  );
};

export default App;

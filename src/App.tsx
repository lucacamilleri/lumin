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
        <h1>Here we can place another banner</h1>
      </Section>
      <Section>
        <h1>And another banner</h1>
      </Section>
    </div>
  );
};

export default App;

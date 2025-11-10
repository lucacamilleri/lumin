import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Rekindle from "./components/Rekindle";
import "./App.css";
import Survive from "./components/Survive";

const App = () => {
  return (
    <div className="app-root">
      <Navbar />
      <Section className="hero-section">
        <Hero />
      </Section>
      <Section>
        <Rekindle>
        </Rekindle>
      </Section>
      <Section>
       <Survive/>
      </Section>
    </div>
  );
};

export default App;

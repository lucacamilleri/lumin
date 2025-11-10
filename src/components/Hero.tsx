import CTAButton from "./CTAButton";

const PlatformIcon = ({ label }: { label: string }) => {
  const src = `/platforms/${label}.svg`;
  let link = "";

  if (label === "Playstation") {
    link = "https://www.playstation.com/";
  } else if (label === "Steam") {
    link = "https://store.steampowered.com/";
  } else if (label === "Xbox") {
    link = "https://www.xbox.com/";
  } else {
    link = "#";
  }

  return (
    <div className="platform-icon" aria-hidden>
      <img
        src={src}
        alt={label}
        className="platform-img"
        onClick={() => window.open(link)}
      />
    </div>
  );
};

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-inner">
        <div className="hero-eyebrow">A SINGLE LIGHT IN ENDLESS SHADOW</div>

        <h1 className="hero-title">
          L
          <img 
            src="src/moon.png" 
 
            className="inline-moon"
          />
          M I N
        </h1>


        <div className="hero-cta">
          <CTAButton>Pre-Order Now</CTAButton>
        </div>

        <div className="hero-tagline">
          ATMOSPHERIC PLATFORMER | SINGLE PLAYER | STORY-DRIVEN EXPLORATION
        </div>

        <div className="hero-platforms">
          <div className="available">Available On</div>
        </div>
        <div className="hero-platforms">
          <div className="platform-list">
            <PlatformIcon label="Steam" />
            <PlatformIcon label="Playstation" />
            <PlatformIcon label="Xbox" />
          </div>
        </div>
        <span className="section-divider">The Light <span className="glow">Awakens</span></span>
      </div>
    </main>
  );
};

export default Hero;

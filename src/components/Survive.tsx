import React from "react";
import "../App.css";
import surviveVideo from "../Survive.mp4";

type SurviveProps = {
    children?: React.ReactNode;
    className?: string;
};

const Survive: React.FC<SurviveProps> = ({ children, className }) => {
    return (
        <div className={className ? `survive ${className}` : "survive"}>
            
            {/* LEFT PANEL */}
            <div className="survive-left">
                <h2 className="survive-title">
                    <span>SURVIVE</span><br />
                    <span>THE</span><br />
                    <span>
                    <span className="shadows-gradient">SHAD</span>
                    <span className="ows-stroke">OWS</span>
                </span>

                </h2>
            </div>

            {/* RIGHT PANEL */}
            <div className="survive-right">
                <video
                    src={surviveVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="survive-video"
                />
                {children}
            </div>

        </div>
    );
};

export default Survive;

import React from "react";
import "../App.css";
import dawnVideo from "/final.mp4";

type DawnProps = {
    children?: React.ReactNode;
    className?: string;
};

const Dawn: React.FC<DawnProps> = ({ children, className }) => {
    return (
        <div className={className ? `dawn ${className}` : "dawn"}>
            
            {/* LEFT PANEL */}
            <div className="dawn-left">
                <h2 className="dawn-title">
                    <span>BRING</span><br />
                    <span className="no-wrap">BACK THE</span><br />
                    <span>DAWN</span>
                </h2>


            </div>

            {/* RIGHT PANEL */}
            <div className="dawn-right">
                <video
                    src={dawnVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="dawn-video"
                />
                {children}
            </div>

        </div>
    );
};

export default Dawn;

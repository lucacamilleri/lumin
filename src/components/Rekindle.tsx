import React from "react";
import rekindle from "../rekindle.mp4"; // adjust path if your video lives elsewhere

type RekindleProps = {
    children?: React.ReactNode;
    className?: string;
};

const Rekindle: React.FC<RekindleProps> = ({ children, className }) => {
    return (
        <div
            className={className ? `rekindle ${className}` : "rekindle"}
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                overflow: "hidden",
            }}
        >
            <video
                src={rekindle}
                autoPlay
                muted
                loop
                playsInline
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Rekindle;
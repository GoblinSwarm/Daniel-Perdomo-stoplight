import React, { useState } from "react";

const Home = () => {
    const [selectedColor, setSelectedColor] = useState("red");

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="stoplight-container">
                <div className="post"></div> {/* Este es el poste */}
                <div className="stoplight">
                    <div 
                        onClick={() => setSelectedColor("red")}
                        className={"light red" + (selectedColor === "red" ? " glow" : "")}>
                    </div>
                    <div 
                        onClick={() => setSelectedColor("yellow")}
                        className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}>
                    </div>
                    <div
                        onClick={() => setSelectedColor("green")}
                        className={"light green" + (selectedColor === "green" ? " glow" : "")}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
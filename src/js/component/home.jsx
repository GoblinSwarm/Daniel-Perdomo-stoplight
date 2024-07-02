import React, { useState } from "react";

const Home = () => {
    const [selectedColor, setSelectedColor] = useState("red");

    const toggleColor = () => {
        if (selectedColor === "red") {
            setSelectedColor("yellow");
        } else if (selectedColor === "yellow") {
            setSelectedColor("green");
        } else if (selectedColor === "green") {
            setSelectedColor("purple");
        } else {
            setSelectedColor("red");
        }
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className="row">
                <div className="col-md-12">
                    <div className="stoplight">
                        <div 
                            onClick={() => setSelectedColor("red")}
                            className={"light red" + (selectedColor === "red" ? "glow" : "")}>
                        </div>
                        <div 
                            onClick={() => setSelectedColor("yellow")}
                            className={"light yellow" + (selectedColor === "yellow" ? "glow" : "")}>
                        </div>
                        <div
                            onClick={() => setSelectedColor("green")}
                            className={"light green" + (selectedColor === "green" ? "glow" : "")}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

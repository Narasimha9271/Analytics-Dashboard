import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import ColorButton from "./components/ColorButton";

const App = () => {
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorChange = (color) => {
        setSelectedColor(color);
        document.body.style.backgroundColor = color;
    };

    return (
        <div style={{ display: "flex", height: "100vh", bottom: "0" }}>
            <Sidebar />

            <div
                style={{ display: "flex", flexDirection: "column", flex: "1" }}
            >
                <div style={{ flex: "1" }}>
                    <Navbar color={selectedColor} />
                    <Body color={selectedColor} />
                </div>
                <div style={{ position: "sticky", bottom: "0" }}>
                    <ColorButton onColorChange={handleColorChange} />
                </div>
                <Footer color={selectedColor} />
            </div>
        </div>
    );
};

export default App;

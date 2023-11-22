import React from "react";
import Navbar from "./Navbar.tsx";
import HomeLogo2 from "./HomeLogo2.tsx";
import HardFacts from "./HardFacts.tsx";

const Home: React.FC = () => {
    return (
        <div className="bg-black">
            <Navbar/>
            <div className="bg-black flex flex-col justify-normal
             items-center text-center">
                <HomeLogo2/>
                <HardFacts/>
            </div>
        </div>
    )
}
export default Home;
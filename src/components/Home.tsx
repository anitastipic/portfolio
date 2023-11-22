import Navbar from "./Navbar.tsx";
import HomeLogo2 from "./HomeLogo2.tsx";
import HardFacts from "./HardFacts.tsx";

export default function Home() {
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
import Navbar from "./Navbar.tsx";
import HomeLogo2 from "./HomeLogo2.tsx";
import Memory from "./Memory.tsx"
import {useState} from "react";
import WonMemory from "./WonMemory.tsx";
import TypeWriter from "./TypeWriter.tsx";
import EducationTitle from "./EducationTitle.tsx";

export default function Home() {
    const [wonMemory, setWonMemory] = useState(false);

    function handleGameWin() {
        setWonMemory(!wonMemory);
    }

    return (
        <div className="bg-black">
            <div className="bg-black">
                <HomeLogo2/>
                <EducationTitle
                    text={'Education'}
                />
                {wonMemory ? <WonMemory/> : <Memory onGameWin={handleGameWin}/>}
            </div>
        </div>
    )
}
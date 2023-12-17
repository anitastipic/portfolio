import HomeLogo2 from "./HomeLogo.tsx";
import Memory from "./Memory.tsx"
import {useState} from "react";
import WonMemory from "./WonMemory.tsx";
import Title from "./Title.tsx";
import HorizontalEducationPanel from "./HorizontalEducationPanel.tsx";

export default function Home() {
    const [wonMemory, setWonMemory] = useState(false);

    function handleGameWin() {
        setWonMemory(!wonMemory);
    }

    return (
        <div className="bg-black">
            <div className="bg-black">
                <HomeLogo2/>
                <Title
                    text={'Education'}
                />
                <HorizontalEducationPanel/>
                {wonMemory ? <WonMemory/> : <Memory onGameWin={handleGameWin}/>}
            </div>
        </div>
    )
}
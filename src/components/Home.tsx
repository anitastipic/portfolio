import HomeLogo from "./HomeLogo.tsx";
import Memory from "./Memory.tsx"
import {useState} from "react";
import Title from "./Title.tsx";
import SkillsetTitle from "./SkillsetTitle.tsx";
import HorizontalEducationPanel from "./HorizontalEducationPanel.tsx";

export default function Home() {
    const [wonMemory, setWonMemory] = useState(false);

    function handleGameWin() {
        setWonMemory(!wonMemory);
    }


    return (
        <div className="bg-black">
            <div className="bg-black">
                <HomeLogo/>
                <Title
                    text={'Education'}
                />
                <HorizontalEducationPanel/>
                <SkillsetTitle
                    text={'Skillset Memory'}
                />
                <Memory onGameWin={handleGameWin}/>
            </div>
        </div>
    )
}
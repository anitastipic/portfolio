import React, {useState} from "react";
import TypeWriter from "./TypeWriter.tsx";

const HardFacts: React.FC = () => {
    const [showSecond, setShowSecond] = useState(false);
    const [showThird, setShowThird] = useState(false);
    const [showFourth, setShowFourth] = useState(false);
    return (
        <div className="h-screen">
            <div className=" flex flex-col items-start h-[30vh] w-[40vw] ml-[50vw] mt-[45vh]">
                <TypeWriter
                    text={"Annita Stipic"}
                    className={"font-bold text-3xl text-amber-50 mb-3"}
                    onComplete={() => setShowSecond(true)}
                />
                {showSecond && (
                    <TypeWriter
                        text={"Viienna"}
                        className={"font-normal text-2xl text-amber-50"}
                        onComplete={() => setShowThird(true)}
                    />
                )}
                {showThird && (
                    <TypeWriter
                        text={"Geerman, English, Croatian"}
                        className={"font-normal text-2xl text-amber-50"}
                        onComplete={() => setShowFourth(true)}
                    />
                )}
                {showFourth && (
                    <TypeWriter
                        text={"wwww.linkedin.com/in/anita-stipic"}
                        className={"font-normal text-2xl text-amber-50"}
                    />
                )}
            </div>
        </div>
    )
}
export default HardFacts;
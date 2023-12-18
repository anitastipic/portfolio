import TypeWriter from "./TypeWriter.tsx";
import ScrollTrigger from 'gsap/ScrollTrigger';
import {useEffect, useState} from "react";

type TitleProps = {
    text: string;
}

export default function EducationTitle({text}: TitleProps) {
    const [startTypingSkillset, setStartTypingSkillset] = useState(false);
    const [showStaticSkillset, setShowStaticSkillset] = useState(false);

    useEffect(() => {

        ScrollTrigger.create({
            trigger: '#skillsetPin',
            start: 'top top',
            end: '+=100',
            pin: true,
            onEnter: () => {
                setStartTypingSkillset(true);
            },
            onLeave: () => {
                setStartTypingSkillset(false)
                setShowStaticSkillset(true);
            },
        });
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const enableScroll = () => {
        document.body.style.overflow = 'visible';
    };

    return (
        <div id="skillsetPin" className="text-5xl font-bold text-white h-screen w-screen flex items-center justify-center">
            {showStaticSkillset
                ? <div>{text}</div>
                : <TypeWriter
                    text={text}
                    typingDelay={130}
                    startTyping={startTypingSkillset}
                    onComplete={enableScroll}
                />
            }
        </div>


    )
        ;
}

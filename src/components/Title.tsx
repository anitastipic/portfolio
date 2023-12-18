import TypeWriter from "./TypeWriter.tsx";
import ScrollTrigger from 'gsap/ScrollTrigger';
import {useEffect, useState} from "react";

type TitleProps = {
    text: string;
}

export default function EducationTitle({text}: TitleProps) {
    const [startTyping, setStartTyping] = useState(false);
    const [showStatic, setShowStatic] = useState(false);

    useEffect(() => {

        ScrollTrigger.create({
            trigger: '#pin',
            start: 'top top',
            end: '+=100',
            pin: true,
            onEnter: () => {
                setStartTyping(true);
            },
            onLeave: () => {
                setStartTyping(false)
                setShowStatic(true);
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
        <div id="pin" className="text-5xl font-bold text-white h-screen w-screen flex items-center justify-center">
            {showStatic
                ? <div>{text}</div>
                : <TypeWriter
                    text={text}
                    typingDelay={150}
                    startTyping={startTyping}
                    onComplete={enableScroll}
                />
            }
        </div>


    )
        ;
}

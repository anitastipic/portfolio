import TypeWriter from "./TypeWriter.tsx";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {useEffect, useState} from "react";

type TitleProps = {
    text: string;
}

export default function EducationTitle({text}: TitleProps) {
    const [startTyping, setStartTyping] = useState(false);
    const [showStatic, setShowStatic] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: '#pin',
            start: 'top top',
            end: '+=500',
            pin: true,
            onEnter: () => setStartTyping(true),
            onLeave: () => {
                setStartTyping(false)
                setShowStatic(true);
            },
        });
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div id="pin" className="text-5xl font-bold text-white h-screen w-screen flex items-center justify-center">
            {showStatic
                ? <div>{text}</div>
                : <TypeWriter
                    text={text}
                    typingDelay={120}
                    startTyping={startTyping}
                />
            }
        </div>


    )
        ;
}

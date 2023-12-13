import TypeWriter from "./TypeWriter.tsx";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {useEffect, useState} from "react";

type TitleProps = {
    text: string;
}

export default function EducationTitle({ text }: TitleProps) {
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: '#pin',
            start: 'top top',
            end: '+=500',
            pin: true,
            onEnter: () => setStartTyping(true),
            onLeave: () => setStartTyping(false),
        });
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div id="pin" className={`h-screen w-screen flex items-center justify-center`}>
            <TypeWriter
                text={text}
                className={'text-5xl font-bold text-white'}
                typingDelay={120}
                startTyping={startTyping}
            />
        </div>
    );
}

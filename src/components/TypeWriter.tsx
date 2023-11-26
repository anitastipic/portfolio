import {useEffect, useState} from "react";

type TypeWriterProps = {
    text: string;
    typingDelay?: number;
    className?: string;
    onComplete?: () => void;
}

export default function TypeWriter({text, typingDelay = 100, className = '', onComplete}: TypeWriterProps)  {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let currentIndex = -1;
        const timer = setInterval(() => {
            currentIndex++;
            setDisplayedText((prev) => {
                return prev + text.charAt(currentIndex)
            });
            if (currentIndex >= text.length) {
                clearInterval(timer);
                if(onComplete) {
                    onComplete();
                }
            }
        }, typingDelay);
        return () => clearInterval(timer);
    }, [text, typingDelay]);

    return (
        <div className={className}>{displayedText}</div>
    )
}
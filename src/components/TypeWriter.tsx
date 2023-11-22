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
        let currentIndex = 0;
        const timer = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(currentIndex));
            console.log(currentIndex);
            console.log(text.charAt(currentIndex));
            currentIndex++;
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
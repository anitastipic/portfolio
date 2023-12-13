import {useEffect, useState} from "react";

type TypeWriterProps = {
    text: string;
    typingDelay?: number;
    className?: string;
    onComplete?: () => void;
    startTyping: boolean;
}

export default function TypeWriter({text, typingDelay = 100, className = '', onComplete, startTyping}: TypeWriterProps)  {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        if (startTyping) {
            let currentIndex = -1;
            const timer = setInterval(() => {
                currentIndex++;
                setDisplayedText((prev) => prev + text.charAt(currentIndex));
                if (currentIndex >= text.length - 1) {
                    clearInterval(timer);
                    if(onComplete) {
                        onComplete();
                    }
                }
            }, typingDelay);
            return () => clearInterval(timer);
        } else {
            // Reset the typing effect if startTyping becomes false
            setDisplayedText('');
        }
    }, [text, typingDelay, startTyping]);

    return (
        <div className={className}>{displayedText}</div>
    )
}
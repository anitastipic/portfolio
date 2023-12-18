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

    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
    };

    const enableScroll = () => {
        document.body.style.overflow = 'visible';
    };

    useEffect(() => {
        if (startTyping) {
            disableScroll();
            let currentIndex = -1;
            const timer = setInterval(() => {
                currentIndex++;
                setDisplayedText((prev) => prev + text.charAt(currentIndex));
                if (currentIndex >= text.length - 1) {
                    clearInterval(timer);
                    if(onComplete) {
                        onComplete();
                        enableScroll();
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
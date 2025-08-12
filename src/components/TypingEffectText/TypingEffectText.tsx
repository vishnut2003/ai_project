"use client";

import { ReactElement, useEffect, useState } from "react";

interface TypingAnimationProps {
    text: string | ReactElement;
    duration?: number;
    className?: string;
}

function TypingEffectText({
    text,
    duration = 200,
    className,
}: TypingAnimationProps) {

    const [displayedText, setDisplayedText] = useState<string>("");
    const [i, setI] = useState<number>(0);

    useEffect(() => {
        const typingEffect = setInterval(() => {
            if (i < text.toString().length) {
                setDisplayedText(text.toString().substring(0, i + 1));
                setI(i + 1);
            } else {
                clearInterval(typingEffect);
            }
        }, duration);

        return () => {
            clearInterval(typingEffect);
        };
    }, [duration, i, text]);

    return (
        <h1
            className={className}
        >
            {displayedText ? displayedText : text}
        </h1>
    );
}

export default TypingEffectText
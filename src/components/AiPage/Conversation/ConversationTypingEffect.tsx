import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

const TypingEffect: React.FC<{ text: string; typingSpeed?: number }> = ({
  text,
  typingSpeed = 30, // Reduced default typing speed for faster rendering
}) => {
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    let index = currentMessage.length; // Start from the current length
    if (index >= text.length) return; // Prevent retyping already displayed text

    const interval = setInterval(() => {
      if (index < text.length) {
        setCurrentMessage((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [text, typingSpeed]);

  return (
    <div>
      {/* Render the progressively typed text as Markdown */}
      <Markdown>{currentMessage}</Markdown>
    </div>
  );
};

export default TypingEffect;

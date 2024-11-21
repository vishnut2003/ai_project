import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

const TypingEffect: React.FC<{ text: string; typingSpeed?: number }> = ({ text, typingSpeed = 50 }) => {
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    let index = 0;
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

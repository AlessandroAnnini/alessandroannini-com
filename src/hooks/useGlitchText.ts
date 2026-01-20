import { useState, useEffect, useRef } from 'react';

export const useGlitchText = (
  originalText: string,
  interval = 3000,
  glitchDuration = 150
) => {
  const [glitchText, setGlitchText] = useState(originalText);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
      let glitched = '';

      for (let i = 0; i < originalText.length; i++) {
        // NEVER replace spaces to prevent layout shift
        if (originalText[i] === ' ') {
          glitched += ' ';
        } else if (Math.random() < 0.1) {
          glitched += chars[Math.floor(Math.random() * chars.length)];
        } else {
          glitched += originalText[i];
        }
      }

      setGlitchText(glitched);

      // Reset to original text after the glitch duration
      timeoutRef.current = window.setTimeout(() => {
        setGlitchText(originalText);
      }, glitchDuration);
    }, interval);

    return () => {
      clearInterval(glitchInterval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [originalText, interval, glitchDuration]);

  return glitchText;
};

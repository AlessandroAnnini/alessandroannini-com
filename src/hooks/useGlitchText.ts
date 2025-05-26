import { useState, useEffect } from 'react';

export const useGlitchText = (
  originalText: string,
  interval = 3000,
  glitchDuration = 150
) => {
  const [glitchText, setGlitchText] = useState(originalText);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
      let glitched = '';

      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.1) {
          glitched += chars[Math.floor(Math.random() * chars.length)];
        } else {
          glitched += originalText[i];
        }
      }

      setGlitchText(glitched);

      // Reset to original text after the glitch duration
      setTimeout(() => setGlitchText(originalText), glitchDuration);
    }, interval);

    return () => clearInterval(glitchInterval);
  }, [originalText, interval, glitchDuration]);

  return glitchText;
};

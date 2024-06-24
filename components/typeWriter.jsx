import React, { useState, useEffect } from 'react';

export function SkillChanger() {
  const skills = ['Web Design', 'Programming', 'Social Skills', 'Development','Marketing'];
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % skills.length);
        setOpacity(1); 
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
      <span style={{ color:"aqua",opacity:opacity, transition: 'opacity 0.5s ease-in-out' }}>
        {skills[index]}
      </span>
  );
}

// src/utility/Cursor/Cursor.jsx
import React, { useEffect, useRef } from 'react';
import './cursor.css';

const Cursor = () => {
  const cursorRef = useRef(null);
  const cursorBallRef = useRef(null);
  const requestRef = useRef(null);

  const cursorPosition = { x: 0, y: 0 };
  const currentPosition = { x: 0, y: 0 };
  const easingFactor = 0.25;

  useEffect(() => {
    const onMouseMove = (e) => {
      cursorPosition.x = e.clientX;
      cursorPosition.y = e.clientY;
    };

    const animate = () => {
      
      currentPosition.x += (cursorPosition.x - currentPosition.x) * easingFactor;
      currentPosition.y += (cursorPosition.y - currentPosition.y) * easingFactor;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentPosition.x}px`;
        cursorRef.current.style.top = `${currentPosition.y}px`;
      }
      if (cursorBallRef.current) {
        cursorBallRef.current.style.left = `${currentPosition.x}px`;
        cursorBallRef.current.style.top = `${currentPosition.y}px`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    animate(); // Start the animation loop

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="custom-cursor">
      <div id="cursor" ref={cursorRef}></div>
    </div>
  );
};

export default Cursor;

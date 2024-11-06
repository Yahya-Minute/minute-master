import React, { useState, useEffect } from 'react';
import './loader.css'; // Import the CSS for styling

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  // Use useEffect to hide the loader after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Trigger fade-out effect
    }, 3000);

    const removeLoader = setTimeout(() => {
      setIsLoading(false); // Hide the loader after fade-out transition
    }, 4000); // Make sure to hide the loader after the fade-out

    // Clean up the timers on component unmount
    return () => {
      clearTimeout(timer);
      clearTimeout(removeLoader);
    };
  }, []);

  if (!isLoading) {
    return null; // Return nothing (hide loader) once loading is false
  }

  return (
    <div
      className={`ripple-background ${fadeOut ? 'fade-out' : ''}`}
    >
      <div className="ripple-loader">
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;

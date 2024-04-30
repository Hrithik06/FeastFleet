import { useState, useEffect } from 'react';

const ScrollDetector = () => {
  // State to track scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Define the position you want to detect
  const positionToDetect = 500; // Adjust this value to the desired position

  // Function to handle scroll event
  const handleScroll = () => {
    const currentPosition = window.scrollY || window.pageYOffset;
    setScrollPosition(currentPosition);
  };

  // Effect to add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect to perform action when scroll position reaches desired position
  useEffect(() => {
    if (scrollPosition >= positionToDetect) {
      // Scroll has reached the desired position
      console.log('Scroll has reached the desired position.');

      // Perform any action you want when the scroll reaches the desired position
    }
  }, [scrollPosition, positionToDetect]);

  return (
    <div style={{ height: '2000px' }}> {/* Add enough content to enable scrolling */}
      {/* Your JSX content */}
    </div>
  );
};

export default ScrollDetector;

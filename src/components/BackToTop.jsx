import React, { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed hover:opacity-100 bottom-4 right-4 bg-purple p-3 rounded-full cursor-pointer ${
        isVisible ? 'opacity-50' : 'opacity-0'
      } transition-opacity duration-300`}
      onClick={scrollToTop}
    >
      <FiChevronUp className="text-light" />
    </div>
  );
};

export default BackToTop;

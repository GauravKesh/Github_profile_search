import React, { useState, useEffect } from "react";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed animate-bounce bottom-5 right-7">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-blue-500 text-white rounded-full shadow-lg  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default GoToTop;

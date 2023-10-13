import React, { useState, useEffect } from "react";

const eventList = ["Latin Restaurant", "Live Music", "Cuban Food"];

const Events = () => {
  const [showMore, setShowMore] = useState(false);
  const [visibleItems, setVisibleItems] = useState(eventList.slice(0, 6));

  const checkWindowSize = () => {
    if (window.innerWidth >= 768) {
      // 768px es el breakpoint de Tailwind CSS para pantallas 'md'
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  useEffect(() => {
    if (showMore) {
      setVisibleItems(eventList);
    } else {
      setVisibleItems(eventList.slice(0, 6));
    }
  }, [showMore]);

  return (
    <div className="py-2 md:px-12 flex flex-col lg:px-48">
      <div className="grid grid-cols-2 gap-4 p-4 mt-2 justify-items-center md:grid-cols-4 md:justify-items-start">
        {visibleItems.map((event, index) => (
          <div
            key={index}
            className={`bg-gray-custom text-center rounded-xl p-1.5 transition-all duration-500 flex flex-col items-center justify-center w-40 md:p-1 ${
              showMore
                ? "h-12 w-40 opacity-100"
                : index < 6
                ? "h-auto opacity-100"
                : "h-0 opacity-0"
            }`}
          >
            <span className="font-semibold">{event}</span>
          </div>
        ))}
      </div>
      <div className="md:hidden text-center mt-4">
        <button
          className="text-blue-400 font-bold py-2 px-4 rounded text-base"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
};

export default Events;

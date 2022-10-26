import React, { useState } from "react";

interface AccordionProps {
  items: any;
  children: React.ReactNode;
}

export default function Accordion({ items, children }: AccordionProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsed = () => setIsCollapsed(() => !isCollapsed);

  const collapsedClass =
    "w-full p-5 font-medium  text-left border  border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-lime-700 via-lime-600 to-lime-700 bg-gray-100 text-gray-700";

  const expandedClass =
    "w-full p-5 font-medium  text-left border  border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 text-transparent bg-clip-text bg-gradient-to-r from-lime-700 via-lime-600 to-lime-700 bg-gray-100 text-gray-700";

  return (
    <div>
      <button
        type="button"
        onClick={toggleCollapsed}
        className={isCollapsed ? collapsedClass : expandedClass}
      >
        {Object.keys(items).map((key) => (
          <p key={key}>{items[key].name}</p>
        ))}
      </button>

      <div className={isCollapsed ? "hidden" : ""}>
        <div className=" p-5 font-light border border-b-0 border-gray-200 ">
          {children}
        </div>
      </div>
    </div>
  );
}

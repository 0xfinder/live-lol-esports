import React, { useState } from "react";
import "./Sidebar.css";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
        aria-expanded={isOpen}
      >
        <span className={`hamburger ${isOpen ? "open" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
      </button>

      <div className={`sidebar-overlay ${isOpen ? "visible" : ""}`} onClick={toggleSidebar} />

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          {/* Sidebar content goes here */}
        </div>
      </aside>
    </>
  );
}

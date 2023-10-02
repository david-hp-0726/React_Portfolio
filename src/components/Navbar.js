import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import TocIcon from "@mui/icons-material/Toc";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <nav className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <TocIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </nav>
  );
}

export default Navbar;

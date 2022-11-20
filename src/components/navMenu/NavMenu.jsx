import React from "react";
import { NavLink } from "react-router-dom";
import "./navMenu.scss";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        // runs this fn on key strokes
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul
        // className="nav-items hide-items"
        //   showNav = false
        // className="nav-items"
        //   showNav=true
        className={!showNav ? "nav-items hide-items" : "nav-items"}
      >
        <div
          className="close-menu-icon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          // runs this fn on key strokes
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            end
            to="/"
            onClick={() => setShowNav(!showNav)}
            role="button"
            // runs this fn on key strokes
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            // runs this fn on key strokes
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            // runs this fn on key strokes
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            // runs this fn on key strokes
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

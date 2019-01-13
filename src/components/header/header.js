import React from "react";

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.children}
      <nav role="navigation">
        <div id="toggleMenu">
          <input type="checkbox" />
          <ul id="navMenu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

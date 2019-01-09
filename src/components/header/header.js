import React from "react";

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.children}
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

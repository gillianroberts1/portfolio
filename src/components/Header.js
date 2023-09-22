import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <>
        <h1>My Portfolio</h1>
      </>

      <nav>
        <ul>
          <li>
            <Link to="/aboutme">About Me</Link>
          </li>

          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

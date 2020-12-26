import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {}

function Header({}: Props): ReactElement {
  return (
    <header>
      <div className="container flex">
        <h1 className="logo">Loruki.</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/docs">Docs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {}

function Footer({}: Props): ReactElement {
  return (
    <footer className="footer bg-dark py-5">
      <div className="container grid grid-3">
        <div>
          <h1>Loruki</h1>
          <p>Copyright &copy; 2020</p>
        </div>
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
        <div className="social">
          <Link to="#">
            <FontAwesomeIcon icon={faGithub} className="fab fa-2x" />
          </Link>
          <Link to="#">
            <FontAwesomeIcon icon={faFacebook} className="fab fa-2x" />
          </Link>
          <Link to="#">
            <FontAwesomeIcon icon={faInstagram} className="fab fa-2x" />
          </Link>
          <Link to="#">
            <FontAwesomeIcon icon={faTwitter} className="fab fa-2x" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

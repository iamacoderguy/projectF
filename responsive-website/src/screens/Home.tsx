import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import {
  faServer,
  faUpload,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {}

function Home({}: Props): ReactElement {
  return (
    <>
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h1>Ut Congue</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquam non arcu ac egestas. Aenean aliquet pulvinar odio ac
              posuere. Sed sed elit nec risus luctus pharetra ullamcorper vel
              ex. Vestibulum varius, mi eget ullamcorper hendrerit,...
            </p>
            <Link to="/features" className="btn btn-outline">
              Read More
            </Link>
          </div>

          <div className="showcase-form card">
            <h2>Request a Demo</h2>
            <form>
              <div className="form-control">
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  required
                />
              </div>
              <div className="form-control">
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <input type="submit" value="Send" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </section>
      <section className="stats">
        <div className="container">
          <h3 className="stats-heading text-center my-1">
            Nam volutpat tempus quam. Integer ut faucibus lorem. Etiam non
            ornare nibh. In non dui quis risus vestibulum ultricies. Praesent
            quis auctor tellus.
          </h3>

          <div className="grid grid-3 text-center my-4">
            <div>
              <FontAwesomeIcon icon={faServer} className="fas fa-3x" />
              <h3>10,349,405</h3>
              <p className="text-secondary">Mauris</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faUpload} className="fas fa-3x" />
              <h3>987 TB</h3>
              <p className="text-secondary">Quisque</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faProjectDiagram} className="fas fa-3x" />
              <h3>2,343,265</h3>
              <p className="text-secondary">Sed lobortis</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

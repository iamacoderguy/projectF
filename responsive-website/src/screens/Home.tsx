import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {}

function Home({}: Props): ReactElement {
  return (
    <section className="showcase">
      <div className="container grid">
        <div className="showcase-text">
          <h1>Ut Congue</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
            non arcu ac egestas. Aenean aliquet pulvinar odio ac posuere. Sed
            sed elit nec risus luctus pharetra ullamcorper vel ex. Vestibulum
            varius, mi eget ullamcorper hendrerit,...
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
  );
}

export default Home;

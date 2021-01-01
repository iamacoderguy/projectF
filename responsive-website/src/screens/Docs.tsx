import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import images from "../images";

interface Props {}

function Docs({}: Props): ReactElement {
  return (
    <>
      <section className="docs-head bg-primary py-3">
        <div className="container grid">
          <div>
            <h1 className="xl">Luctus</h1>
            <p className="lead">
              Vestibulum tincidunt bibendum elit. Sed gravida erat mi.
            </p>
          </div>
          <img src={images.docs} alt="" />
        </div>
      </section>

      <section className="docs-main my-4">
        <div className="container grid">
          <div className="card bg-light p-3">
            <h3 className="my-2">Curabitur</h3>
            <nav>
              <ul>
                <li>
                  <Link to="#" className="text-primary">
                    Pellentesque
                  </Link>
                </li>
                <li>
                  <Link to="#">Nullam Turpis</Link>
                </li>
                <li>
                  <Link to="#">Ut Est</Link>
                </li>
              </ul>
            </nav>

            <h3 className="my-2">Tincidunt</h3>
            <nav>
              <ul>
                <li>
                  <Link to="#">Phasellus</Link>
                </li>
                <li>
                  <Link to="#">Donec Tincidunt</Link>
                </li>
                <li>
                  <Link to="#">Nulla Faucibus</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="card">
            <h2>Pellentesque</h2>
            <p>
              Phasellus ut erat dapibus, scelerisque ex non, dictum metus. Cras
              eget ex et tellus mollis mollis. Donec fringilla diam eros, in
              vehicula mauris dapibus ut. Nam ut rhoncus massa. Lorem ipsum
              dolor sit amet, consectetur.
            </p>
            <div className="alert alert-success">
              <FontAwesomeIcon icon={faInfo} className="fas" />
              Suspendisse ut nibh condimentum, egestas sem vitae, posuere massa.
              Nam.
            </div>
            <h3>Aenean vitae tellus.</h3>
            <p>
              Curabitur risus lorem, malesuada et dui nec, ullamcorper facilisis
              metus. Suspendisse quis sollicitudin turpis. In.
            </p>
            <Link to="#" className="btn btn-primary">
              Integer nisi
            </Link>

            <h3>Suspendisse</h3>
            <ul>
              <li>Morbi maximus tortor enim.</li>
              <li>Fusce neque turpis, aliquet convallis.</li>
            </ul>

            <h3>Integer</h3>
            <p>Nullam (Orci purus)</p>
            <pre>
              <code>$ orci integer loruki-nisi</code>
            </pre>
            <p>Dolor</p>
            <pre>
              <code>$ dolor integer loruki-nisi</code>
            </pre>
            <p>Vivamus</p>
            <pre>
              <code>$ vivamus integer loruki-nisi</code>
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}

export default Docs;

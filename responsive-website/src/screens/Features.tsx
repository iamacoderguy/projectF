import {
  faDatabase,
  faLaptopCode,
  faNetworkWired,
  faPowerOff,
  faServer,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement } from "react";
import images from "../images";

interface Props {}

function Features({}: Props): ReactElement {
  return (
    <>
      <section className="features-head bg-primary py-3">
        <div className="container grid">
          <div>
            <h1 className="xl">Phasellus</h1>
            <p className="lead">
              Phasellus semper interdum velit, non vehicula risus pretium et.
              Proin.
            </p>
          </div>
          <img src={images.server} alt="" />
        </div>
      </section>

      <section className="features-sub-head bg-light py-3">
        <div className="container grid">
          <div>
            <h1 className="md">Morbi Tincidunt Libero</h1>
            <p>
              Mauris a rutrum tortor. Vestibulum ante erat, sodales et sem ac,
              ornare viverra leo. Nullam aliquet lobortis justo quis pharetra.
              Phasellus viverra molestie nunc, eu eleifend magna posuere vel.
              Suspendisse blandit, sem a pharetra feugiat, neque nunc
              condimentum ligula, porta pellentesque arcu enim sed lectus.
              Aliquam porttitor sodales dui, sit.
            </p>
          </div>
          <img src={images.server2} alt="" />
        </div>
      </section>

      <section className="features-main my-2">
        <div className="container grid grid-3">
          <div className="card flex">
            <FontAwesomeIcon icon={faServer} className="fas fa-3x" />
            <p>
              Donec non turpis porta, ultrices arcu vitae, malesuada nulla.
              Donec rhoncus rhoncus fermentum. Nulla volutpat metus arcu, eu
              placerat eros ullamcorper a. Nulla id mauris et justo dignissim
              consequat ut eget nisi. Vivamus pulvinar quam.
            </p>
          </div>
          <div className="card flex">
            <FontAwesomeIcon icon={faNetworkWired} className="fas fa-3x" />
            <p>
              Nulla sagittis erat felis, eu bibendum sem imperdiet eu. Nunc
              pretium feugiat hendrerit. Cras dignissim gravida elementum.
              Phasellus nisi sem, dictum eget blandit non, consectetur et.
            </p>
          </div>
          <div className="card flex">
            <FontAwesomeIcon icon={faLaptopCode} className="fas fa-3x" />
            <p>
              Mauris malesuada tellus nunc, lobortis efficitur odio iaculis in.
            </p>
          </div>
          <div className="card flex">
            <FontAwesomeIcon icon={faDatabase} className="fas fa-3x" />
            <p>
              Donec tristique est vel leo eleifend vehicula. Praesent feugiat
              ultricies.
            </p>
          </div>
          <div className="card flex">
            <FontAwesomeIcon icon={faPowerOff} className="fas fa-3x" />
            <p>Cras ac mattis ipsum. Mauris rhoncus sapien a pulvinar.</p>
          </div>
          <div className="card flex">
            <FontAwesomeIcon icon={faUpload} className="fas fa-3x" />
            <p>
              Aliquam tempus laoreet tellus, sagittis et. Nulla sed lacus
              mauris.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;

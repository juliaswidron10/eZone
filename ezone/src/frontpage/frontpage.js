import React from "react";
import { Modal1 } from "./modals.js";
import { FrontButton } from "./functions.js";

export class FrontPage extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <button className="btn-green btn-frontpage">IMPROVE YOUR PERFORMANCE</button>
        <Modal1 />
        <FrontButton />
      </div>
    );
  }
}

document.querySelector("body").classList.add("frontpageBody");

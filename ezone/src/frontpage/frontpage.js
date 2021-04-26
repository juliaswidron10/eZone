import React from "react";
import { Modal1 } from "./modals.js";

export class FrontPage extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <Modal1 />
      </div>
    );
  }
}

document.querySelector("body").classList.add("frontpageBody");

import React from "react";
import { Modal1 } from "./modals.js";
import { FrontButton } from "./functions.js";
import CommonComponentsMain from "./functions";
import { CommonOne, CommonTwo, CommonThree } from "./functions";
import { openModal1 } from "./functions";

export class FrontPage extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <Modal1 />
        <button className="btn-green btn-frontpage" onClick={openModal1()}>
          IMPROVE YOUR PERFORMANCE
        </button>
        {/* <FrontButton /> */}
        <CommonComponentsMain />
        <CommonOne />
        <CommonTwo />
        <CommonThree />
      </div>
    );
  }
}

document.querySelector("body").classList.add("frontpageBody");

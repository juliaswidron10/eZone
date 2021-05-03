import React from "react";
import { Modal1 } from "./modals.js";
import { Modal2 } from "./modals.js";

export class FrontPage extends React.Component {
  // const frontPageButton = document.querySelector(".btn-frontpage");
  // const signupStep1Button = document.querySelector(".btn-signup-step1");
  // const signupStep2Button = document.querySelector(".btn-signup-step2");
  // const modalStep1 = document.querySelector(".modal-step1");
  // const modalStep2 = document.querySelector(".modal-step2");

  openModal1() {
    console.log("showmodal1");
    //reset
    // document.querySelector(".modal-step1").classList.remove("slidedown");
    // document.querySelector(".modal-step2").classList.remove("slidedown");

    document.querySelector(".frontpageBody").classList.add("overlay");
    document.querySelector(".btn-frontpage").classList.add("fadeout");
    document.querySelector(".modal-step1").removeAttribute("hidden");
    document.querySelector(".modal-step1").classList.add("slideup");
  }

  render() {
    return (
      <div>
        {" "}
        <Modal1 />
        <button className="btn-green btn-frontpage" onClick={() => this.openModal1()}>
          IMPROVE YOUR PERFORMANCE
        </button>
        <Modal2 />
      </div>
    );
  }
}

document.querySelector("body").classList.add("frontpageBody");

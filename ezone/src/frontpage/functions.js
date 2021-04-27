import React from "react";

class CommonComponentsMain extends React.Component {
  render() {
    return <div>Class blabalbalba</div>;
  }
}

function CommonOne() {
  return <div>Component One</div>;
}

function CommonTwo() {
  return <div>Component Two</div>;
}

function CommonThree() {
  return <div>Component Three</div>;
}

export { CommonOne, CommonTwo, CommonThree };
export default CommonComponentsMain;

// const frontPageButton = document.querySelector(".btn-frontpage");
// const signupStep1Button = document.querySelector(".btn-signup-step1");
// const signupStep2Button = document.querySelector(".btn-signup-step2");
// const modalStep1 = document.querySelector(".modal-step1");
// const modalStep2 = document.querySelector(".modal-step2");

// frontPageButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("showmodal1");
//   modalStep1.removeAttribute("hidden");
//   modalStep1.classList.add("slideup");
// });

export function openModal1() {
  console.log("showmodal1");
  document.querySelector(".modal-step1").removeAttribute("hidden");
  document.querySelector(".modal-step1").classList.add("slideup");
}

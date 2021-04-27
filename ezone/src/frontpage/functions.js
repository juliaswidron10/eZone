export const frontPageButton = document.querySelector(".btn-frontpage");
const signupStep1Button = document.querySelector(".btn-signup-step1");
const signupStep2Button = document.querySelector(".btn-signup-step2");
export const modalStep1 = document.querySelector(".modal-step1");
const modalStep2 = document.querySelector(".modal-step2");

export function FrontButton() {
  frontPageButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("showmodal1");
    modalStep1.removeAttribute("hidden");
    modalStep1.classList.add("slideup");
  });
}

import { closeModal, openModal } from "./utils/functions.js";

const btnsShowModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

btnsShowModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    openModal(modal, overlay);
  });
});

btnCloseModal.addEventListener("click", () => {
  closeModal(modal, overlay);
});

overlay.addEventListener("click", () => {
  closeModal(modal, overlay);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal(modal, overlay);
  }
});

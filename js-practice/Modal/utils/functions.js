export const openModal = (modal, overlay) => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

export const closeModal = (modal, overlay) => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

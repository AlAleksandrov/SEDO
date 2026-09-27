let reservation = {
  startDate: null,
  endDate: null,
  guestsCount: 0,
  roomType: null,
  name: null,
  phone: null,
  email: null,
};

function changeContent(className) {
  document
    .querySelectorAll(".custom-form")
    .forEach((div) => div.classList.add("hidden"));
  if (document.querySelector(`.${className}`) != null) {
    document.querySelector(`.${className}`).classList.remove("hidden");
  }
}

document
  .querySelector("#new-reservation")
  .addEventListener("click", (e) => cleanData(e));

function cleanData(e) {
  changeContent("search-form-content");
}

document
  .querySelector("#confirm-back")
  .addEventListener("click", (e) => getBackToPersonalData(e));
document
  .querySelector("#confirm-reservation")
  .addEventListener("click", (e) => showThankYouPage(e));

function showConfirmInformation() {
  const form = document.querySelector(".confirm-reservation");
  form.querySelector("#guest-name").textContent = `Name: ${reservation.name}`;
  form.querySelector("#guest-phone").textContent =
    `Phone: ${reservation.phone}`;
  form.querySelector("#guest-email").textContent =
    `Email: ${reservation.email}`;
  form.querySelector("#guest-room-type").textContent =
    `Room: ${reservation.roomType}`;
  form.querySelector("#guest-data-in").textContent =
    `Check-in: ${reservation.startDate}`;
  form.querySelector("#guest-data-out").textContent =
    `Check-out: ${reservation.endDate}`;
}

function getBackToPersonalData(e) {
  e.preventDefault();
  changeContent("guest-details-form-content");
}

function showThankYouPage(e) {
  e.preventDefault();
  changeContent("thank-you-content");
}

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
  .querySelector("#guest-details-back")
  .addEventListener("click", (e) => fillRoomForm(e));
document
  .querySelector("#guest-details-next")
  .addEventListener("click", (e) => getPersonalData(e));

function getPersonalData(e) {
  e.preventDefault();
  const data = e.target.parentElement;
  const name = data.querySelector("#name").value;
  const phone = data.querySelector("#phone-number").value;
  const email = data.querySelector("#email").value;

  if (name != "" && phone != "" && email != "") {
    reservation.name = name;
    reservation.phone = phone;
    reservation.email = email;
    changeContent("confirm-reservation-content");
  }
}

function fillRoomForm(e) {
  e.preventDefault();
  changeContent("search-result-form-content");
}

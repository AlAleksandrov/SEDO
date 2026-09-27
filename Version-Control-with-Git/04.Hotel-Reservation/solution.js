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
  .querySelector("#search-form-button")
  .addEventListener("click", (e) => searchFormData(e));

function searchFormData(e) {
  e.preventDefault();
  const data = e.target.parentElement;
  const checkIn = data.querySelector("#check-in").value;
  const checkOut = data.querySelector("#check-out").value;
  const people = data.querySelector("#people").value;

  if (
    checkIn != "" &&
    checkOut != "" &&
    people != "" &&
    new Date(checkIn) <= new Date(checkOut)
  ) {
    reservation.startDate = checkIn;
    reservation.endDate = checkOut;
    reservation.guestsCount = people;
    changeContent("search-result-form-content");
  }
  .querySelectorAll(".room-type")
  .forEach((btn) => btn.addEventListener("click", (e) => selectRoomType(e)));

function selectRoomType(e) {
  let myTarget = e.target;
  myTarget.parentElement.classList.add("selected-room");
  let roomType = myTarget.parentElement.querySelector("p").textContent;
  reservation.roomType = roomType;
  changeContent("guest-details-form-content");
}

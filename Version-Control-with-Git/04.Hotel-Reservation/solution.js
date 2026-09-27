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
  .querySelectorAll(".room-type")
  .forEach((btn) => btn.addEventListener("click", (e) => selectRoomType(e)));

function selectRoomType(e) {
  let myTarget = e.target;
  myTarget.parentElement.classList.add("selected-room");
  let roomType = myTarget.parentElement.querySelector("p").textContent;
  reservation.roomType = roomType;
  changeContent("guest-details-form-content");
}

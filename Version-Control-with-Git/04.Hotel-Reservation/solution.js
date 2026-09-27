let reservation = {
    startDate: null,
    endDate: null,
    guestsCount: 0,
    roomType: null,
    name: null,
    phone: null,
    email: null
};

function changeContent(className) {
    document
        .querySelectorAll('.custom-form')
        .forEach(form => form.classList.add('hidden'));

    const element = document.querySelector(`.${className}`);

    if (element) {
        element.classList.remove('hidden');
    }
}

function cleanData() {
    reservation = {
        startDate: null,
        endDate: null,
        guestsCount: 0,
        roomType: null,
        name: null,
        phone: null,
        email: null
    };

    changeContent('search-form-content');
}

function searchFormData(event) {
    event.preventDefault();

    const checkIn = document.querySelector('#check-in').value;
    const checkOut = document.querySelector('#check-out').value;
    const people = document.querySelector('#people').value;

    if (!checkIn || !checkOut || !people) {
        return;
    }

    if (new Date(checkIn) >= new Date(checkOut)) {
        return;
    }

    reservation.startDate = checkIn;
    reservation.endDate = checkOut;
    reservation.guestsCount = people;

    changeContent('search-result-form-content');
}

function selectRoomType(event) {
    const selectedRoom = event.currentTarget.dataset.room;

    reservation.roomType = selectedRoom;

    document
        .querySelectorAll('.room-type-item')
        .forEach(room => room.classList.remove('selected-room'));

    event.currentTarget
        .closest('.room-type-item')
        .classList.add('selected-room');

    changeContent('guest-details-form-content');
}

function getPersonalData(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const phone = document.querySelector('#phone-number').value;
    const email = document.querySelector('#email').value;

    if (!name || !phone || !email) {
        return;
    }

    reservation.name = name;
    reservation.phone = phone;
    reservation.email = email;

    showConfirmInformation();
    changeContent('confirm-reservation-content');
}

function fillRoomForm() {
    changeContent('search-result-form-content');
}

function showConfirmInformation() {
    document.querySelector('#guest-name').textContent =
        `Name: ${reservation.name}`;

    document.querySelector('#guest-phone').textContent =
        `Phone: ${reservation.phone}`;

    document.querySelector('#guest-email').textContent =
        `Email: ${reservation.email}`;

    document.querySelector('#guest-room-type').textContent =
        `Room: ${reservation.roomType}`;

    document.querySelector('#guest-data-in').textContent =
        `Check-in: ${reservation.startDate}`;

    document.querySelector('#guest-data-out').textContent =
        `Check-out: ${reservation.endDate}`;
}

function getBackToPersonalData() {
    changeContent('guest-details-form-content');
}

function showThankYouPage(event) {
    event.preventDefault();
    changeContent('thank-you-content');
}

document
    .querySelector('#new-reservation')
    .addEventListener('click', cleanData);

document
    .querySelector('#search-form-button')
    .addEventListener('click', searchFormData);

document
    .querySelectorAll('.room-type')
    .forEach(button => {
        button.addEventListener('click', selectRoomType);
    });

document
    .querySelector('#guest-details-back')
    .addEventListener('click', fillRoomForm);

document
    .querySelector('#guest-details-next')
    .addEventListener('click', getPersonalData);

document
    .querySelector('#confirm-back')
    .addEventListener('click', getBackToPersonalData);

document
    .querySelector('#confirm-reservation-button')
    .addEventListener('click', showThankYouPage);
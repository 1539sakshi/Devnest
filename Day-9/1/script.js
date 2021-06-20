const container = document.querySelector(".container");
const totalSeats = 100;
let bookedSeats = 0;

const bookedSeatsSpan = document.querySelector(".booked-seats");
const remainingSeatsSpan = document.querySelector(".remaining-seats");

function NewCounts() {
  bookedSeatsSpan.innerText = bookedSeats;
  remainingSeatsSpan.innerText = totalSeats - bookedSeats;
}

for (let i = 0; i < 100; i++) {
  const seat = document.createElement("div");
  seat.classList.add("seat");
  seat.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("settled")) {
      element.classList.remove("settled");
      bookedSeats--;
    } else {
      element.classList.add("settled");
      bookedSeats++;
    }
    NewCounts();
  });
  container.appendChild(seat);
}

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.querySelector('.total'); 
const movieSelect = document.getElementById('movie');

// Initial calculation of ticket price
let ticketPrice = +movieSelect.value;

// Function to update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event listener
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
});

// Seat click event listener
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

// Initial call to updateSelectedCount to set the initial count and total
updateSelectedCount();

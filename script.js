const increaseBtn = document.querySelector('.increase-btn');
const decreaseBtn = document.querySelector('.decrease-btn');
const counterHeading = document.querySelector('.counter');

let counter = 0;

increaseBtn.addEventListener('click', () => {
    counter += 1;
    counterHeading.textContent = counter;
});

decreaseBtn.addEventListener('click', () => {
    counter -= 1;

    if (counter < 0) {
        counter = 0;
    }
    counterHeading.textContent = counter;
});
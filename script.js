const form = document.querySelector('.rating-form');
const rating = [...document.querySelectorAll('.rating')];
const completeState = document.querySelector('.complete-state');
const ratingComponent = document.querySelector('.form');
const finalValue = document.querySelector('.value');

rating.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const ratingEl = e.currentTarget;
        ratingEl.classList.toggle('active-state');
        rating.forEach(function (el) {
            if (el !== ratingEl) {
                el.classList.remove('active-state');
            };
        });
        finalValue.textContent = ratingEl.value;
    });
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    rating.forEach(function (el) {
        if (el.classList.contains('active-state')) { 
            ratingComponent.classList.add('completed');
            completeState.classList.add('active');
        };
    });
});
import "./../scss/main.scss";

// Star rating system
const starSystem = document.querySelectorAll(".ratings-container");

Array.from(starSystem).forEach((el) => {
  el.innerHTML += `
<div class="star-widget">
<input type="radio" id="star1"  value="1" />
<label for="star1" class="fa-solid fa-star"></label>
<input type="radio" id="star2"  value="2" />
<label for="star2" class="fa-solid fa-star"></label>
<input type="radio" id="star3"  value="3" />
<label for="star3" class="fa-solid fa-star"></label>
<input type="radio" id="star4"  value="4" />
<label for="star4" class="fa-solid fa-star"></label>
<input type="radio" id="star5"  value="5" />
<label for="star5" class="fa-solid fa-star"></label>
</div>
`;
});
 
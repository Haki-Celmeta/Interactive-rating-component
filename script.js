const ratingContainer = document.querySelector(".rating");
const ratingButtons = document.querySelectorAll(".btn");
const submitButton = document.querySelector(".submit-button");
const firstClip = document.querySelector("#rating-content");
const secondClip = document.querySelector("#thank-you");
let selection = document.querySelector(".selection");

let rating;
for(let i = 0; i < ratingButtons.length; i++) {
  ratingContainer.addEventListener("click", function(event) {
    if(event.target === ratingButtons[i]) {
      ratingButtons[i].style.backgroundColor = "hsl(25, 97%, 53%)";
      ratingButtons[i].style.color = "white";
      rating = event.target.textContent;
    } else {
      ratingButtons[i].style.backgroundColor = "hsl(215, 10%, 24%)";
    }
  })
}

submitButton.addEventListener("click", function() {
  firstClip.style.display = "none";
  secondClip.style.display = "flex";
  selection.textContent = `You selected ${rating} out of 5`;
})
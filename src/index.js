// write your code here
const ramenMenu = document.querySelector("#ramen-menu");
const detailImage = document.querySelector("img.detail-image");
const detailName = document.querySelector("h2.name");
const detailRestaurant = document.querySelector("h3.restaurant");
const detailRating = document.getElementById("rating-display");
const detailComment = document.getElementById("comment-display");
const form = document.getElementById("new-ramen");

const renderOneRamen = (oneRamen) => {
    console.log(oneRamen)
  const image = document.createElement("img");
  image.src = oneRamen.image;
  ramenMenu.append(image);

  image.addEventListener("click", () => {
    detailImage.src = oneRamen.image;
    detailName.textContent = oneRamen.name;
    detailRestaurant.textContent = oneRamen.restaurant;
    detailRating.textContent = oneRamen.rating;
    detailComment.textContent = oneRamen.comment;
  });
};

fetch('http://localhost:3000/ramens')
  .then((response) => response.json())
  .then((ramenData) => {
    ramenData.forEach(renderOneRamen);
  });

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const restaurant = event.target.restaurant.value;
  const image = event.target.image.value;
  const rating = event.target.rating.value;
  const comment = event.target["new-comment"].value;

  const newRamen = {
    name,
    restaurant,
    image,
    rating,
    comment,
  };
  renderOneRamen(newRamen);
});












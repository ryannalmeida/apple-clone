const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);

    buttons.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected");
    });

    const button = e.target;

    const id = button.getAttribute("id");

    button.querySelector(".color").classList.add("selected");

    image.classList.add("changing");
    image.setAttribute("src", `img/iphone_${id}.jpg`);

    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const models = document.querySelectorAll(".comparison-table .model");

  models.forEach((model) => {
    model.addEventListener("click", function () {
      models.forEach((m) => m.classList.remove("highlight"));

      model.classList.add("highlight");
    });
  });
});

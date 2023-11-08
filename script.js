const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {
    star.addEventListener("click", () =>{
        stars.forEach((star, index2) =>{
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
    });
});


const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownCaret = document.querySelector(".arrow");
const dropdownContent = document.querySelector(".dropdown-content");

// add click event to dropdown button
dropdownBtn.addEventListener("click", () => {
  // add rotate to caret element
  dropdownCaret.classList.toggle("arrow-rotate");
  // add open styles to menu element
  dropdownContent.classList.toggle("menu-open");
});

function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
  }
  
  function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
      value = isNaN(value) ? 0 : value;
      value--;
      input.value = value;
    }
  }

w


// Get modal element
var modal = document.getElementById('simpleModal');

// Get open modal button
var modalBtn = document.getElementById('modalBtn');

//Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Создаем ивенты
// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
  modal.style.display = 'block';
}
// Function to close modal
function closeModal() {
  modal.style.display = 'none';
}
// Function to close modal if outside click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}


var Product__detailsImage = document.getElementById("Product__detailsImage");
var small__img = document.getElementsByClassName("small__img");

small__img[0].onclick = function () {
  Product__detailsImage.src = small__img[0].src;
}
small__img[1].onclick = function () {
  Product__detailsImage.src = small__img[1].src;
}
small__img[2].onclick = function () {
  Product__detailsImage.src = small__img[2].src;
}

// const toggleButton = document.getElementsByClassName('toggle-button')[0];
// const headerMenu = document.getElementsByClassName('header__menu')[0];

// toggleButton.addEventListener('click', () => {
//   headerMenu.classList.toggle('active')
// });










const buttons = document.querySelectorAll('.filter-button');
const images = document.querySelectorAll('.image-wrapper');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    buttons.forEach(btn => {
      btn.classList.remove('active');
    });

    button.classList.add('active');

    images.forEach(image => {
      if (filter === 'all') {
        image.style.display = 'block';
      } else if (image.classList.contains(filter)) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  });
});

function showpop(img) {
  var popUpContainer = document.querySelector(".pop-up-container");
  var popUpImage = document.querySelector(".pop-up-image");
  var popUpCaption = document.querySelector(".pop-up-caption");
  popUpImage.src = img.src;
  popUpCaption.innerHTML = img.parentNode.querySelector(".image-caption").innerHTML;
  popUpContainer.style.display = "block";
}

function hidepop() {
  var popUpContainer = document.querySelector(".pop-up-container");
  popUpContainer.style.display = "none";
}
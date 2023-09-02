var images = document.querySelectorAll(".image img");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var close = document.querySelector(".close");
var galleryImages = document.querySelector(".gallery-inner img");
var gallery = document.querySelector(".gallery");
var curentImage = 0;
function showGallery() {
  if (curentImage == 0) {
    prev.classList.add("hide");
  } else {
    prev.classList.remove("hide");
  }
  if (curentImage == images.length - 1) {
    next.classList.add("hide");
  } else {
    next.classList.remove("hide");
  }

  galleryImages.src = images[curentImage].src;
  gallery.classList.add("show");
}
images.forEach((items, index) => {
  items.addEventListener("click", function () {
    curentImage = index;
    showGallery();
  });
});

close.addEventListener("click", function () {
  gallery.classList.remove("show");
});

next.addEventListener("click", function () {
  if (curentImage < images.length - 1) {
    curentImage++;
    showGallery();
  }
});

prev.addEventListener("click", function () {
  if (curentImage > 0) {
    curentImage--;
    showGallery();
  }
});
document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.keyCode == 27) {
    gallery.classList.remove("show");
  }

  if (e.keyCode == 37) {
    if (curentImage > 0) {
      curentImage--;
      showGallery();
    }
  }
  if (e.keyCode == 39) {
    if (curentImage < images.length - 1) {
      curentImage++;
      showGallery();
    }
  }
});

let elementsArray = document.querySelectorAll(".photo");
console.log(elementsArray);

window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("visible");
        } else {
            elem.classList.remove("visible");
        }
    }
}
fadeIn();

document.addEventListener('scroll', () => {
    const header = document.querySelector(".headerbar");
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
})


const gallery = document.querySelector(".gallery");

function scrollLeft() {
  gallery.scrollBy(-600, 0);
}

function scrollRight() {
  gallery.scrollBy(600, 0);
  //checking if it's the end of gallery
  if (
    gallery.offsetWidth + gallery.scrollLeft >=
    gallery.scrollWidth
  ) {
    gallery.scrollBy(-gallery.scrollWidth, 0);
  }
}

let Arrowleft = document.getElementById("left-arr");
let ArrowRight = document.getElementById("right-arr");

Arrowleft.addEventListener("click", scrollLeft);
ArrowRight.addEventListener("click", scrollRight);
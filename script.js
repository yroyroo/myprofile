const header = document.getElementById('header');
let scrollingDown = false;

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;

  if (scrollY > 0 && !scrollingDown) {
    
    header.classList.add('swipe-down');

    scrollingDown = true;
  } else if (scrollY === 0 && scrollingDown) {
  
    header.classList.remove('swipe-down');
  
    scrollingDown = false;
  }
});


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  

  function animateImageOnScroll(element) {
    if (isElementInViewport(element)) {
      element.classList.add('animate');
    } else {
      element.classList.remove('animate');
    }
  }
  

  var profileImage = document.querySelector('.profile-image');
  animateImageOnScroll(profileImage);
  

  window.addEventListener('scroll', function () {
    animateImageOnScroll(profileImage);
  });
  


const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});


// Function for Scroll-to-Top 

// Get the arrow
let mybutton = document.getElementById("UpArrow");  //UpArrow is the id of Link

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//End of Scroll-to-Top



// ========================================
// Function for showing Active Link
// ========================================

 var header = document.getElementById("navbar-link");
    var links = header.getElementsByClassName("a-link");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) { 
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
      });
}
    
// ========================================
// End Function for showing Active Link
// ========================================


//Sticky navbar
// const nav_header= document.querySelector(".header")
// const section_aboutme= document.querySelector(".aboutme")
// const observer = new IntersectionObserver((entries) => {
//   const ent = entries[0];
//   ent.isIntersecting == false
//   ? document.body.classList.add('sticky')
//   : document.body.classList.remove('sticky'); 
// },
//   {
//   root: null,
//   rootMargin: "-60px",
//   threshold: 0,
// });

// observer.observe(section_aboutme);

// End of Sticky Navbar


//Javascript function for Highighting Navlink when scrolling page

  let sections = document.querySelectorAll(".section-div");
  let navLinks = document.querySelectorAll(".navbar a");
  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document.querySelector(".navbar a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };

  
//End of Javascript function for Highighting Navlink when scrolling page


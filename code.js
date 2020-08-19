// var mySwiper = new Swiper('.swiper-container', {
//   // Optional parameters
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// })

// var swiper = new Swiper('.swiper-container2', {
//   slidesPerView: 3,
//   spaceBetween: 10,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

// const subscribeForm = document.querySelector('form.subscribe-form');

// subscribeForm.addEventListener('submit', e => {
//   e.preventDefault();

//   const subscriber = {
//     name: subscribeForm.subscribeName.value,
//     email: subscribeForm.subscribeMail.value,
//     city: subscribeForm.subscribeCity.value,
//     state: subscribeForm.subscribeState. value
//   };

//   db.collection('prideplaces').add(subscriber)
//     .then(() => console.log('subscribed'))
//     .catch(err => console.log(err));

//   subscribeForm.reset();
// });

// let myVar;

// // duration of the preload
// const preload = () => {
//     myVar = setTimeout(showpage, 5000);
//   }


// // after the preload
// const showpage =  ()  => {
//     document.querySelector('.preload-container').style.display = 'none'
//     document.querySelector('nav').style.opacity = '1';
//     document.querySelector('header').style.display = 'block';
//     document.querySelector('footer').style.display = 'block';
//     document.querySelector('.top-banner').style.display = 'block';
//     document.querySelector('.categories-container').style.display = 'flex';
//     document.querySelector('.happening-cities-section').style.display = 'block';
//     document.querySelector('.beyond-section').style.display = 'block';
//     document.querySelector('.new-places-section').style.display = 'block';
//     document.querySelector('.first-to-know-section').style.display = 'block';
//   }

let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("section");

let lastId;
let cur = [];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else if (fromTop === 0) {
      mainNavLinks[0].classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-list');
ham.addEventListener('click', () => {
  if (ham.className === 'hamburger') {
    ham.classList.add('close');
  } else if (ham.className === 'hamburger close') {
    ham.classList.remove('close');
    ham.classList.add('hamburgerback');
  } else if (ham.className === 'hamburger hamburgerback') {
    ham.classList.add('close');
    ham.classList.remove('hamburgerback');
  } else {
    ham.className = 'hamburger';
  }

  if (nav.className === 'nav-list') {
    nav.classList.add('responsive');
  } else if (nav.className === 'nav-list responsive') {
    nav.classList.add('responsiveReturn');
  } else if (nav.className === 'nav-list responsive responsiveReturn') {
    nav.classList.remove('responsiveReturn');
  } else {
    nav.className = 'nav-list';
  }
});

const colorToggle = Array.from(document.querySelectorAll(".color-toggle-wrapper"));
const body = document.querySelector("body");
const headerLogo = document.querySelector(".logo-wrapper a.logo-link img");
const portfolioImages = Array.from(document.querySelectorAll(".about-flex-content img"));
const contactIcons = Array.from(document.querySelectorAll(".contact-icon-wrapper img"));
const footerIcons = Array.from(document.querySelectorAll("a.footer-icon-link img"));
const darkNav = document.querySelector("nav");
let toggleName;


colorToggle.forEach(toggle => {
  toggle.addEventListener("click", e => {
    if (body.className === "light") {
      toggleName = "dark";
      body.className = toggleName;
      localStorage.setItem('toggle', toggleName);
      headerLogo.setAttribute("src", "assets/ALISON.png");
      portfolioImages[0].setAttribute("src", "assets/white-camera.svg");
      portfolioImages[1].setAttribute("src", "assets/white-diamond.png");
      portfolioImages[2].setAttribute("src", "assets/white-focus.png");
      portfolioImages[3].setAttribute("src", "assets/white-img.png");
      contactIcons[0].setAttribute("src", "assets/white-phone.svg");
      contactIcons[1].setAttribute("src", "assets/white-mail.svg");
      footerIcons[0].setAttribute("src", "assets/instagram-dark.png");
      footerIcons[1].setAttribute("src", "assets/twitter-dark.png");
      footerIcons[2].setAttribute("src", "assets/shutterstock-dark.png");
      footerIcons[3].setAttribute("src", "assets/pinterest-dark.png");
      toggle.children[0].setAttribute("src", "assets/sunny 1.svg");
      if (window.scrollY > 10) {
        darkNav.style.backgroundColor = '#000000';
      } else {
        darkNav.style.backgroundColor = 'transparent';
      }
      window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
          darkNav.style.backgroundColor = '#000000';
        } else {
          darkNav.style.backgroundColor = 'transparent';
        }
      });
    } else {
      toggleName = "light";
      body.className = toggleName;
      localStorage.setItem('toggle', toggleName);
      headerLogo.setAttribute("src", "assets/alison-logo.svg");
      portfolioImages[0].setAttribute("src", "assets/photo-shoot-icon.svg");
      portfolioImages[1].setAttribute("src", "assets/awards-icon.svg");
      portfolioImages[2].setAttribute("src", "assets/experience-icon.svg");
      portfolioImages[3].setAttribute("src", "assets/client-icon.svg");
      toggle.children[0].setAttribute("src", "assets/dark-icon.png");
      contactIcons[0].setAttribute("src", "assets/telephone-icon.svg");
      contactIcons[1].setAttribute("src", "assets/email-icon.svg");
      footerIcons[0].setAttribute("src", "assets/instagram-icon.svg");
      footerIcons[1].setAttribute("src", "assets/twitter-icon.svg");
      footerIcons[2].setAttribute("src", "assets/shutterstock-icon.svg");
      footerIcons[3].setAttribute("src", "assets/pinterest.svg");
      if (window.scrollY > 10) {
        darkNav.style.backgroundColor = '#ffffff';
      } else {
        darkNav.style.backgroundColor = '#ffffff';
      }
      window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
          darkNav.style.backgroundColor = '#ffffff';
        } else {
          darkNav.style.backgroundColor = '#ffffff';
        }
      });
    }
  });
});

toggleName = localStorage.getItem('toggle');
body.className = toggleName;
if (localStorage.getItem('toggle') === "dark") {
    headerLogo.setAttribute("src", "assets/ALISON.png");
      portfolioImages[0].setAttribute("src", "assets/white-camera.svg");
      portfolioImages[1].setAttribute("src", "assets/white-diamond.png");
      portfolioImages[2].setAttribute("src", "assets/white-focus.png");
      portfolioImages[3].setAttribute("src", "assets/white-img.png");
      contactIcons[0].setAttribute("src", "assets/white-phone.svg");
      contactIcons[1].setAttribute("src", "assets/white-mail.svg");
      footerIcons[0].setAttribute("src", "assets/instagram-dark.png");
      footerIcons[1].setAttribute("src", "assets/twitter-dark.png");
      footerIcons[2].setAttribute("src", "assets/shutterstock-dark.png");
      footerIcons[3].setAttribute("src", "assets/pinterest-dark.png");
      colorToggle.forEach(toggle => {
        toggle.children[0].setAttribute("src", "assets/sunny 1.svg");
      });
      if (window.scrollY > 10) {
        darkNav.style.backgroundColor = '#000000';
      } else {
        darkNav.style.backgroundColor = 'transparent';
      }
      window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
          darkNav.style.backgroundColor = '#000000';
        } else {
          darkNav.style.backgroundColor = 'transparent';
        }
      });
} else {
  headerLogo.setAttribute("src", "assets/alison-logo.svg");
      portfolioImages[0].setAttribute("src", "assets/photo-shoot-icon.svg");
      portfolioImages[1].setAttribute("src", "assets/awards-icon.svg");
      portfolioImages[2].setAttribute("src", "assets/experience-icon.svg");
      portfolioImages[3].setAttribute("src", "assets/client-icon.svg");
      colorToggle.forEach(toggle => {
        toggle.children[0].setAttribute("src", "assets/dark-icon.png");
      });
      contactIcons[0].setAttribute("src", "assets/telephone-icon.svg");
      contactIcons[1].setAttribute("src", "assets/email-icon.svg");
      footerIcons[0].setAttribute("src", "assets/instagram-icon.svg");
      footerIcons[1].setAttribute("src", "assets/twitter-icon.svg");
      footerIcons[2].setAttribute("src", "assets/shutterstock-icon.svg");
      footerIcons[3].setAttribute("src", "assets/pinterest.svg");
      if (window.scrollY > 10) {
        darkNav.style.backgroundColor = '#ffffff';
      } else {
        darkNav.style.backgroundColor = '#ffffff';
      }
      window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
          darkNav.style.backgroundColor = '#ffffff';
        } else {
          darkNav.style.backgroundColor = '#ffffff';
        }
      });
};

let myVar;

function preload() {
  myVar = setTimeout(showpage, 4000);
}

const showpage = () => {
  document.querySelector('#preloader').style.display = 'none';
  document.querySelector("nav").style.display = 'block';
  document.querySelector("header").style.display = 'block';
  document.querySelector("footer").style.display = 'block';
  document.querySelector("#about-section").style.display = 'block';
  document.querySelector("#contact-section").style.display = 'block';
  document.querySelector("#portfolio-section").style.display = 'block';
  document.querySelector(".hamburger").style.display = 'block';
  // document.querySelector(".color-toggle-wrapper.mobile-toggle").style.display = 'block';

}
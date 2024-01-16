(function($) {

  "use strict";

  // Scroll Top 
  var initScrollTop = function() {
    $('#scrollToTopBtn').each(function(){
      var scrollToTopBtn = document.getElementById("scrollToTopBtn");
      var rootElement = document.documentElement;

      jQuery(window).scroll(function () {

        if($(window).scrollTop() > 2000)
          $('#scrollToTopBtn').addClass('active');
        else
          $('#scrollToTopBtn').removeClass('active');

      });

      function scrollToTop() {
        // Scroll to top logic
        rootElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
      scrollToTopBtn.addEventListener("click", scrollToTop);  
    });
  }
  
  // Tab Section
  var initTabs = function(){
    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
          tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
          tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
      })
    });
  }

  // Responsive Navigation with Button
  var initHamburgerMenu = function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".menu-list");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("responsive");
    }

    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("responsive");
    }
  };
  
  // init jarallax parallax
  var initJarallax = function() {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }

  // init Chocolat light box
  var initChocolat = function() {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }

  // init Slick Sliders
  var initSliders = function() {
    
    $('.main-slider').slick({
        autoplay: false,
        autoplaySpeed: 4000,
        fade: true,
        dots: true,
        arrows: false,
     });  

    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            }
          },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
    }); 

    $('.member-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,                
            dots: true,
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,                
            dots: true,
          }
        }
      ]
    });
  }

  // document ready
  $(document).ready(function(){
    initScrollTop();
    initTabs();
    initHamburgerMenu();
    initSliders();
    initChocolat();
    initJarallax();
  });

  AOS.init({
    duration: 1200,
    once: true,
  })

  jQuery('.stellarnav').stellarNav({
    theme: 'plain',
    closingDelay: 250,
    mobileMode: false,
  });

  $(".btn-search").click(function(){
    $(".search-box").toggleClass('active');
    $(".search-box .search-input").focus();
  });

  $(".close-button").click(function(){
    $(".search-box").toggleClass('active');
  });

  // window load
  $(window).load(function() {
    $(".preloader").fadeOut("slow");
  })

})(jQuery);

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


function openForm2() {
  document.getElementById("myForm2").style.display = "block";
}

function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
}


function openForm3() {
  document.getElementById("myForm3").style.display = "block";
}

function closeForm3() {
  document.getElementById("myForm3").style.display = "none";
}


function openForm4() {
  document.getElementById("myForm4").style.display = "block";
}

function closeForm4() {
  document.getElementById("myForm4").style.display = "none";
}


function openForm5() {
  document.getElementById("myForm5").style.display = "block";
}

function closeForm5() {
  document.getElementById("myForm5").style.display = "none";
}


function openForm6() {
  document.getElementById("myForm6").style.display = "block";
}

function closeForm6() {
  document.getElementById("myForm6").style.display = "none";
}


function openForm7() {
  document.getElementById("myForm7").style.display = "block";
}

function closeForm7() {
  document.getElementById("myForm7").style.display = "none";
}


function openForm8() {
  document.getElementById("myForm8").style.display = "block";
}

function closeForm8() {
  document.getElementById("myForm8").style.display = "none";
}

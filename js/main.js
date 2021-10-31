// // Dropdown
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.direction__btn').forEach(item => {
  item.addEventListener('click', function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".sub__container");
    
    document.querySelectorAll(".direction__btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("active-btn");
      }
    });
    
    document.querySelectorAll(".sub__container").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("list__item-active");
      }
    })
    dropdown.classList.toggle("list__item-active");
    btn.classList.toggle("active-btn")
  })
})

  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".direction__list")) {
      document.querySelectorAll(".sub__container").forEach(el => {
          el.classList.remove("list__item-active");
      })
      document.querySelectorAll(".direction__btn").forEach(el => {
          el.classList.remove("active-btn");
      });
    }
  })
})


// Simplebar
let scrol = Array.from (document.querySelectorAll('.simplebar'))
scrol.forEach((el) => {
  new SimpleBar(el, {  
    autoHide: false,  
    scrollbarMaxSize: 28,
  });  
});  




// slider

let headerSwiper = new Swiper('.swiper__header-container', {
    loop: true, 
  
  });

 //select
const element = document.querySelector('.select');
  const choices = new Choices(element, {
    searchEnabled: false
  });

//slider-gallery
let gallerySwiper = new Swiper('.swiper__gallery-container', {

  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 2
  },
  spaceBetween: 30,

  pagination: {
    el: ".gallery__pagination",
    type: "fraction"
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },
    450: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34
    },

    767: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 34
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  } 
});


/////////////////////// BURGER

window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#menu_btn').addEventListener('click', function(){
    document.querySelector('#nav').classList.toggle('active')
  })
})



// Search

document.addEventListener('DOMContentLoaded', () => { 

  let button = document.querySelector('.header__search') 
  let form = document.querySelector('.header__form')

  button.addEventListener('click', () => { 
    form.classList.toggle('active') 
  })

  window.addEventListener('click', e => { 
    let target = e.target
    if (!target.closest('.header__form') && !target.closest('.header__search')) {
      form.classList.remove('active') 
    }
  })

})


// Smooth scroll

$("[data-scroll]").on("click", function(event) {
  event.preventDefault();

  var $this = $(this),
      blockId = $this.data('scroll'),
      blockOffset = $(blockId).offset().top;    

  $("html, body").animate({
      scrollTop:  blockOffset
  }, 500);
});



//Tabs

// let icons =  document.querySelector(".directory__icons").querySelectorAll(".icon-flag");   

// icons.forEach(item => {
//    item.addEventListener("click", function() {
//         let btn = this;
//         let path = btn.getAttribute("data-path");
//         let block = document.querySelector(`[data-name="${path}"]`);

//         btn.classList.add("icon-active");
        
//         icons.forEach(el => {
//           if (el != btn) {
//             el.classList.remove("icon-active");
//           }
//         })
//         document.querySelectorAll(".directory__sidebar-content").forEach(el => {
//           el.classList.remove("content-active")
//         })
     
//         block.classList.add("content-active");
//    })
//  })


// // accordion

// ! function(i) {
//   let o, n;
//   i(".acc").on("click", function() {
//     o = i(this).parents(".acc__item"), n = o.find(".acc__descr"),
//       o.hasClass("active") ? (o.removeClass("active"),
//         n.slideUp()) : (o.addClass("active"), n.stop(!0, !0).slideDown(),
//         o.siblings(".active").removeClass("active").children(
//           ".acc__descr").stop(!0, !0).slideUp())
//   })
// }(jQuery);


// // slider-edition

// let editionSwiper = new Swiper('.swiper__edition-container', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev'
//   },

//   pagination: {
//     el: '.swiper-pagination',
//     type: 'fraction'
//   },
//   slidesPerView: 3,
//   spaceBetween: 50, 
// })










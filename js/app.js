document.addEventListener('DOMContentLoaded', () => {

  const portfolioSlider = new Swiper('.portfolio__slider', {
    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev"
    },
    pagination: {
      el: ".slider-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 'auto',
        spaceBetween: 30
      }
    }

  });


  // Form Validation
  const formInputs = document.querySelectorAll('.form__input');
  const form = document.querySelector('.consult__form');

  // Add Class with gradient border for Form Group
  formInputs.forEach((input, i) => {

    input.addEventListener('focus', (e) => {
      let parent = e.target.parentElement;
      let addClassInput = i % 2 === 0 ? 'active-odd' : 'active-even'
      let errorClassInput = i % 2 === 0 ? 'error-odd' : 'error-even'

      if (parent.classList.contains(errorClassInput)) {
        parent.classList.remove(errorClassInput)
      }

      parent.classList.add(addClassInput)
    });

    // Remove Class with gradient border for Form Group
    input.addEventListener('focusout', (e) => {
      let parent = e.target.parentElement;
      let addClassInput = i % 2 === 0 ? 'active-odd' : 'active-even'
      let errorClassInput = i % 2 === 0 ? 'error-odd' : 'error-even'

      if (e.target.value === '') {
        parent.classList.remove(addClassInput)
        parent.classList.add(errorClassInput)
      }
    })
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let hasEmpty = false;
    let formData = new FormData(form);

    formInputs.forEach((input) => {
      if (input.value === '') {
        hasEmpty = true;
      }
    })

    if (hasEmpty) {
      return alert('Заполните все поля формы!');
    }

    for (let [key, value] of formData) {
      console.log(key + ' - ' + value)
    }


  })

  // Menu
  const menuBurger = document.querySelector('.menu__burger');
  const menu = document.querySelector('.header__nav');
  const menuLinks = document.querySelectorAll('.with-scroll');

  // Menu For Mobile And Smooth scroll
  menuBurger.addEventListener('click', (e) => {
    menuBurger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('overflow')
  })

  menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()

      let blockId = link.getAttribute('href');
      let block = document.querySelector(blockId)

      if (menuBurger.classList.contains('active')) {
        menuBurger.classList.remove('active')
      }

      if (menu.classList.contains('active')) {
        menu.classList.remove('active')
      }

      if (document.body.classList.contains('overflow')) {
        document.body.classList.remove('overflow')
      }

      window.scrollTo({
        top: block.offsetTop - 100,
        behavior: 'smooth'
      })
    });
  })

});
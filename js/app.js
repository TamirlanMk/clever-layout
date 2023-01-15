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
      , 1170: {
        slidesPerView: 'auto',
        spaceBetween: 30
      }
    }

  });


  // Form Validation
  const formInputs = document.querySelectorAll('.form__input');
  const form = document.querySelector('.consult__form');
  const btnSubmit = document.querySelector('#btn__submit');
  const validationText = document.querySelector('#validation');

  // Add Class with gradient border for Form Group
  formInputs.forEach((input, i) => {

    input.addEventListener('focus', (e) => {
      let parent = e.target.closest('.form__group');
      let successClassInput = i % 2 === 0 ? 'active-odd' : 'active-even';
      let errorClassInput = i % 2 === 0 ? 'error-odd' : 'error-even';

      if (parent.classList.contains(errorClassInput)) {
        parent.classList.remove(errorClassInput);
      }

      parent.classList.add(successClassInput);
    });

    // Remove Class with gradient border for Form Group
    input.addEventListener('focusout', (e) => {
      let parent = e.target.closest('.form__group');
      let successClassInput = i % 2 === 0 ? 'active-odd' : 'active-even';
      let errorClassInput = i % 2 === 0 ? 'error-odd' : 'error-even';

      if (e.target.value === '') {
        parent.classList.remove(successClassInput)
        parent.classList.add(errorClassInput)
      }
    })
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasEmpty = false;
    let formData = new FormData(form);
    validationText.innerHTML = '';

    // Check Inputs value
    formInputs.forEach((input, i) => {
      let errorClassInput = i % 2 === 0 ? 'error-odd' : 'error-even';

      if (input.value === '') {
        input.closest('.form__group').classList.add(errorClassInput);
        hasEmpty = true;
      }
    })

    // If Empty set error for validation
    if (hasEmpty) {
      changeValidationStatus('Заполните отмеченые поля!', 'error')
      return 0;
    }

    btnSubmit.classList.add('btn--submit');

    setTimeout(function () {
      for (let value of formData.values()) {
        console.log(`Key: ${value}`);
      }
      clearInputs(formInputs);
      btnSubmit.classList.remove('btn--submit');
      changeValidationStatus('Заявка оправлена!', 'success')
    }, 2000)

    return console.log("Success")
  });

  function changeValidationStatus(content, validClass) {
    validationText.classList.add(validClass);
    validationText.innerHTML = content;

    setTimeout(function () {
      validationText.innerHTML = ''
      validationText.classList.remove(validClass)
    }, 5000);
  }

  function clearInputs(inputs) {
    inputs.forEach((input, i) => {
      let parent = input.closest('.form__group');
      let successClassInput = i % 2 === 0 ? 'active-odd' : 'active-even';

      input.value = '';
      parent.classList.remove(successClassInput)
    });
  }

  // Menu
  const menuBurger = document.querySelector('.menu__burger');
  const menu = document.querySelector('.header__nav');
  const menuLinks = document.querySelectorAll('.with-scroll');

  // Menu For Mobile And Smooth scroll
  menuBurger.addEventListener('click', (e) => {

    if (menu.classList.contains('back-animate')) return 0;

    if (!menuBurger.classList.contains('active')) {
      menuBurger.classList.add('active');
      menu.classList.add('active');
    } else {
      menuBurger.classList.remove('active');
      menu.classList.add('back-animate');
      setTimeout(() => {
        menu.classList.remove('active');
        menu.classList.remove('back-animate');
      }, 200)
    }

    document.body.classList.toggle('overflow');
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

  // Modal with youtube video from swiper slider
  const modal = document.querySelector('#slider__modal')
  const modalContent = document.querySelector('#slider__modal .modal__inner')
  const modalCloseBtn = document.querySelector('#slider__modal .modal__close')
  const slidesWithYoutube = document.querySelectorAll('.swiper-slide[data-youtube-id]')

  modal.addEventListener('click', (e) => {
    let check = e.target.closest('.modal__inner')

    if (!check) {
      closeModal()
    }

  })

  slidesWithYoutube.forEach(slide => {
    slide.addEventListener('click', (e) => {
      let youTubeVideoId = e.target.getAttribute('data-youtube-id');

      if (!e.target.classList.contains('swiper-slide') && youTubeVideoId == null) {
        youTubeVideoId = e.target.parentElement.getAttribute('data-youtube-id')
      }

      let iframe = document.createElement('iframe');

      iframe.setAttribute('src', `https://www.youtube.com/embed/${youTubeVideoId}`)
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share')
      iframe.setAttribute('width', 800)
      iframe.setAttribute('height', 600)
      iframe.setAttribute('frameBorder', 0)
      iframe.setAttribute('allowFullScreen', true)
      iframe.classList.add('iframe__modal')

      modalContent.appendChild(iframe);
      modal.classList.add('active');
      document.body.classList.add('overflow')
    });
  });

  modalCloseBtn.addEventListener('click', closeModal)

  function closeModal() {
    let iframe = document.querySelector('.iframe__modal');
    iframe.remove()
    modal.classList.remove('active');
    document.body.classList.remove('overflow');
  }

});
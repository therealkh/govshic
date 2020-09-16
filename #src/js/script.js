document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const headerWrapper = document.querySelector('.header-wrapper');
  const menu = document.querySelector('nav.header-menu');
  const socials = headerWrapper.querySelector('.header-socials');
  const lang = headerWrapper.querySelector('.header-lang');

  let lastDocWidth;
  lastDocWidth = window.innerWidth;



  //?----------
  document.addEventListener('click', (event) => {
    if (event.target.closest('.burger')) {
      burger.classList.toggle('active');
      if (burger.classList.contains('active')) {
        OpenBurger();
      }
      else {
        CloseBurger();
      }
    }
  });



  //?----------
  window.addEventListener('resize', (event) => {
    width = event.target.innerWidth;
    if (lastDocWidth > width) {
      OnWindowResizeDown(width);
    }
    else {
      OnWindowResizeUp(width);
    }

    lastDocWidth = width;
  });
  //?----------
  window.addEventListener('scroll', function () {
    let scroll = pageYOffset;
    if (scroll > 0) {
      PaintHeader();
    }
    else {
      UnPaintHeader();
    }
  });



  //! -----------------[Functions]-------------
  function OpenBurger() {
    let headerHeight = headerWrapper.scrollHeight;
    menu.style.marginTop = '0';
    headerWrapper.style.height = `${headerHeight}px`;
    let scroll = pageYOffset;
    if (scroll == 0) {
      PaintHeader();
    }
  }
  function CloseBurger() {
    menu.style.marginTop = '60px';
    headerWrapper.style.height = '60px';
    let scroll = pageYOffset;
    if (scroll == 0) {
      UnPaintHeader();
    }
  }
  function BurgerOff() {
    menu.style.marginTop = 'unset';
    headerWrapper.style.height = '60px';
    menu.style.opacity = 'unset';
    burger.classList.remove('active');
  }
  function PaintHeader() {
    let header = document.querySelector('.header');
    header.classList.add('bgw');
  }
  function UnPaintHeader() {
    let header = document.querySelector('.header');
    header.classList.remove('bgw');
  }



  //! ------------------[Custom Events]------------------
  function OnWindowResizeUp(width) {
    if (width > 575) {
      BurgerOff();
    }
  }

  function OnWindowResizeDown(width) {
    if (width <= 575 && lastDocWidth > 575) {
      CloseBurger();
    }
  }

});

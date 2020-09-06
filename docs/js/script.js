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



  //! -----------------[Functions]-------------
  function OpenBurger() {
    menu.style.marginTop = '0';
    //let headerHeight = headerWrapper.scrollHeight;
    //headerWrapper.style.minHeight = `${headerHeight}px`;
    headerWrapper.style.height = '270px';
    //headerWrapper.style.paddingTop = '0';
    //headerWrapper.style.overflowY = 'unset';
    menu.style.opacity = 1;

  }
  function CloseBurger() {
    //headerWrapper.style.paddingTop = '60px';
    //headerWrapper.style.overflowY = 'hidden';
    //headerWrapper.style.minHeight = 'unset';
    menu.style.marginTop = '60px';
    headerWrapper.style.height = '60px';
    menu.style.opacity = 0;
  }
  function BurgerOff() {
    menu.style.marginTop = 'unset';
    headerWrapper.style.height = '60px';
    menu.style.opacity = 'unset';
    burger.classList.remove('active');
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

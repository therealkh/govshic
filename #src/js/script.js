document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const headerWrapper = document.querySelector('.header-wrapper');
  const menu = document.querySelector('nav.header-menu');
  const socials = headerWrapper.querySelector('.header-socials');
  const lang = headerWrapper.querySelector('.header-lang');

  const btnAbout = document.querySelector('.info__about');
  const btnBackAbout = document.querySelector('.about-back');
  const about = document.querySelector('.main-about');

  const mainWrapper = document.querySelector('.main__wrapper');

  let lastDocWidth;
  lastDocWidth = window.innerWidth;

  let wrapperHeight = mainWrapper.scrollHeight;
  mainWrapper.style.height = `${wrapperHeight}px`;


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
    else {
      if (burger.classList.contains('active')) {
        event.preventDefault();
        CloseBurger();
        burger.classList.remove('active');
      }
    }
    if (event.target === btnAbout) {
      event.preventDefault();
      if (!about.classList.contains('shown')) {
        OpenAbout();
      }
    }
    if (event.target.closest('.about-back')) {
      event.preventDefault();
      if (about.classList.contains('shown')) {
        CloseAbout();
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
  function OpenAbout() {

    let mainWrapperChildren = mainWrapper.children;
    for (let i = 0; i < mainWrapperChildren.length; i++) {
      if (mainWrapperChildren[i] != about) {
        mainWrapperChildren[i].style.opacity = 0;
      }
    }
    about.style.display = 'flex';

    let aboutHeight = about.scrollHeight;
    mainWrapper.style.height = `${aboutHeight}px`;

    setTimeout(() => {
      about.classList.add('shown');
    }, 1);
  }
  function CloseAbout() {
    about.classList.remove('shown');

    mainWrapper.style.height = '';
    let mainWrapperChildren = mainWrapper.children;
    for (let i = 0; i < mainWrapperChildren.length; i++) {
      //mainWrapperChildren[i].style.visibility = '';
      mainWrapperChildren[i].style.opacity = 1;
    }

    setTimeout(() => {
      about.style.display = 'none';
    }, 300);
  }
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

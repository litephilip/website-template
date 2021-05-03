const date = document.getElementById('date');
date.textContent = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', ({ target }) => {
  target.classList.toggle('open');
  linksContainer.classList.toggle('show-links');
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  console.log(linksContainer.getBoundingClientRect());
});

const nav = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    nav.classList.add('transparent-nav');
    console.log("change color");
  } else {
    nav.classList.remove('transparent-nav');
  }
  //TODO: When scrolling down navheight get transparent
  //Dynamic picture in responsive mode

  if (scrollHeight >= 0) {
    nav.classList.add('fixed-nav');
  } else {
    nav.classList.remove('fixed-nav');
  }

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const id = event.currentTarget.getAttribute('href').slice(1);
    console.log(id);

    const element = document.getElementById(id);

    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = nav.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;
    console.log(position);

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
    linksContainer.style.height = 0;

    // const prevScrollpos = window.pageYOffset;
    // window.onscroll = () => {
    //   const currentScrollPos = window.pageYOffset;
    //   if (prevScrollpos > currentScrollPos) {
    //     nav.style.top = '0';
    //   } else {
    //     nav.style.top = '-82px';
    //   }
    //   prevScrollpos = currentScrollPos;
    // };
  });
});

//getBoundingClient() method returns th size of an element and
//its position relative to the viewport

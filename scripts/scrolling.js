/* Initialize Smooth Scroll */
let scroll = new SmoothScroll();

/*Get all buttons */
let btnsObj = document.getElementsByTagName('a');
let btnsList = Object.values(btnsObj);

let btnClass;


for (btn of btnsList) {
  btn.addEventListener('click', element => {
    const btnLength = element.path.length;
    console.log('Longitud:', btnLength);

    if (btnLength === 9) {
      console.log(element.path[0].className);
      btnClass = element.path[0].className;
    } else if (btnLength === 11) {
      console.log(element.path[2].className);
      btnClass = element.path[2].className;
    } else {
      console.log(element.path[1].className);
      btnClass = element.path[1].className;
    }

    if (btnClass === 'btnBanner') {
      const anchor = document.querySelector('#banner');
      scroll.animateScroll(anchor);
    }

    else if (btnClass === 'btnExperiences') {
      const anchor = document.querySelector('#experiences');
      scroll.animateScroll(anchor);
    }

    else if (btnClass === 'btnAbilities') {
      const anchor = document.querySelector('#abilities');
      scroll.animateScroll(anchor);
    }

    else if (btnClass === 'btnProject') {
      const anchor = document.querySelector('#projects');
      scroll.animateScroll(anchor);
    }

    else if (btnClass === 'btnContact') {
      const anchor = document.querySelector('#contact');
      scroll.animateScroll(anchor);
    }
  });
}

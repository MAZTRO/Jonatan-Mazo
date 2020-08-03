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
    console.log('Elemnt:', element);

    if (btnLength === 9 && element.path[1].className === 'sidenav') {
      console.log(element.path[0].innerText);
      btnClass = element.path[0].innerText;
    } else if (btnLength === 9) {
      console.log(element.path[1].className);
      btnClass = element.path[1].className;
    } else {
      console.log(element.path[0].className);
      btnClass = element.path[0].className;
    }

    if (btnClass === 'logo' || btnClass === 'Home') {
      const anchor = document.querySelector('#cover');
      scroll.animateScroll(anchor);
    }

    else if (btnClass === 'About me' || btnClass === 'arrowD' || btnClass === 'ArrowDlink') {
      const anchor = document.querySelector('#about');
      scroll.animateScroll(anchor);
    }
  });
}

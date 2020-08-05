const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  windowSize = window.innerWidth;
  console.log(windowSize);
  if (windowSize < 300) {
    document.getElementById("mySidenav").style.width = "100%";
  } else if (windowSize < 500) {
    document.getElementById("mySidenav").style.width = "70%";
  } else if (windowSize < 700) {
    document.getElementById("mySidenav").style.width = "50%";
  } else if (windowSize < 900) {
    document.getElementById("mySidenav").style.width = "40%";
  } else if (windowSize < 1200) {
    document.getElementById("mySidenav").style.width = "30%";
  } else if (windowSize > 1700) {
    document.getElementById("mySidenav").style.width = "450px";
  } else {
    document.getElementById("mySidenav").style.width = "25%";
  }
  document.getElementById("hamburger").style.opacity = '0';
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  sleep(150).then(() => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("hamburger").style.opacity = '1';
  })
}

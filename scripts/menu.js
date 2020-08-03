const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "20%";
  document.getElementById('Body').style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  document.getElementById("hamburger").style.opacity = '0';
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  sleep(150).then(() => {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("hamburger").style.opacity = '1';
  })
}

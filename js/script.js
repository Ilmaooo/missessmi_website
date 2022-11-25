window.onscroll = function() {stickyFunction()}; //when user scrolls the page, execute stickyFunction
  
  let navbar = document.getElementById("navbar"); //get the navbar
  let sticky = navbar.offsetTop; //get the offset position of navbar
  
  
  //add sticky class to navbar when it reaches scroll position, when it is not in scroll remove it
  
  function stickyFunction(){
      if(window.pageYOffset >= 10){
          navbar.classList.add("sticky");
      } else{
          navbar.classList.remove("sticky");
      }
  } 

//accordion
let accordion = document.getElementsByClassName("accordion");

for (let element of accordion) {
  element.addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
let header = document.querySelector('.header');
let nav = document.querySelector('nav')
let skillData = $(".skill-data")
window.onscroll = function () {
let top = window.scrollY;
if (top >= 100) {
header.classList.add('header-scroll');
nav.style.borderBottom = "none"
}else {
header.classList.remove('header-scroll');
nav.style.borderBottom = "solid 1px"
}
}
$("document").ready(
    function () {
        skillData.hover((e) => {
            let line = document.querySelector(".line")
                     line.style.marginLeft = `${e.target.getBoundingClientRect().left - 100}px `
                     
                      console.log(e.target.getBoundingClientRect().left, line)

                  });

                   
               
                
          
        });
      
    

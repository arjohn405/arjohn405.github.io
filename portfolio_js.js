$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
    }else{
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // slide-up
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
  });

    // toggle menu/

    $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.navbar i').toggleClass("active");
    });

    // typing ani
var typed = new Typed(".typing",{
  strings:["   ","Freelancer", "Video Editor", "Photo Editor", "Audio Editor", "UX/UI Designer", "Cyclist"],
  typeSpeed:100,
  backSpeed: 60,
  loop: true
});

var typed = new Typed(".typing-2",{
  strings:["   ","Freelancer", "Video Editor", "Photo Editor", "Audio Editor", "UX/UI Designer", "Cyclist"],
  typeSpeed:100,
  backSpeed: 60,
  loop: true
});

    // owl carousel
    $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut:2000,
      autoplayHoverPause:true,
      responsive:{
        0:{
          items:1,
          nav:false
        },
        600:{
          items:2,
          nav:false
        },
        1000:{
          items:3,
          nav:false
        }
      }
    });

  






});
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button span");

form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#9b0000";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message..."
  form.classList.add("disabled");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{
      if(xhr.readyState == 4 && xhr.status == 200){
        let response = xhr.response;
        if(response.indexOf("Email and password field is required") != -1 || response.indexOf("Enter a valid email address") != -1 || response.indexOf("Sorry failed to send your message") != -1 ){
          statusTxt.style.color = "red";
        }else{
          form.reset();
          setTimeout(()=>{
              statusTxt.style.display = "none";
          }, 3000);
        }
        statusTxt.innerText = response;
        form.classList.remove("disabled");
      }
  } 
  let formData = new FormData(form); 
  xhr.send(formData);
}

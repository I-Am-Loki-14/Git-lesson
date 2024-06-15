let Bars = document.querySelector("#bars")
console.log(Bars)
  
let Secondsociallinks = document.querySelector
(".second-social-links")
console.log("Secondsociallinks")

Bars.addEventListener("click" , ()=>
  {
      Secondsociallinks.classList.toggle("show")
      Bars.classList.toggle("fa-times")
  }
)
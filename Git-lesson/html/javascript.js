let bars = document.querySelector("#bars")
console.log(bars)
let navLinks = document.querySelector(".nav-links")
console.log(navLinks)

bars .addEventListener("click", ()=>
    {
        navLinks.classList.toggle("show")
        bars.classList.toggle("fa-times")
    }


)

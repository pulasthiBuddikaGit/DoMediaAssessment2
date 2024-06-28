const navItems = document.querySelector(".navItems")
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", ()=>{
    /*adds the active class if hambuger element is not present, and removes it if it is present.(here active class means cross,we created using 
    hamburger class)*/
    hamburger.classList.toggle("active");
    navItems.classList.toggle("active");
})

//when you click navbar links
document.querySelectorAll("li").forEach(n => n.addEventListener("click",()=>{
    /*Remove active class when one of the nav link clicked.Here active class means cross*/
    hamburger.classList.remove("active");
    /*Here active class means navItem block*/
    navItems.classList.remove("active")
}))




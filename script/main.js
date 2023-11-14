// clear form before unload

window.onbeforeunload=()=>{
    for (const form of document.getElementsByTagName("form")){
        form.reset();
    }
}

const slideNav = ()=>{
    const burger = document.querySelector(".burger");
    const navlist = document.querySelector("nav");

    burger.addEventListener("click",()=>{
        burger.classList.toggle("toggle-burger");
        navlist.classList.toggle("nav-active");

    })
}

slideNav();
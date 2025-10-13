const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const body = document.querySelector("#body")
const hlink = document.querySelectorAll("#hlink")
const chatBot = document.getElementById('chat-bot');
const chatWindow = document.getElementById('chat-window');
const chatSend = document.getElementById('chat-send');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
})

hlink.forEach(link => {
    link.addEventListener("click", ()=>{
        menu.classList.add("hidden")
        hamburger.classList.remove("bg-white")
    })
})

// hamburger.addEventListener("mouseenter", () => {
// menu.classList.remove("hidden");
// hamburger.classList.add("bg-white");
// });

// hamburger.addEventListener("mouseleave", () => {
// menu.classList.add("hidden");
// hamburger.classList.remove("bg-white");
// });

// menu.addEventListener("mouseenter", () => {
// menu.classList.remove("hidden");
// hamburger.classList.add("bg-white");
// });

// menu.addEventListener("mouseleave", () => {
// menu.classList.add("hidden");
// hamburger.classList.remove("bg-white");
// });

body.addEventListener("click", (e)=>{
    if(e.target.id != "menu" && e.target.id != "hamburger" && e.target.id != "line"){
        menu.classList.add("hidden")
        hamburger.classList.remove("bg-white")
    }
})



document.getElementById("year").textContent = new Date().getFullYear();

const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{
faders.forEach(el=>{
const rect = el.getBoundingClientRect();
if(rect.top < window.innerHeight - 100){
el.classList.add("show");
}
});
});
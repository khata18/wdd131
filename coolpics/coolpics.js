
const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000){
        menu.classList.remove("hide");
    
    }
    else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize)

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", (event) => {
    const img = event.target.closest ('img');

    const src = img.getAttributes('src');
    const alt = img.getAttribute('alt') || '';
});







//Close modal on button click

closeButton.addEventListener('click', () => {
    modal.close();
    });

//Close modal if clicking outside
modal.addEventListener('click', (event) => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if(event === modal) {
        modal.close();
    }
});
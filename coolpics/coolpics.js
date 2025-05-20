
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

const modal = document.createElement('dialog');
modal.innerHTML = '<img><button class="close-viewer">X</button>';
document.body.appendChild(modal);

const modalImg = modal.querySelector('img');
const closeBtn = modal.querySelector('.close-viewer');

gallery.addEventListener("click", (event) => {
    const img = event.target.closest('img');

    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt') || '';
    const full = src.split('-')[0] + '-full.jpeg';

    modalImg.setAttribute('src', full);
    modalImg.setAttribute('alt', alt);

    modal.showModal();
});

closeBtn.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

const character = {
  name: "Snortleblat",
  class: "Swamp Beat Diplomat",
  level: 5,
  health: 100,
  image: 'https://andejuli.github.io/img/snortleblat.png',
  attacked() {
    if (this.health >= 20) {
      this.level -= 1;
      this.health -= 20;
    } else {
      alert('Character Died');
    }
  },
  levelUp() {
    this.level += 1;
    this.health += 20;
  }
};


const nameEl = document.querySelector(".name");
const classEl = document.querySelector("#class");
const levelEl = document.querySelector("#level");
const healthEl = document.querySelector("#health");
const imageEl = document.querySelector(".image");
const logEl = document.querySelector("#log");


function updateCharacterDisplay() {
  nameEl.textContent = character.name;
  classEl.textContent = character.class;
  levelEl.textContent = character.level;
  healthEl.textContent = character.health;
  imageEl.src = character.image;
  imageEl.alt = `${character.name} image`;
}


document.querySelector("#attacked").addEventListener("click", () => {
  character.attacked();
  updateCharacterDisplay();
  logEl.textContent = `${character.name} was attacked!`;
});

document.querySelector("#levelup").addEventListener("click", () => {
  character.levelUp();
  updateCharacterDisplay();
  logEl.textContent = `${character.name} leveled up!`;
});


updateCharacterDisplay();

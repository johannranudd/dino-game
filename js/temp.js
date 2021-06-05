
const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
console.log(cactus);
function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
    // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      //collision
      alert('Game over!');
      window.location.reload();
  }

}, 10);

document.addEventListener("keydown", (event) => {
  jump();
});


let seconds = 0;
const pointsAchieved = document.querySelector('.pointsAchieved p');

function incrementSeconds() {
    seconds += 1;
    pointsAchieved.innerHTML = seconds;

    if (seconds >= 20) {
        alert(`Congratulations, you've won the game`)
    }
}

let counter = setInterval(incrementSeconds, 1500)


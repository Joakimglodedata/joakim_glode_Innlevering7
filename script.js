// fishPond.html
const fishContainer = document.querySelector("#fishContainer")
console.log(fishContainer)

const fish = document.createElement("p")
fish.classList.add("fish")
fish.textContent = ""
console.log(fish.style.fontSize)

const fishPossibilities = ["🐟", "🐠", "🐡", "🦈", "🐋", "🐙", "🦑", "🦞", "🦀", "🐬"]
if (fishContainer != null) {
    for (let i = 0; i < Math.floor((Math.random() * 100) + 20); i++) {
        const x = Math.floor(Math.random() * 10)
        fish.textContent = fishPossibilities[x];
        fish.style.fontSize = Math.floor((Math.random() * 100) + 20)+"px";
        fish.style.width = fish.style.fontSize * 1.2;
        fish.style.filter = "hue-rotate(" + Math.floor(Math.random() * 360) + "deg)";
        fishContainer.appendChild(fish.cloneNode(true));
        console.log(fish.style.filter)
     }
}

// (Math.floor(Math.random() * 360)
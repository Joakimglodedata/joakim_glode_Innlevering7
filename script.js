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
        fishContainer.appendChild(fish.cloneNode(true));
     }
}
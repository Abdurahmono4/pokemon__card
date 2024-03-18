const api = "https://pokeapi.co/api/v2/pokemon";
console.log(api);
const generateBtn = document.querySelector("#generate");
const image = document.getElementById("image");

// variables for Html

const title = document.getElementById("title");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defence = document.getElementById("defence");
const speed = document.getElementById("speed");

function UpdateUI(pokeinfo) {
  console.log(pokeinfo);
}
generateBtn.addEventListener("click", () => {
  let randomNumber = Math.trunc(Math.random() * 1000);
  const api = "https://pokeapi.co/api/v2/pokemon/" + randomNumber;
  console.log(api);
  getData(api);
});
function getData(api) {
  fetch(api)
    .then((res) => res.json())
    .then((data) => UpdateUI(data))
    .catch((error) => console.log(error));
}

getData(api + randomNumber);

function UpdateUI(pokeinfo) {
  hp.textContent = pokeinfo.stats[0].base_stat;
  title.textContent = pokeinfo.name;
  image.src =
    pokeinfo.sprites.other.dream_world.front_default ??
    pokeinfo.sprites.front_default;
  attack.textContent = pokeinfo.stats[1].base_stat;
  defence.textContent = pokeinfo.stats[2].base_stat;
  speed.textContent = pokeinfo.stats[5].base_stat;
  //   console.log(pokeinfo);
  //   console.log("hp", );
  //   console.log("attack", pokeinfo.stats[1].base_stat);
  //   console.log("defence", pokeinfo.stats[2].base_stat);
  //   console.log("speed", pokeinfo.stats[5].base_stat);
  //   console.log("type", pokeinfo.types[0].type.name);
  //   console.log(
  //     "image url",
  //
  //   );
  //   console.log();
}

// async function getData(api) {
//   const req = await fetch(api);
// }
// pokeinfo.array.forEach((element) => {
//   const title = document.getElementById("title");
//   const text = document.getElementById("text");
//   const attack = document.getElementById("attack");
//   const defence = document.getElementById("defence");
//   const speed = document.getElementById("speed");

//   image
// });

// image.src =
//   pokeinfo.sprites.other.dream_world.front_default ??
//   pokeinfo.sprites.front_default;

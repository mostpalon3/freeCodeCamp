const inputDom = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
async function pokemonFetchDetails(pokemon) {
  try {
    const pokeInfo = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`
    );
    if (pokeInfo.status === 404) {
      alert("Pokémon not found");
      return;
    }
    const pokeDetails = await pokeInfo.json();
    console.log(pokeDetails);

    document.getElementById("pokemon-name").innerHTML = "";
    document.getElementById("pokemon-id").innerHTML = "";
    document.getElementById("weight").innerHTML = "";
    document.getElementById("height").innerHTML = "";
    document.getElementById("pokemon-image").src = "";
    document.getElementById("types").innerHTML = "";
    document.getElementById("hp").innerHTML = "";
    document.getElementById("attack").innerHTML = "";
    document.getElementById("defense").innerHTML = "";
    document.getElementById("special-attack").innerHTML = "";
    document.getElementById("special-defense").innerHTML = "";
    document.getElementById("speed").innerHTML = "";

    document.getElementById("pokemon-name").innerHTML =
      pokeDetails.name.toUpperCase();
    document.getElementById("pokemon-id").innerHTML = `#${pokeDetails.id}`;
    document.getElementById(
      "weight"
    ).innerHTML = `Weight: ${pokeDetails.weight}`;
    document.getElementById(
      "height"
    ).innerHTML = `Height: ${pokeDetails.height}`;
    document.getElementById(
      "pokemon-image"
    ).innerHTML = `<img id="sprite" src=${pokeDetails.sprites.front_default}>`;
    pokeDetails.types.forEach((element) => {
      const typeSpan = document.createElement("span");
      typeSpan.classList.add("type-color", `${element.type.name}`);
      typeSpan.textContent = element.type.name.toUpperCase();
      document.getElementById("types").appendChild(typeSpan);
    });
    document.getElementById("hp").innerHTML = pokeDetails.stats[0].base_stat;
    document.getElementById("attack").innerHTML =
      pokeDetails.stats[1].base_stat;
    document.getElementById("defense").innerHTML =
      pokeDetails.stats[2].base_stat;
    document.getElementById("special-attack").innerHTML =
      pokeDetails.stats[3].base_stat;
    document.getElementById("special-defense").innerHTML =
      pokeDetails.stats[4].base_stat;
    document.getElementById("speed").innerHTML = pokeDetails.stats[5].base_stat;
  } catch (error) {
    console.error("Error fetching pokemon details", error);
    alert("Sorry, an error occured during fetching the pokemon details");
  }
}

searchButton.addEventListener("click", () => {
  let pokemon = inputDom.value.toLowerCase();
  pokemonFetchDetails(pokemon);
});
inputDom.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    let pokemon = inputDom.value.toLowerCase();
    pokemonFetchDetails(pokemon);
  }
});

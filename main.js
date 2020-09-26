
let btn = document.querySelector("#btn")




btn.addEventListener('click', () => {
    const apiData = {
        url: "https://pokeapi.co/api/v2/",
        type: "pokemon",
        id: Math.floor(Math.random() * 1051)
    };
    
    const apiURL = `${apiData.url}${apiData.type}/${apiData.id}`;
    
    fetch(apiURL)
        .then((data) => data.json())
        .then((pokemon) => generateHTML(pokemon))
})


const generateHTML = (data) => {

    console.log(data);
    const html = `
    <div class="name">${data.name}</div>
    <img src=${data.sprites.front_default} alt="pokemon" width="200" height="150">
    <div class="details">
    <span>Height: ${data.height}</span>
    <span>Weight: ${data.weight}</span>
</div>
    `
    const pokemonDiv = document.querySelector(".pokemon")
    pokemonDiv.innerHTML = html;

}



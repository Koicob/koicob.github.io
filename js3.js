let input = document.getElementById("inPokemon");
let searchBtn = document.getElementById("searchBtn");
let addBtn = document.getElementById("addBtn");

let image = document.getElementById("pokeImg");
let audio = document.getElementById("pokeSound");

let move1 = document.getElementById("move1");
let move2 = document.getElementById("move2");
let move3 = document.getElementById("move3");
let move4 = document.getElementById("move4");

let teamDiv = document.getElementById("team");

let currentPokemon = null;

searchBtn.addEventListener("click", getPokemon);

function getPokemon() {

    let value = input.value.toLowerCase();

    let savedData = localStorage.getItem(value);

    if (savedData === null) {

        fetch("https://pokeapi.co/api/v2/pokemon/" + value)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                localStorage.setItem(value, JSON.stringify(data));
                showPokemon(data);
            })
            .catch(function() {
                image.src = "";
                audio.src = "";
                clearMoves();
                currentPokemon = null;
            });

    } else {

        let data = JSON.parse(savedData);
        showPokemon(data);

    }
}


function clearMoves() {

    move1.innerHTML = "";
    move2.innerHTML = "";
    move3.innerHTML = "";
    move4.innerHTML = "";

}

function showPokemon(data) {

    currentPokemon = data;

    image.src = data.sprites.front_default;

    audio.src = data.cries.latest;
    audio.load();

    clearMoves();

    fillMoves(data.moves);
}



function fillMoves(moves) {

    for (let i = 0; i < moves.length; i++) {

        let moveName = moves[i].move.name;

        let option1 = document.createElement("option");
        option1.textContent = moveName;
        move1.appendChild(option1);

        let option2 = document.createElement("option");
        option2.textContent = moveName;
        move2.appendChild(option2);

        let option3 = document.createElement("option");
        option3.textContent = moveName;
        move3.appendChild(option3);

        let option4 = document.createElement("option");
        option4.textContent = moveName;
        move4.appendChild(option4);
    }
}

addBtn.addEventListener("click", addToTeam);

function addToTeam() {

    if (currentPokemon === null) {
        return;
    }

    let entry = document.createElement("div");

    let img = document.createElement("img");
    img.src = currentPokemon.sprites.front_default;
    img.width = 100;

    let title = document.createElement("h3");
    title.textContent = currentPokemon.name;

    let list = document.createElement("ul");

    let li1 = document.createElement("li");
    li1.textContent = move1.value;

    let li2 = document.createElement("li");
    li2.textContent = move2.value;

    let li3 = document.createElement("li");
    li3.textContent = move3.value;

    let li4 = document.createElement("li");
    li4.textContent = move4.value;

    list.appendChild(li1);
    list.appendChild(li2);
    list.appendChild(li3);
    list.appendChild(li4);

    entry.appendChild(img);
    entry.appendChild(title);
    entry.appendChild(list);

    teamDiv.appendChild(entry);
}

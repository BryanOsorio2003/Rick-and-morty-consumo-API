
const url = 'https://rickandmortyapi.com/api/character/';
let select = document.getElementById('selectCharacters');
let card = document.getElementById('card');
const personajes = [];
function api() {
    fetch(url)
    .then(response => response.json())
    .then(data=>{
        data.results.forEach(element => {
            personajes.push(element);
            select.innerHTML = select.innerHTML + `<option value="${element.id}">${element.name}</option>`
            select.addEventListener('change', validatingCharacters);
        });
        console.log(personajes);
    })
    .catch(error => console.log(error)) 
}

function mostrarCarta() {
    personajes.forEach(element => {
        let nombre = document.createElement('h1');
        let div_card = document.createElement('div');
        let image = document.createElement('img');
        let status = document.createElement('p')
        let gender = document.createElement('p')

        
        nombre.textContent = element.name;
        image.setAttribute('src',element.image)
        status.textContent = element.status;
        gender.textContent = element.gender;

        nombre.classList.add('title');
        status.classList.add('status');
        gender.classList.add('gender');
        div_card.classList.add('div_Card');

        card.appendChild(div_card);
        div_card.appendChild(nombre);
        div_card.appendChild(image);
        div_card.appendChild(gender);
        div_card.appendChild(status);
    })
}

function mostrarUnaCarta() {
    console.log(select.value);
    console.log(personajes[select.value -1].name);

        
        let nombre = document.createElement('h1');
        let div_card = document.createElement('div');
        let image = document.createElement('img');
        let status = document.createElement('p')
        let gender = document.createElement('p')

        

        nombre.textContent = personajes[select.value -1].name;
        image.setAttribute('src',personajes[select.value -1].image);
        status.textContent = personajes[select.value -1].status;
        gender.textContent = personajes[select.value -1].gender;


        nombre.classList.add('title');
        status.classList.add('status');
        gender.classList.add('gender');
        div_card.classList.add('div_Card')

        card.appendChild(div_card);
        div_card.appendChild(nombre);
        div_card.appendChild(image);
        div_card.appendChild(gender);
        div_card.appendChild(status);
    
}

function validatingCharacters() {
    if (select.value == 21){
        mostrarCarta();
    }
    else{
        mostrarUnaCarta();
    }
}

api();
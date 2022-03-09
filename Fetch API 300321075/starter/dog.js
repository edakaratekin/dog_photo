const url = `https://dog.ceo/api/breeds/image/random`;
var button = document.querySelector(`#load-photo`);

button.addEventListener("click", init);

async function init(){
    
    loadSpinner();
    const data = await getRandomDogPhoto();
    removeSpinner();
    console.log(data);
    renderDogPhoto(data.message);
    button.style.display = "none";
}

function getRandomDogPhoto(){

    return    fetch(url)
        .then((response) => response.json())
        //.then((data) => {data;}) // is this right??
        .catch((error) => console.error(error));
}

function renderDogPhoto($img){
    document.querySelector(`#container`).insertAdjacentHTML(
        `beforeend`,
        `<img src=${$img} alt="Random photo of a dog" />`);   
}


function loadSpinner() {
    button.disabled = true;
    const spinner = `../assets/loader.svg`;
    const img = `<img src="${spinner}" id="spinner" alt="Loading spinner image" />`;
    button.insertAdjacentHTML( `afterbegin`, img );
}

function removeSpinner() {
    const spinner = document.querySelector(`img#spinner`);
    spinner.parentElement.removeChild(spinner);
}

//init();
console.log("i work!");

function getDogImage(numberOfPictures = 3) {
    fetch(`https://dog.ceo/api/breeds/image/random/${numberOfPictures}`)
    .then((response) => {
        console.log(response)
        return response.json();
    })
    .then((myJSON) => {
        displayResults(myJSON);
    })
    .catch((error) => {
        console.log(error);
        alert ('Something when wrong. Try again later.');
    })
}

function displayResults(myJSON) {
    console.log(myJSON);
    $(".api-images").html( `<h2>Look at these Dogs!</h2>`);
    for (let i = 0; i < myJSON.message.length; i++) {
        $(".api-images").append(`<img src="${myJSON.message[i]}" width="200" height="auto" />`);
    }
}

function watchForm() {
    $('.number-dogs').submit(event => {
        event.preventDefault();
        let numDogs = $('#numberPictures').val();
        getDogImage(numDogs);
    });
}

watchForm();

function getBreedImage(breedOfDog = "hound") {
    fetch(`https://dog.ceo/api/breed/${breedOfDog}/images/random`)
    .then((response) => {
        console.log(response)
        return response.json();
    })
    .then((responseJSON) => {
        displayBreedResults(responseJSON);
    })
    .catch((error) => {
        console.log(error);
        alert ('Something when wrong. Try again later.');
    })
}

function displayBreedResults(responseJSON) {
    console.log(responseJSON);
    $('.breed-images').html(`<h2>Look at this breed of Dog!</h2>`);
    $('.breed-images').append(`<img src="${responseJSON.message}" width="200" height="auto" />`);
}

function watchBreedForm() {
    $('.breed-form').submit(event => {
        event.preventDefault();
        let breedDog = $('#breedDog').val();
        console.log(breedDog);
        getBreedImage(breedDog);
    });
}

watchBreedForm();
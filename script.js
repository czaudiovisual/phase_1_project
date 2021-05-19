// Common used values
const AccessToken = '3754126508031263';
const url = 'https://www.superheroapi.com/api.php/'+AccessToken+'/search/';

let superHeroes = []


// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    fetchSuperheroes();
});


// Calling API
const fetchSuperheroes = (search) => {
    const defaultSearch = "doctor";
    fetch(`${url}${search || defaultSearch}`)
    .then(res => res.json())
    .then((data) => {
        superHeroes = data.results
        renderSuperheroes(data.results)

    });
    // .then(data => console.log(data));
};


// container to display images
const renderSuperheroes = (superheroes) => {
   const container = document.querySelector(".container");
    container.innerHTML = ""
   superheroes.map((doctor) => {
       const div = document.createElement("div");
       // center the images with Bulma
       div.className = "column is-one-fifth"
       div.innerHTML = `
       <img src="${doctor.image.url}"/>
       <h3>${doctor.name}</h3>
       <p>Gender: ${doctor.appearance.gender}</p>
       <p>Publisher: ${doctor.biography.publisher}</p>
       <p>Alignment: ${doctor.biography.alignment}</p>  
       `;
    //    div.classList.add("columns");
    container.append(div);    
   });
}


//create two buttons, one for 'good guys' and one for 'bad guys'

const goodSuperheroesButton = document.getElementById("good-superheroes");
goodSuperheroesButton.addEventListener("click", () => {
   const filteredHeroes = superHeroes.filter(hero => hero.biography.alignment === "good");
   renderSuperheroes(filteredHeroes);
});

const badSuperheroesButton = document.getElementById("bad-superheroes");
badSuperheroesButton.addEventListener("click", () => {
   const filteredHeroes = superHeroes.filter(hero => hero.biography.alignment === "bad");
   renderSuperheroes(filteredHeroes);
});

const neutralSuperheroesButton = document.getElementById("neutral-superheroes");
neutralSuperheroesButton.addEventListener("click", () => {
   const filteredHeroes = superHeroes.filter(hero => hero.biography.alignment === "neutral");
   renderSuperheroes(filteredHeroes);
});

//create a reset button
const renderSuperheroesButton = document.getElementById("reset");
renderSuperheroesButton.addEventListener("click", () => {
   renderSuperheroes(superHeroes);
});

//Create a search bar
const searchBar = document.getElementById("search");
searchBar.addEventListener("keyup", () => {
   fetchSuperheroes(searchBar.value);
});

// on button click, filterHeroes 
// filterHeroes 
    // const filteredHeroes = superHeroes.filter(hero => hero.alignment === "good") (or "bad")
    // once you have a sorted array, again invoke renderSuperHeroes(filteredHeroes)



document.addEventListener("DOMContentLoaded", () => {
    fetchSuperheroes();
});

const fetchSuperheroes = () => {
    fetch("https://www.superheroapi.com/api.php/3754126508031263/search/doctor")
    .then(res => res.json())
    .then((data) => renderSuperheroes(data.results));
    // .then(data => console.log(data));
};

const renderSuperheroes = (superheroes) => {

   const container = document.querySelector(".container");
   superheroes.map((doctor) => {
       const div = document.createElement("div");
       div.innerHTML = `
       <img src="${doctor.image.url}"/>
       <h3>${doctor.name}</h3>
       <p>Gender: ${doctor.appearance.gender}</p>
       <p>Publisher: ${doctor.biography.publisher}</p>
       <p>Alignment: ${doctor.biography.alignment}</p>
       `;
    container.append(div);    
   });
};


// const renderSuperheroes = (superheroes) => {
//     // const container = document.querySelector("container");
//     // superheroes.map((hero) => {
//     //     const div = document.createElement("div");
//     //     div.innerHTML = `
//     //     <img src="hero.image"/>
//     //     <h3>${hero.name}</h3>
//     //     <p>${hero.gender}</p>
//      console.log(superheroes.slice(0,40));
//     // `
//     //  container.append(div);
//     // });
    
// };
const apiKey = '7f7c415b';
const searchBtn = document.querySelector('.searchBtn'); 
const input = document.querySelector('.input');
const film = document.querySelector('.film');

async function movie(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.Search);
        movieInfo(data);
    } catch(err) { 
        console.log(err);
    }
}

function act() {
    const mov = `https://www.omdbapi.com/?apikey=${apiKey}&s=${input.value}`;
    movie(mov);
}

searchBtn.addEventListener('click', () => {
    act();
});

function movieInfo(data) {
   
    film.innerHTML = '';

 
    data.Search.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `
            <h2>${movie.Title}</h2>
            <p>Year: ${movie.Year}</p>
             <p>Type: ${movie.Type}</p>
            <img src="${movie.Poster}" alt="${movie.Title}">
        `;
        film.appendChild(movieDiv);
    });
}

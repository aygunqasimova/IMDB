


    // const myPromisie = new Promise((resolve,reject)=>{
    //     let obj = {
    //         baku: {
    //             temp: {
    //                 day: 23,
    //                 night: 12,
    //             },
    //             wind: {
    //                 speed: '23 m/s'
    //             },
    //             humudity: {
    //                 day: "50%",
    //                 night: '23%'
    //             },
    //             locat: {
    //                 city_name: 'Baku',
    //                 country: "Azerbaijan",
    //                 timezone: {
    //                     tm: 14400,
    //                     shortN: 'AZ/Baku'
    //                 }
    //             }
    //         },
    //         sumgayit: {
    //             temp: {
    //                 day: 23,
    //                 night: 12,
    //             },
    //             wind: {
    //                 speed: '23 m/s'
    //             },
    //             humudity: {
    //                 day: "50%",
    //                 night: '23%'
    //             },
    //             locat: {
    //                 city_name: 'Baku',
    //                 country: "Azerbaijan",
    //                 timezone: {
    //                     tm: 14400,
    //                     shortN: 'AZ/Baku'
    //                 }
    //             }
    //         }
    //     }
    //     if(obj.length !=0){
    //         resolve(obj)
    //     }else{
    //         reject('data not faund')

    //     }
    //     })
        
    // console.log(myPromisie);

    // myPromisie.then((obj) =>{
    //     const arr = Object.entries(obj)
    //     console.log(arr);
    // }) .catch((err) =>{
    //     console.log(err);

    // })
        

//     const apiKey = '7f7c415b'
//     const searchBtn = document.querySelector('.searchBtn') 
//     const input = document.querySelector('.input')
//     const film = document.querySelector('.film')

//   async function movie(url) {
//     try{
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log(data.Search);
//         // movieInfo(data)
//     } catch(err) { 
//     console.log(err);
// }
//   }



// function act(){
//     const mov = `http://www.omdbapi.com/?apikey=${apiKey}&s=${input.value}`
//     movie(mov)
// }
// act() 

// searchBtn.addEventListener('click', ()=>{
//     act()
// })

// // function movieInfo(data){

// // }


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

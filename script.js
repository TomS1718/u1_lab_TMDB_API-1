const API_KEY = 'af7379adb8f8bc15637a096360bf4617'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'
const searchbtn = document.querySelector('#search')
// const detailsbtn = document.querySelector('#view-details')
const movieInput = document.querySelector('input')
const movie_list = document.querySelector('.movie-list')

searchbtn.addEventListener('click', async () => {
  let movie = movieInput.value
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=af7379adb8f8bc15637a096360bf4617`)



  const renderList = response.data.results;
console.log(response.data.results)
  renderList.forEach((movie) => {
    const movieItem = document.createElement('li')
    const moviePoster = document.createElement('img')

    moviePoster.setAttribute('src', IMAGE_BASE_PATH + movie.poster_path)

    movieItem.innerHTML = movie.original_title;
    movie_list.append(movieItem);
    movie_list.append(moviePoster)

 
  
  });

 

})

/// Bonus in progress
   // create details button

    // const detailsbtn = document.createElement('button')
    // detailsbtn.innerHTML = 'View Details'
    // movieItem.append(detailsbtn)

    //details button function

    // detailsbtn.addEventListener('click' () => {
     
    //   // const movieDetails = document.createElement('p')
    //   // movieItem.innerHTML = movie.id;
    // // })
     // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>

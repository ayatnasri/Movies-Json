// API information.
let x = 3;
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1'+ '&page=' + x;
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

// Selecting our Elements.
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

/* call the showMovies function that requests the movie data from the Api using fetch.
 Then it puts those data in the main HTML tag by creating elments for those data. */
showMovies(apiUrl);
function showMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    data.results.forEach(element => {

      // Creating elemnts for our data inside the main tag. 
        const el = document.createElement('div');
        const image = document.createElement('img');
        const text = document.createElement('h2');
        const lang = document.createElement('h3');
        const movieDate = document.createElement('span');

        text.innerHTML = `${element.title}`;
        lang.innerHTML = `${element.original_language}`;
        movieDate.innerHTML = `${element.release_date}`;
        image.src = IMGPATH + element.poster_path;

        el.appendChild(image);
        el.appendChild(text);
        el.appendChild(lang);
        el.appendChild(movieDate);
        main.appendChild(el);

        console.log(data);
    }); 
});
}

// Prevent the Form from submitting if the search bar is empty.
form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';
     
    const searchTerm = search.value;
 /* Adding the value wriiten in the search bar to the search Api,
    in order to get the movies we search for. */
    if (searchTerm) {
        showMovies(SEARCHAPI + searchTerm);
        search.value = "";
    }
});


/* trying to applay the Next & Prev buttons ...  

const btns = document.querySelectorAll(".btn");
btns.forEach(function(btn){
    btn.addEventListener("click", function(a){
        const styles = a.currentapiUrl.classList;
        if (styles.contains('prev-btn')){
            x--;
        }
        else if (styles.contains('next-btn')){
            x++;
        }
        console.log(x);
    });
});
*/

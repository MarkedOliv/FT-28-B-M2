const apiKey = 'd11d144f';

export function addMovieFavorite(title) {
    return { type: "ADD_MOVIE_FAVORITE", payload: title };
  }
  
export function getMovies(titulo) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=` + titulo)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
}
export function getMovieDetail(id) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
        });
    };
}
export function removeMovieFavorite(id) {
    return { 
        type: "REMOVE_MOVIE_FAVORITE", payload: id
    }
};
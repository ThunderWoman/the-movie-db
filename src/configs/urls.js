const baseURL = "https://api.themoviedb.org/3";
const apiKey = "movie?api_key=0176dc238254b200ac302953773f0ba3";
export const key = "?api_key=0176dc238254b200ac302953773f0ba3";

export const urls = {

    movies: `/discover/${apiKey}`,
    movie: '/movie',
    search: '/search/movie',
    genres: '/genre/movie/list'
}
export {apiKey};
export default baseURL;
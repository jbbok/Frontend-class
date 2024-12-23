const API_KEY = "102f29a56e9474e5d36e909945d8ea0c";
const BASE_PATH = "https://api.themoviedb.org/3";

interface Movie {
  id: number;
  backdrop_path: string;
  genre_ids: number[];
  poster_path: string;
  title: string;
  original_title: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  adult: boolean;
}

export interface GetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const getMovies = () => {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
};

export const searchContents = (keyword: string | null) => {
  return fetch(
    `${BASE_PATH}//search/movie?api_key=${API_KEY}&query=${keyword}`
  ).then((response) => response.json());
};

export const searchGeneres = () => {
  return fetch(`${BASE_PATH}/genre/movie/list?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
};

export const getReviews = (movieId: ) => {
  return fetch(`${BASE_PATH}/movie/${movieId}/reviews?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
};

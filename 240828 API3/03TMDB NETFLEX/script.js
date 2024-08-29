import api from "./env.js";

const form = document.querySelector("form");
// console.log(form);

const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api.API_KEY}&language=ko&page=1`;

// const createBlock = (movie) => {
//   console.log(movie);
// };

const movieDetail = (e) => {
  // console.log(e.target.parentElement);
  const { id } = e.target.parentElement;
  // console.log(e.target.parentElement.id);
  // console.log(id);

  const detailURL = `https://www.themoviedb.org/movie/${id}`;
  window.open(detailURL, "_blank");
};

const createBlock = ({
  id,
  poster_path,
  original_title,
  title,
  vote_average,
  release_date,
}) => {
  const parent = document.querySelector(".contents");
  const movie = document.createElement("div");
  const poster = document.createElement("img");
  const detail = document.createElement("div");
  const info = document.createElement("div");
  const h3 = document.createElement("h3");
  const date = document.createElement("div");
  const rate = document.createElement("div");

  movie.className = "movie";
  detail.className = "detail";
  info.className = "info";
  date.className = "date";
  rate.className = "rate";

  movie.id = id;
  poster.src = `https://image.tmdb.org/t/p/original/${poster_path}`;
  h3.innerText = `${original_title} (${title})`;
  date.innerText = release_date;
  rate.innerText = `⭐⭐⭐ ${vote_average}`;

  info.append(date, rate);
  detail.append(info, h3);
  movie.append(poster, detail);
  parent.append(movie);

  poster.addEventListener("click", movieDetail);
};

fetch(url)
  .then((response) => response.json())
  .then(({ results }) => {
    // console.log(results);
    results.forEach((movie) => {
      createBlock(movie);
    });
  });

const removeAll = () => {
  const movies = document.querySelectorAll(".movie");
  movies.forEach((movie) => {
    movie.remove();
  });
};

const searchMovie = (e) => {
  e.preventDefault();
  // console.log("event");

  const input = document.querySelector("input");
  // console.log(input.value);
  // const { value } = input;
  // console.log(value);
  const { value: keyword } = input;
  // console.log(keyword);
  const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${api.API_KEY}&query=${keyword}&include_adult=false&language=ko&page=1`;

  if (keyword) {
    removeAll();
    fetch(searchURL)
      .then((response) => response.json())
      // .then((result) => console.log(result.results));
      .then(({ results }) =>
        results.forEach((movie) => {
          createBlock(movie);
        })
      );
  }
};

form.addEventListener("submit", searchMovie);

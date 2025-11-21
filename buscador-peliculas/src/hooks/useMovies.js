import ejemploRespuesta from "../mock/ejemploRespuesta.json";

export function useMovies() {
  const movies = ejemploRespuesta.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return { movies: mappedMovies };
}

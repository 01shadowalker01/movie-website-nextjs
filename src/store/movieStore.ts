import { create } from "zustand";
import { Movie } from "@/models/Movie";

type MovieStore = {
  movies: Movie[];
  moviesById: Record<string, Movie>;
  getMovieById: (id: string) => Movie | undefined;
  setMovies: (movies: Movie[]) => void;
};

export const movieStore = create<MovieStore>((set, get) => ({
  movies: [],
  moviesById: {},
  getMovieById: (id) => get().moviesById[id],
  setMovies: (movies) =>
    set(() => {
      const moviesById = convertToMoviesById(movies);

      return {
        movies,
        moviesById,
      };
    }),
}));

function convertToMoviesById(movies: Movie[]): Record<string, Movie> {
  return movies.reduce(
    (acc, movie) => {
      acc[movie.id] = movie;
      return acc;
    },
    {} as Record<string, Movie>,
  );
}

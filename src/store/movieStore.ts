import { create } from "zustand";
import { Movie } from "@/models/Movie";

export const useStore = create((set) => ({
  movies: [],
  setMovies: (newMovies: Movie[]) => set({ bears: newMovies }),
}));

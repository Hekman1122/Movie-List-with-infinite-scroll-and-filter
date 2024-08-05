import { create } from "zustand";
import { MovieType } from "./type";

type MovieArray = {
  movies: MovieType[];
};

type Actions = {
  updateMovieArray: (newMovieArray: MovieType[]) => void;
};

export const useMovieStore = create<MovieArray & Actions>()((set) => ({
  movies: [],
  updateMovieArray: (newMovieArray: MovieType[]) =>
    set((state) => ({ movies: [...state.movies, ...newMovieArray] })),
}));

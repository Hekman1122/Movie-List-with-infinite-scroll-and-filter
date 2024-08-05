import { create } from "zustand";
import { TargetType } from "./type";

type MovieArray = {
  movies: TargetType[];
};

type Actions = {
  updateMovieArray: (newMovieArray: TargetType[]) => void;
};

export const useMovieStore = create<MovieArray & Actions>()((set) => ({
  movies: [],
  updateMovieArray: (newMovieArray: TargetType[]) =>
    set((state) => ({ movies: [...state.movies, ...newMovieArray] })),
}));

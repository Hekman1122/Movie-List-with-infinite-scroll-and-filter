"use client";
import MovieCard from "./MovieCard";
import Hero from "./Hero";
import Category from "./Category";
import { useMovieStore } from "@/app/lib/state";
import { useState } from "react";
import Loading from "./Loading";
import { MovieType } from "@/app/lib/type";
type Props = {
  originalMovies: MovieType[];
};

export default function Main({ originalMovies }: Props) {
  const [limit, setLimit] = useState<number>(20);

  const updateMovieArray = useMovieStore((state) => state.updateMovieArray);
  updateMovieArray(originalMovies);
  const movies = useMovieStore((state) => state.movies);
  const limitMovies = movies.slice(0, limit);
  function randomPickOne(lengthen: number): number {
    return Math.floor(Math.random() * lengthen);
  }
  return (
    <>
      {/* Hero */}
      <Hero imageUrl={movies[randomPickOne(movies.length)].image} />
      {/* Category */}
      <Category />
      <article className="grid grid-cols-4 gap-6 justify-items-center">
        {limitMovies.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />;
        })}
      </article>
      <Loading />
    </>
  );
}

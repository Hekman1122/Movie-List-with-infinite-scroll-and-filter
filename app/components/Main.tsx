"use client";
import MovieCard from "./MovieCard";
import Hero from "./Hero";
import Category from "./Category";
import { MovieType } from "@/app/lib/type";
import { useState } from "react";
import Loading from "./Loading";
type Props = {
  originalMovies: MovieType[];
};

export default function Main({ originalMovies }: Props) {
  const [limit, setLimit] = useState<number>(20);
  const movies = originalMovies.slice(0, limit);
  function randomPickOne(lengthen: number): number {
    return Math.floor(Math.random() * lengthen);
  }
  return (
    <>
      {/* Hero */}
      <Hero imageUrl={movies[randomPickOne(movies.length)]?.image} />
      {/* Category */}
      <Category />
      <article className="grid grid-cols-4 gap-6 justify-items-center">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />;
        })}
      </article>
      {limit === 100 ? (
        <div className="py-4 mt-10">
          <p className="text-center text-2xl font-semibold">
            Sorry no more movies...
          </p>
        </div>
      ) : (
        <Loading setLimit={setLimit} />
      )}
    </>
  );
}

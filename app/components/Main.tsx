"use client";
import MovieCard from "./MovieCard";
import Hero from "./Hero";
import Category from "./Category";
import { MovieType } from "@/app/lib/type";
import { useState, useCallback } from "react";
import Loading from "./Loading";
type Props = {
  originalMovies: MovieType[];
};

export default function Main({ originalMovies }: Props) {
  const [limit, setLimit] = useState<number>(20);
  const [selected, setSelected] = useState<string>("All");

  const movies =
    selected === "All"
      ? originalMovies.slice(0, limit)
      : originalMovies
          .slice(0, limit)
          .filter((item) => item.genre.includes(selected));
  return (
    <>
      {/* Hero */}
      <Hero
        imageUrl={
          movies.length >= 5
            ? movies[5].image
            : "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg"
        }
      />
      {/* Category */}
      <Category setSelected={setSelected} selected={selected} />
      <article className="grid grid-cols-4 gap-6 justify-items-center">
        {movies.length > 0 ? (
          movies.map((movie) => {
            return <MovieCard key={movie.id} {...movie} />;
          })
        ) : (
          <p className="text-center text-2xl font-semibold">No movies found</p>
        )}
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

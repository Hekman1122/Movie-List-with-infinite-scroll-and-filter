import { fetchMovies, TargetType } from "@/app/actions/actions";
import MovieCard from "./components/MovieCard";
import Hero from "./components/Hero";
import Category from "./components/Category";
export default async function Home() {
  let one: TargetType[] = await fetchMovies();

  function randomPickOne(lengthen: number): number {
    return Math.floor(Math.random() * lengthen);
  }

  return (
    <main className="max-w-7xl m-auto bg-neutral-800/80">
      {/* Hero */}
      <Hero imageUrl={one[randomPickOne(one.length)].poster_path} />
      {/* Category */}
      <Category />
      <article className="grid grid-cols-4 gap-6 justify-items-center">
        {one.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />;
        })}
      </article>
    </main>
  );
}

import { fetchMovies, TargetType } from "@/app/actions/actions";
import MovieCard from "./components/MovieCard";
export default async function Home() {
  let one: TargetType[] = await fetchMovies();
  return (
    <main className="px-10 max-w-7xl m-auto">
      <h1>Find movies you like and enjoy it.</h1>
      <div className="flex justify-between items-center">
        <ul className="flex items-center gap-6">
          <li>All</li>
          <li>Action</li>
          <li>Comedy</li>
          <li>Drama</li>
          <li>Horror</li>
          <li>Romance</li>
        </ul>
        {/* sort */}
        <select>
          <option value="popular"> Popular</option>
          <option value="release_date">release_date</option>
        </select>
      </div>

      <article className="grid grid-cols-4 gap-6 justify-items-center">
        {one.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />;
        })}
      </article>
    </main>
  );
}

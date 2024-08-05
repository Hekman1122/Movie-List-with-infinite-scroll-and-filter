import { fetchMovies } from "@/app/actions/actions";
import Main from "./components/Main";
import { MovieType } from "@/app/lib/type";
export default async function Home() {
  let originalMovies: MovieType[] = await fetchMovies();

  return (
    <main className="max-w-7xl m-auto bg-neutral-800/80 pb-10">
      <Main originalMovies={originalMovies} />
    </main>
  );
}

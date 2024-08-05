import { fetchMovies } from "@/app/actions/actions";
import Main from "./components/Main";
import { TargetType } from "@/app/lib/type";
import Loading from "./components/Loading";
export default async function Home() {
  let originalMovies: TargetType[] = await fetchMovies();

  return (
    <main className="max-w-7xl m-auto bg-neutral-800/80">
      <Main originalMovies={originalMovies} />
    </main>
  );
}

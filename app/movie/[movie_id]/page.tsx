interface Props {
  params: {
    movie_id: string;
  };
}
import { fetchMovies, TargetType } from "@/app/actions/actions";
import Image from "next/image";
Image;
export default async function Page({ params }: Props) {
  let movies: TargetType[] = await fetchMovies();
  const target = movies.find(
    (movie) => movie.id.toString() === params.movie_id
  )!;
  const { title, overview, release_date, poster_path, genres, runtime } =
    target;
  return (
    <article>
      {/* 圖片 */}
      <Image
        src={poster_path}
        alt={title}
        width={500}
        height={250}
        className="rounded-lg w-1/3 h-full shadow-md"
        priority
      />
      {/* 文字介紹 */}
      <div>
        <h2>{title}</h2>
        <div className="flex justify-between items-center">
          <p>{genres}</p>
          <p>{new Date(release_date).toLocaleDateString()}</p>
        </div>
        <p>{overview}</p>
        <div className="flex justify-between items-center">
          <p>Runtime : {runtime}</p>
          <button
            type="button"
            className=" border-2 border-white font-semibold text-sm px-3 py-1 rounded-lg hover:text-yellow-500 hover:border-yellow-500 transition-colors duration-300"
          >
            Watch
          </button>
        </div>
      </div>
    </article>
  );
}

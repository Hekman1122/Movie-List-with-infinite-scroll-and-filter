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
      <Image src={poster_path} alt={title} width={500} height={250} />
      {/* 文字介紹 */}
    </article>
  );
}

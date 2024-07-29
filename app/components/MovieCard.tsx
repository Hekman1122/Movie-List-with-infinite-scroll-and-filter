import { TargetType } from "@/app/actions/actions";
import Image from "next/image";

export default function MovieCard(props: TargetType) {
  const { id, title, overview, poster_path, genres, release_date } = props;
  function truncate(str: string) {
    return str.length > 120 ? str.substring(0, 120) + "..." : str;
  }
  return (
    <div className="w-64 flex flex-col gap-4 py-4">
      <Image
        src={poster_path}
        alt={title}
        width={300}
        height={240}
        className="rounded-md h-80 w-full"
      />
      <h2 className="h-12">{title}</h2>
      <p className="self-end">{new Date(release_date).toLocaleDateString()}</p>
      <p>{genres}</p>
      <p>{truncate(overview)}</p>
    </div>
  );
}

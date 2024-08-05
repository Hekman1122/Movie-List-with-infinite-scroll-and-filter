import Link from "next/link";
import { MovieType } from "../lib/type";
import Image from "next/image";

export default function MovieCard(props: MovieType) {
  const { title, image, year, imdb_link } = props;
  return (
    <div className="w-64 flex flex-col gap-2 py-4">
      <Image
        src={image}
        alt={title}
        width={300}
        height={240}
        className="rounded-md h-80 w-full"
      />
      <h2 className="h-16 text-lg font-bold">{title}</h2>
      <div className="flex justify-between items-center">
        <p className="font-semibold">{year}</p>
        <button
          type="button"
          className=" border-2 border-white font-semibold text-sm px-3 py-1 rounded-lg hover:text-yellow-500 hover:border-yellow-500 transition-colors duration-300"
        >
          <Link href={imdb_link}> More...</Link>
        </button>
      </div>
    </div>
  );
}

"use server";
import { MovieType, TargetType } from "@/app/lib/type";
function sortByDateStringDescending(arr: MovieType[]): MovieType[] {
  return arr.sort((a, b) => {
    const dateA = new Date(a.release_date);
    const dateB = new Date(b.release_date);
    return dateB.getTime() - dateA.getTime();
  });
}
export async function fetchMovies(): Promise<TargetType[]> {
  const url =
    "https://moviedatabase8.p.rapidapi.com/Filter?MinRating=5&MaxRating=10&MinYear=2018&MaxYear=2023&SpokenLanguage=English&Limit=100";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.X_RAPID_API_KEY as string,
      "x-rapidapi-host": process.env.X_RAPID_API_HOST as string,
    },
    next: { revalidate: 100 },
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const result: MovieType[] = await response.json();
  let orderResult = sortByDateStringDescending(result);
  let targetProperties: TargetType[] = orderResult.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      overview: movie.overview,
      poster_path: movie.poster_path,
      popularity: movie.popularity,
      genres: movie.genres ? movie.genres : "",
      runtime: movie.runtime,
    };
  });
  return targetProperties;
}

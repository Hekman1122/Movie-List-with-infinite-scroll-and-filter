"use server";
import { MovieType } from "@/app/lib/type";
function sortByDateStringDescending(arr: MovieType[]): MovieType[] {
  return arr.sort((a, b) => {
    const dateA = a.year;
    const dateB = b.year;
    return dateB - dateA;
  });
}
export async function fetchMovies(): Promise<MovieType[]> {
  const url = "https://imdb-top-100-movies.p.rapidapi.com/";
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
  return orderResult;
}

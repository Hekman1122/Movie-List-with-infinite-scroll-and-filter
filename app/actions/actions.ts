"use server";

export interface MovieType {
  id: number;
  title: string;
  vote_average: number;
  vote_count: number;
  status: string;
  release_date: string;
  revenue: number;
  runtime: number;
  adult: boolean;
  backdrop_path: string;
  budget: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  genres: string | undefined;
  production_companies: string;
  production_countries: string;
  spoken_languages: string;
}
export interface TargetType {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
  popularity: number;
  genres: string;
}
export async function fetchMovies(): Promise<TargetType[]> {
  // const url = "https://moviedatabase8.p.rapidapi.com/Random/20";
  const url =
    "https://moviedatabase8.p.rapidapi.com/Filter?adult=false&MinYear=2015&limit=21";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.X_RAPID_API_KEY as string,
      "x-rapidapi-host": process.env.X_RAPID_API_HOST as string,
    },
    next: { revalidate: 600 },
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const result: MovieType[] = await response.json();
  let targetProperties: TargetType[] = result.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      overview: movie.overview,
      poster_path: movie.poster_path,
      popularity: movie.popularity,
      genres: movie.genres ? movie.genres : "",
    };
  });
  return targetProperties;
}

// {
//   _id: '65ef3f76675dde801085cfe2',
//   id: 71271,                                        V
//   title: 'The Blue Bird',                           V
//   vote_average: 6.7,
//   vote_count: 27,
//   status: 'Released',
//   release_date: '1918-03-31T00:00:00.000Z',
//   revenue: 0,
//   runtime: 75,
//   adult: false,
//   backdrop_path: '/tJaesDj0k2Db8QqaUeFKSQO7UQG.jpg',
//   budget: 0,
//   imdb_id: 'tt0008891',
//   original_language: 'en',
//   original_title: 'The Blue Bird',
//   overview: 'Two peasant children, Mytyl and Tyltyl, are led by Berylune, a fairy, to search for the Blue Bird of Happiness. Berylune gives Tyltyl a cap with a diamond setting, and when Tyltyl turns the diamond, the children become aware of and conversant with the souls of a Dog and Cat, as well as of Fire, Water, Bread, Light, and other presumably inanimate things. The troupe thus sets off to find the elusive Blue Bird of Happiness.',       V
//   popularity: 1.676,                                                                                         V
//   poster_path: 'https://image.tmdb.org/t/p/original//eI9l0EIB2YGB24JAAczlYQBPQYw.jpg',                       V
//   genres: 'Drama, Fantasy',                                                                                  V
//   production_companies: 'Paramount',
//   production_countries: 'United States of America',
//   spoken_languages: 'No Language'
// }

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
  runtime: number;
}

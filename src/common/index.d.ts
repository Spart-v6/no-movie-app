export type MoviesArrayType = {
    title: string;
    backdrop_path: string;
    overview: string;
    poster_path: string;
    release_date: string;
    id: number;
    vote_average: number;
};


export type GeneresArray = {
    name: string;
}

export type ProductionCompaniesArray = {
    name: string;
    logo_path: string;
}

export type movieDetails = {
    backdrop_path: string;
    genres: Array<GeneresArray>;
    homepage: string;
    title: string;
    overview: string
    poster_path: string
    production_companies: Array<ProductionCompaniesArray>;
    release_date: string
    runtime: number
    tagline: string
    vote_average: string
}
export interface IMovieDetails {
    "adult": boolean,
    "backdrop_path": string,
    "belongs_to_collection": {
        "id": number,
        "name": string,
        "poster_path": string,
        "backdrop_path": string
    },
    "budget": number,
    "genres": IGenres[],
    "homepage": string,
    "id": number,
    "imdb_id": string,
    "original_language": string,
    "original_title": string,
    "overview": string,
    "popularity": number,
    "poster_path": string,
    "production_companies": ICompanies[],
    "production_countries": ICountries[],
    "release_date": string,
    "revenue": number,
    "runtime": number,
    "spoken_languages": ILanguage[],
    "status": string,
    "tagline": string,
    "title": string,
    "video": false,
    "vote_average": number,
    "vote_count": number
}

interface IGenres {
    "id": number,
    "name": string
}

interface ICompanies {
    "id": number,
    "logo_path": string,
    "name": string,
    "origin_country": string
}

interface ICountries {
    "iso_3166_1": string,
    "name": string
}

interface ILanguage {
    "english_name": string,
    "iso_639_1": string,
    "name": string
}
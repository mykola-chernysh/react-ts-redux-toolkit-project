export interface IImages {
    backdrops: IImage[]
}

export interface IImage{
    "aspect_ratio": number,
    "height": number,
    "iso_639_1": number,
    "file_path": string,
    "vote_average": number,
    "vote_count": number,
    "width": number
}
import Movie from "@/_assets/Entity/Movie";

const BASE_IMAGE_URL =
    "https://raw.githubusercontent.com/Ghamry0x1/Star-Wars-Movie-App/master/public/images";

type Props = {
    movie: Movie;
};

const MovieCard = (props: Props) => {
    const { movie } = props;

    return (
        <>
            <div className="font-bold">{movie.title}</div>
            <div>Episode: {movie.episode_number}</div>
            <img
                className="mt-auto"
                src={`${BASE_IMAGE_URL}/${movie.poster}`}
            />
        </>
    );
};

export default MovieCard;

import { getMovies } from '@/services/movie.service';
import { Movie } from '@/types/movie';

type MovieListItemProps = Movie & {
}

const MovieListItem = ({name, genre, releaseYear} : MovieListItemProps) => {
    return (
        <p>{name} - {releaseYear} ({genre})</p>
    );
}

const MovieList = async () => {

    const movies = await getMovies();

    return (
        <div>
            {movies.map(movie => (
                <MovieListItem key={movie.name} {...movie} />
            ))}
        </div>
    )
}

export default MovieList;
import movieData from '@/services/data/movie.json';
import { Movie } from '@/types/movie';

export const getMovies = async () => {
    await new Promise((resolve) => {setTimeout(resolve, 1000);});

    return movieData as Movie[];
} 
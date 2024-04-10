import MovieList from '@/app/ui/movie/MovieList';
import { Suspense } from 'react';

const Movie = async () => {

    // ↓ Déclanché le "loading.tsx"
    await new Promise((resolve) => setTimeout(resolve, 500));

    // ↓ Ensuite le rendu
    return (
        <>
            <h1>Movie!</h1>
            <Suspense fallback={<p>🐱‍🐉</p>}>
                <MovieList />
            </Suspense>
        </>
    );
};

export default Movie;
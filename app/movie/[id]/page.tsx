type MovieDetailProps = {
    params : {
        id: string
    }
};

const MovieDetail = async ({ params } : MovieDetailProps) => {

    console.log(params);

    return (
        <>
            <h1>Movie Detail {params.id}</h1>
        </>
    );
};

export default MovieDetail;
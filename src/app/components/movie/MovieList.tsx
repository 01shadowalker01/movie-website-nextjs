import MovieCard from "./MovieCard"

const MovieList = () => {
    return (
        <div className="flex flex-wrap gap-4">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    )
}

export default MovieList
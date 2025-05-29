import SearchBar from "@/app/components/ui/SearchBar";
import MovieList from "../components/movie/MovieList";

const DiscoverMoviesPage = () => {
    return (
        <div className="flex flex-col py-4 px-8">
            <SearchBar className="self-center" />
            <MovieList />
        </div>
    )
}

export default DiscoverMoviesPage;
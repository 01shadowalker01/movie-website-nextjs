type MovieDetailsProps = {
    params: {
        id: string;
    };
};
const MovieDetailsPage = ({ params: { id } }: MovieDetailsProps) => {
    return (
        <div>MovieDetailsPage {id}</div>
    )
}

export default MovieDetailsPage
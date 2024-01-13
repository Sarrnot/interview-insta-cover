import MovieList from "./_assets/parts/MovieList";

const HomePage = async () => {
    return (
        <main className="container mx-auto flex flex-col gap-6 items-center py-8">
            <h1 className="text-center text-3xl font-bold">Movies</h1>
            <MovieList />
        </main>
    );
};

export default HomePage;

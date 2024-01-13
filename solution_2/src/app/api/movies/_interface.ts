import Movie from "@/_assets/Entity/Movie";

namespace MoviesApi {
    export namespace Get {
        export type Response = Movie[];
    }
}

export default MoviesApi;

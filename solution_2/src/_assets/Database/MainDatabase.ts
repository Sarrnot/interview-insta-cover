import { Collection } from "mongodb";
import Database from "./Database";
import Movie from "../Entity/Movie";

class MainDatabase {
    public _instance = new Database("main").instance;
    movies: Collection<Movie>;

    constructor() {
        this.movies = this._instance.collection("movies");
    }
}

export default MainDatabase;

"use client";

import Movie from "@/_assets/Entity/Movie";
import { useState } from "react";
import List from "../components/List";
import ListItem from "../components/ListItem";
import MovieCard from "../components/MovieCard";
import useSWR from "swr";
import MoviesApi from "@/app/api/movies/_interface";

type SortDirection = "asc" | "desc";

const fetcher = (url: string) =>
    fetch(url)
        .then((res) => res.json())
        .then((data) => data);

const MovieList = () => {
    const {
        data: movies,
        isLoading,
        error,
    } = useSWR<MoviesApi.Get.Response>("/api/movies", fetcher);

    const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

    if (isLoading) {
        return <>Loading movies</>;
    }

    if (error || !movies) {
        return <>Something went wrong</>;
    }

    if (movies.length === 0) {
        return <>No movies found</>;
    }

    const toggleSortDirection = () =>
        setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));

    const sortByEpisode = (a: Movie, b: Movie) => {
        if (a.episode_number > b.episode_number) {
            return sortDirection === "asc" ? 1 : -1;
        }
        if (a.episode_number < b.episode_number) {
            return sortDirection === "asc" ? -1 : 1;
        }
        return 0;
    };

    return (
        <>
            <List>
                {movies
                    .slice()
                    .sort(sortByEpisode)
                    .map((movie, i) => (
                        <ListItem key={i}>
                            <MovieCard movie={movie} />
                        </ListItem>
                    ))}
            </List>
            <button
                className="button text-2xl shadow-lg"
                onClick={toggleSortDirection}
            >
                Sort by episode
            </button>
        </>
    );
};

export default MovieList;

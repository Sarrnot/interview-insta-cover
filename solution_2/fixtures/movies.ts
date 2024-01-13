import { Database } from "@/_assets/Database/DatabaseProvider";
import movies from "./movies.json";

const run = async () => {
    const movieCount = await Database.movies.countDocuments();

    if (movieCount === 0) {
        await Database.movies.insertMany(movies);
        console.log("Fixtures succesfully loaded");
    } else {
        console.log("Skipping, fixtures already loaded");
    }

    process.exit();
};

run();

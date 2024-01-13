import { Database } from "@/_assets/Database/DatabaseProvider";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const movies = await Database.movies
            .find({}, { projection: { _id: 0 } })
            .sort({ episode_number: 1 })
            .toArray();

        return NextResponse.json(movies);
    } catch {
        return NextResponse.error();
    }
};

import { Db, MongoClient } from "mongodb";

class Database {
    public instance: Db;

    constructor(databaseName: string) {
        const uri = process.env.MONGODB_URI;
        if (!uri)
            throw new Error(
                "Couldn't initialize database connection. Uri missing."
            );
        const client = new MongoClient(uri);
        this.instance = client.db(databaseName);
    }
}

export default Database;

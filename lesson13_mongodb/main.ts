import { MongoClient } from "mongodb";
const DbUrl = "mongodb://root:example@localhost:27017/";
const DbName = "recipe_db";

MongoClient.connect(DbUrl, (error, client) => {
    if (error) throw error;
    const db = client?.db(DbName);
    db?.collection("contacts")
        .find()
        .toArray((error, data) => {
            if (error) throw error;
            console.log(data);
        });
});

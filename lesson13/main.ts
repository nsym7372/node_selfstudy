import mysql from "mysql";

var connection = mysql.createConnection({
    host: "localhost",
    user: "mysql",
    password: "mysql",
    port: 8081,
    database: "recipe_db",
});

connection.connect();
connection.query("select * from contacts;", (error, result, fields) => {
    if (error) throw error;
    console.log(result);
});

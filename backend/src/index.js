import "dotenv/config";
import "./dbconnection.js";
import server from "./server.js";

server.listen (3000, () =>{
    console.log("Server running from port 3000");
});
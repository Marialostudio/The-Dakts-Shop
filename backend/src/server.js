import path from "path";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import daktsUsersRouter from "./routes/userroute.js";
import logInRouter from "./routes/loginroute.js";
import daktsProductRouter from "./routes/productroute.js";

const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use("/users", daktsUsersRouter);
server.use("/login", logInRouter);
server.use("/products", daktsProductRouter);
server.use("/images", express.static(path.resolve('images')));

server.get('/', (solicitud, respuesta) =>{
    //respuesta.json({mensaje: "Works!"});
    respuesta.status(404).send("No encontrado");
})

export default server;
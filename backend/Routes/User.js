import express from "express";
import { login } from "../Controllers/Auth.js";
import { updatechanneldata, getallchanels } from "../Controllers/channel.js";
const routes = express.Router();

routes.post("/login", login);
routes.patch("/update/:id", updatechanneldata);
routes.get("/getallchanel", getallchanels);

export default routes;

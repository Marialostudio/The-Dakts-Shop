import { Schema, model } from "mongoose";

const UsersDaktsSchema = new Schema(
    {
        name: {type: String, required: true},
        lastName: {type: String, required: true},
        emailAddress: {type: String, required: true},
        password: {type: String, required: true}
    }
)

export default model("DaktsUsers", UsersDaktsSchema);
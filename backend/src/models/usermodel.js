import { Schema, model } from "mongoose";

const UsersDaktsSchema = new Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        emailAddress: {type: String, required: true},
        password: {type: String, required: true},
        subscribe: {type: Boolean, required:false}
    }
)

export default model("DaktsUsers", UsersDaktsSchema);
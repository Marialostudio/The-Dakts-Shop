import { Schema, model } from "mongoose";

const DaktsProductSchema = new Schema({
        name: {type: String, required: true},
        subhead: {type: String, required: true},
        category: {type: String, required: true},
        description: {type: String, required: true},
        features: {
                preparation: {type: String, required: true},
                cocoaAmount: {type: String, required: true},
                caneSugar: {type: String, required: true},
                refinedSugar: {type: String, required: true},
                palmOil: {type: String, required: true},
                gluten: {type: String, required: true}
            },
        price: {type: String, required: true},
        weight: {type: String, required: true},
        availables: {type: Number, required: true},
        inStock: {type: Boolean, required: true},
        image: {type: String, required: true},
    },
    { versionKey: false, timestamps: true},
)

export default model("DaktsProducts", DaktsProductSchema);
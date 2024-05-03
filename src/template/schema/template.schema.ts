import { Schema } from "mongoose";

export const TemplateSchema = new Schema({    
    tImage: {
        type: String,
        required: true
    },
    tURL: {
        type: String,
        required: true
    },
   
    tStatus: {
        type: Number,
        default: 1
    },
   
},
    {timestamps:true}
);

export interface Template extends Document{
    tImage: String
    tURL: String
    tStatus:Number
}
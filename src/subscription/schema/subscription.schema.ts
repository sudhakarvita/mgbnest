import  { Schema, Document } from 'mongoose';

export const SubscriptionSchema = new Schema({   
    sName: {
        type:String,
        required: true
    }, 
    sMonths: {
        type: Number,
        required: true
    },         
    sAlbums: {
        type: Number,
        required: true
    },
    sCost: {
        type: Number, 
        required: true
    }, 
    sOfferCost: {
        type: Number,
        required: true
    },
    sStatus: {
        type: Number,
        required: true
    },
    sDescription: {
        type: String,
        required: true
    },
},
    {timestamps:true}
);

export interface Subscription extends Document {
     sName:string
     sMonths:number
     sAlbums:number
     sCost:number
     sOfferCost:number
     sStatus:number
     sDescription:string
}
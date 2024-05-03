import  { Schema, Document } from 'mongoose';



export const BookingSchema = new Schema({   
    albumId: {
        type: String,
        required: true
    },
    oQuantity: {
        type:Number,
        required: true
    },  
    oReorder: {
        type: Number,
        required: true
    },         
    oNote: {
        type: String,
        required: true
    },
    bookingAt: {
        type: Date,
        required: true
    }, 
    bHistory: {
        type: String,
        required: true
    },
    bFinal: {
        type: Number,
        required: true
    },
    bStatus: {
        type: Number,
        default: 1, 
    },
},
    {timestamps:true}
);

export interface Booking extends Document {
    
    albumId: String
    oQuantity: Number;
    oReorder: Number
    oNote: String;
    bookingAt:  Date;
    bHistory: String
    bFinal: Number;
    bStatus: Number;
}
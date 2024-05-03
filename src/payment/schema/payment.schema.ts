import mongoose, { Schema, Document } from 'mongoose';

export const PaymentSchema = new Schema({   
    cId: {
        type:mongoose.Schema.Types.ObjectId,
        required: true
    },
    sId: {
        type:mongoose.Schema.Types.ObjectId,
        required: true
    },  
    sEndDate: {
        type: Date,
        required: true
    },         
    sRemainAlbums: {
        type: Number,
        required: true
    },
    amountPaid: {
        type: Number,
        required: true
    }, 
    transactionID: {
        type: String,
        required: true
    },
    pStatus: {
        type: Number,
        required: true
    },
    paymentAt: {
        type: Date,
        required: true
    },
},
    {timestamps:true}
);

export interface Payment extends Document {
    
     cId: string;   
     sId: string;
     sEndDate: Date;
     sRemainAlbums: number;
     amountPaid: number;
     transactionID: string;
     pStatus: number;
     paymentAt: Date;
}
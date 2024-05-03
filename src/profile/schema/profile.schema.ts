import mongoose, { Schema, Document } from 'mongoose';

export const ProfileSchema = new Schema({   
     cId: {
        type:mongoose.Schema.Types.ObjectId,
        required: true
    }, 
     Fname: {
        type: String,
        required: true
    },         
     Lname: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        enum: ['Male', 'Female'], 
        required: true
    }, 
     Email: {
        type: String,
        required: true
    },
     Picture: {
        type: String,
        required: true
    },
},
    {timestamps:true}
);

export interface Profile extends Document {
    cId:mongoose.Schema.Types.ObjectId
    Fname:String,
    Lname:String,
    Gender: 'Male' | 'Female';
    Email:String,
    Picture:String
}
import mongoose, { Schema, Document } from 'mongoose';


export const FeedbackSchema = new Schema({   
     cId: {
        type:mongoose.Schema.Types.ObjectId,
        required: true
    },  
    albumId: {
        type: String,
        required: true
    },            
    cFeedback: {
        type: String,
        required: true
    },
    fStatus: {
        type: Number,
        default: 1, 
        
    },
},
    {timestamps:true}
);

export interface Feedback extends Document {
    
        cId:mongoose.Schema.Types.ObjectId;
        albumId:String
        cFeedback:String
        fStatus:Number
        
   
}
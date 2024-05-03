import { IsMongoId } from "class-validator"

export class FeedbackDto{
    @IsMongoId()
    cId:string
    
    albumId:string 
    cFeedback:string
    fStatus:number
}
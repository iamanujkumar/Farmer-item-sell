import { Schema, model, Document } from 'mongoose';

interface IComment extends Document {
  userId: Schema.Types.ObjectId;
  itemId: Schema.Types.ObjectId;  // Changed from productId to itemId
  comment: string;
  rating: number;
  createdAt: Date;
}

const commentSchema = new Schema<IComment>({
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  itemId: {  // Changed field name from productId to itemId
    type: Schema.Types.ObjectId, 
    ref: 'Item',   // Changed reference from 'Product' to 'Item'
    required: true 
  },
  comment: { 
    type: String, 
    required: true 
  },
  rating: { 
    type: Number, 
    min: 1, 
    max: 5, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Comment = model<IComment>('Comment', commentSchema);

export default Comment;
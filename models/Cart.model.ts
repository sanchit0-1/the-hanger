import mongoose, { Schema, Document } from "mongoose";

export interface ICart extends Document {
  created_by: mongoose.Types.ObjectId;
  status: string;
}

const CartSchema = new Schema<ICart>(
  {
    created_by: { type: Schema.Types.ObjectId, ref: "User" },
    status: String,
  },
  { timestamps: true }
);

export default mongoose.model<ICart>("Cart", CartSchema);

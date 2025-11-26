import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  // slug: string;
  email: string;
  phone: string;
  // role: string;
  name: string;
  // avatar?: string;
  // locale?: string;
  email_validated?: boolean;
  phone_validated?: boolean;
  bio?: string;
  // company?: string;
}

const UserSchema = new Schema<IUser>(
  {
    // slug: String,
    email: String,
    phone: String,
    // role: String,
    name: String,
    // avatar: String,
    // locale: String,
    email_validated: Boolean,
    phone_validated: Boolean,
    bio: String,
    // company: String,
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);

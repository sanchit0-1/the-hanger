import mongoose, { Schema, Document } from "mongoose";

export interface ISocialProfile extends Document {
  user_id: mongoose.Types.ObjectId;
  platform: string;
  platform_user: string;
}

const SocialProfileSchema = new Schema<ISocialProfile>(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    platform: String,
    platform_user: String
  },
  { timestamps: true }
);

export default mongoose.model<ISocialProfile>("SocialProfile", SocialProfileSchema);

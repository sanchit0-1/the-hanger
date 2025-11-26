import mongoose, { Schema, Document } from "mongoose";

export interface ICredential extends Document {
  provider_id: string;
  provider_key: string;
  user_id: mongoose.Types.ObjectId;
  hasher: string;
  password_hash: string;
  password_salt: string;
}

const CredentialSchema = new Schema<ICredential>(
  {
    provider_id: String,
    provider_key: String,
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    hasher: String,
    password_hash: String,
    password_salt: String
  },
  { timestamps: true }
);

export default mongoose.model<ICredential>("Credential", CredentialSchema);

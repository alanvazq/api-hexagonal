import { Schema, model, Document } from "mongoose";

interface Token extends Document {
    value: string;
    contactId: string;
    createdAt: Date;
    expiresAt: Date;
    used: boolean;

}

const TokenSchema = new Schema<Token>({
    value: { type: String, required: true },
    contactId: { type: String, required: true },
    createdAt: { type: Date, required: true },
    expiresAt: { type: Date, required: true },
    used: { type: Boolean, default: false }
});

export const TokenModel = model<Token>('Token', TokenSchema);
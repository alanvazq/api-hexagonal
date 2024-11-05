import { Token } from "../../domain/Token";
import { TokenRepository } from "../../domain/TokenRepository";
import { TokenModel } from "./TokenSchema";

export class MongoRepository implements TokenRepository {

    async createToken(token: Token): Promise<Token> {
        const tokenDocument = new TokenModel({
            value: token.value,
            contactId: token.contactId,
            createdAt: token.createdAt,
            expiresAt: token.expiresAt,
            used: token.used,
        });

        await tokenDocument.save();
        return new Token(
            tokenDocument.id,
            tokenDocument.value,
            tokenDocument.contactId,
            tokenDocument.createdAt,
            tokenDocument.expiresAt,
            tokenDocument.used,
        )
    }

    async findToken(value: string, contactId: string): Promise<Token | null> {
        return await TokenModel.findOne({ value, contactId })
    }

    async disableToken(tokenId: string): Promise<void> {
        await TokenModel.updateOne({ _id: tokenId }, { $set: { used: true } })
    }
}


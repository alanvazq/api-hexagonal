import { Token } from "./Token";

export interface TokenRepository {
    createToken(token: Token): Promise<Token>;
    findToken(value: string, contactId: string): Promise<Token | null>;
    disableToken(tokenId: string): Promise<void>;
}
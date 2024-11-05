import { Token } from "../domain/Token";
import { TokenRepository } from "../domain/TokenRepository";
import { v4 as uuidv4 } from 'uuid';


export class CreateToken {
    constructor(private tokenRepository: TokenRepository) { }

    async run(contactId: string): Promise<Token> {
        const tokenValue = Math.floor(100000 + Math.random() * 900000).toString();
        const createdAt = new Date();
        const expiresAt = new Date(createdAt.getTime() + 10 * 60 * 1000); // 10 minutos de caducidad

        const token = new Token(
            uuidv4(),
            tokenValue,
            contactId,
            createdAt,
            expiresAt,
            false
        );

        await this.tokenRepository.createToken(token);
        return token;
    }
}
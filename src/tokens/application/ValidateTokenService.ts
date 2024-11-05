import { TokenRepository } from "../domain/TokenRepository";

export class ValidateTokenService {
    constructor(private tokenRepository: TokenRepository) { }

    async run(value: string, contactId: string): Promise<boolean> {
        const token = await this.tokenRepository.findToken(value, contactId);
        if (!token || token.used || token.expiresAt < new Date()) {
            return false;
        }
        await this.tokenRepository.disableToken(token.id);
        return true;
    }
}
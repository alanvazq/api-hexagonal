import { CreateToken } from "../application/CreateToken";
import { ValidateTokenService } from "../application/ValidateTokenService";
import { CreateTokenController } from "./controllers/CreateTokenController";
import { ValidateTokenController } from "./controllers/ValidateTokenController";
import { MongoRepository } from "./repositories/MongoRepository";

const tokenRepository = new MongoRepository();
const createToken = new CreateToken(tokenRepository)

export const createTokenController = new CreateTokenController(createToken);

const validateTokenService = new ValidateTokenService(tokenRepository)

export const validateTokenController = new ValidateTokenController(validateTokenService)


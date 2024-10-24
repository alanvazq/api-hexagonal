import { User } from "../domain/entities/User";
import { UserRepository } from "../domain/repositories/UserRepository";

export class CreateUser {
    constructor(private repository: UserRepository) { }

    async run(id: string, name: string, lastName: string, email: string, phoneNumber: string, password: string, userType: 'client' | 'provider', subscriptionType: 'free' | 'premium'): Promise<User> {

        const user = new User(
            id,
            name,
            lastName,
            email,
            phoneNumber,
            password,
            userType,
            subscriptionType,
        );

        return this.repository.create(user);
    }


}
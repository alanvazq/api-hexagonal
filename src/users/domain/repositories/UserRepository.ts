import { User } from "../entities/User";

export interface UserRepository {

    create(user: User): Promise<User>
    getAll(): Promise<User[]>
    getUserById(uui: string): Promise<User>

}
import { User } from "../entities/Client";

export interface UserRepository {

    create(user: User): Promise<User>
    getAll(): Promise<User[]>
    getUserById(uui: string): Promise<User>

}
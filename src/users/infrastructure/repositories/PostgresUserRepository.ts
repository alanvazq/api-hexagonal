import pool from "../../../contacts/infrastructure/db/database";
import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/UserRepository";

export class PostgresUserRepository implements UserRepository {

    async createUser(user: User): Promise<User | null> {
        const query = {
            text: "INSERT INTO users (id, name, last_name, email, phone_number, password, role, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
            values: [user.id, user.name, user.lastName, user.email, user.phoneNumber, user.password, user.role, user.createdAt]
        };

        const result = await pool.query(query);
        const createdUser = result.rows[0];
        if (createdUser) return new User(createdUser.id, createdUser.name, createdUser.lastName, createdUser.email, createdUser.phoneNumber, createdUser.passsword, createdUser.role, createdUser.createdAt);
        return null;

    }

}

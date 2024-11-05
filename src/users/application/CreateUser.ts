import { ContactRepository } from "../../contacts/domain/ContactRepository";
import { User, UserRole } from "../domain/entities/User";
import { UserRepository } from "../domain/UserRepository";
import bcrypt from 'bcrypt';


export class CreateUser {
    constructor(private userReposiroty: UserRepository, private contactRepository: ContactRepository) { }

    async run(contactId: string, passsword: string, role: UserRole): Promise<User | null> {
        const contact = await this.contactRepository.getOneById(contactId);
        if (!contact) throw new Error("Contact not found or already registered as user");
        const hashedPassword = await bcrypt.hash(passsword, 10);
        const user = new User(
            contact.id,
            contact.name,
            contact.lastName,
            contact.email,
            contact.phoneNumber,
            hashedPassword,
            role,
            new Date()

        );
        await this.userReposiroty.createUser(user);
        //Convertir contacto a usuario
        return user;
    }
}
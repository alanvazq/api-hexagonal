import { Contact } from "../domain/Contact";
import { ContactRepository } from "../domain/ContactRepository";
import { v4 as uuidv4 } from 'uuid';

export class ContactCreate {

    constructor(private repository: ContactRepository) { }

    async run(name: string, lastName: string, email: string, phoneNumber: string): Promise<Contact | null> {
        const contact = new Contact(
            uuidv4(),
            name,
            lastName,
            email,
            phoneNumber,
            false,
        );

        await this.repository.create(contact);
        return contact;
    }
}
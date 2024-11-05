import { Contact } from "./Contact"

export interface ContactRepository {
    create(contact: Contact): Promise<Contact | null>
    getAll(): Promise<Contact[]>
    getOneById(id: string): Promise<Contact | null>    
    
}
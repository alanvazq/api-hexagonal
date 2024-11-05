import { Client } from "@nestjs/microservices";
import { Contact } from "../../domain/Contact";
import { ContactRepository } from "../../domain/ContactRepository";
import pool from "../db/database";
import { text } from "express";


type PostgresClient = {
    id: string,
    name: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    isUser: boolean,
}

export class PostgresRepository implements ContactRepository {

    async create(contact: Contact): Promise<Contact | null> {
        const query = {
            text: "INSERT INTO clients (id, name, last_name, email, phone_number, is_user) VALUES ($1, $2, $3, $4, $5, $6)",
            values: [contact.id, contact.name, contact.lastName, contact.email, contact.phoneNumber, contact.isUser]
        }
        const result = await pool.query(query);
        const createdContact = result.rows[0];
        if (createdContact) return new Contact(createdContact.id, createdContact.name, createdContact.lastName, createdContact.email, createdContact.phoneNumber, createdContact.isUser);
        return null;
    }

    async getAll(): Promise<Contact[]> {
        const query = {
            text: "SELECT * FROM clients"
        };

        const result = await pool.query<PostgresClient>(query);
        return result.rows.map((row) => new Contact(row.id, row.name, row.lastName, row.email, row.phoneNumber, row.isUser))
    }

    async getOneById(id: string): Promise<Contact | null> {
        const query = {
            text: "SELECT * FROM clients WHERE id = $1",
            values: [id]
        };

        const result = await pool.query<PostgresClient>(query);
        const contact = result.rows[0];

        if (contact) {
            return new Contact(contact.id, contact.name, contact.lastName, contact.email, contact.phoneNumber, contact.isUser);
        }
        return null;
    }

}
export class Token {
    public id: string;
    public value: string;
    public contactId: string;
    public createdAt: Date;
    public expiresAt: Date;
    public used: boolean;

    constructor(id: string, value: string, contactId: string, createdAt: Date, expiresAt: Date, used: boolean) {
        this.id = id;
        this.value = value;
        this.contactId = contactId;
        this.createdAt = createdAt;
        this.expiresAt = expiresAt;
        this.used = used;
    }
}
export class Client {
    public id: number;
    public uuid: string;
    public name: string;
    public lastName: string;
    public email: string;
    public phoneNumber: string;
    public password: string;
    public createdAt: Date;

    constructor(id: number, uuid: string, name: string, lastName: string, email: string, phoneNumber: string, password: string, createdAt: Date) {
        this.id = id;
        this.uuid = uuid;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.createdAt = createdAt;
    }
}
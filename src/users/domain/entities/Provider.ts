export class Provider {
    public id: number;
    public uuid: string;
    public name: string;
    public lastName: string;
    public email: string;
    public phoneNumber: string;
    public password: string;
    public services: string[];
    public experience: string;
    public location: string;

    public createdAt: Date;

    constructor(id: number, uuid: string, name: string, lastName: string, email: string, phoneNumber: string, password: string, services: string[], experience: string, location: string, createdAt: Date) {
        this.id = id;
        this.uuid = uuid;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.services = services;
        this.experience = experience;
        this.location = location;
        this.createdAt = createdAt;
    }
}
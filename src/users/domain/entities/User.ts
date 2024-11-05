export enum UserRole { 'client', 'provider' }

export class User {
    public id: string;
    public name: string;
    public lastName: string;
    public email: string;
    public phoneNumber: string;
    public password: string;
    public role: UserRole;
    public createdAt: Date;

    constructor(id: string, name: string, lastName: string, email: string, phoneNumer: string, password: string, role: UserRole, createdAt: Date) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumer;
        this.password = password;
        this.role = role;
        this.createdAt = createdAt;
    }
}
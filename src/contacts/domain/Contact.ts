export class Contact {
    public id: string;
    public name: string;
    public lastName: string;
    public email: string;
    public phoneNumber: string;
    public isUser: boolean;

    constructor(id: string, name: string, lastName: string, email: string, phoneNumber: string, isUser: boolean) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.isUser = isUser;
    }
}
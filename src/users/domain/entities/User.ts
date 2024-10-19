export class User {
    public uui: string;
    public name: string;
    public lastName: string;
    public email: string;
    public phoneNumber: string;
    public password: string;
    public userType: 'client' | 'provider';
    public subscriptionType: 'free' | 'premium';

    constructor(uui: string, name: string, lastName: string, email: string, phoneNumber: string, password:string, userType: 'client' | 'provider', subscriptionType: 'free' | 'premium') {
        this.uui = uui;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.userType = userType;
        this.subscriptionType = subscriptionType;
    }    
}
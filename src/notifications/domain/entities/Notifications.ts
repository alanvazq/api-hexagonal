export class Notifications {

    public id: string;
    public message: string;
    public recipient: string;

    constructor(id: string, message: string, recipient: string) {
        this.id = id;
        this.message = message;
        this.recipient = recipient;
    }


}
export class Assignment {
    public id: number;
    public name: string;
    public dueDate: Date;

    constructor(_id: number, _name: string, _dueDate: Date) {
        this.id = _id;
        this.name = _name;
        this.dueDate = _dueDate;
    }
    
}
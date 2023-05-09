export class Todo {
    constructor(description) {
        this.id = this.generateId();
        this.description = description;
    }
    ;
    generateId() {
        return Math.random().toString().substring(2, 10);
    }
    ;
}

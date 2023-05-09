export class Todo {
  id: string;
  description: string;
  public constructor(description: string) {
    this.id = this.generateId();
    this.description = description;
  };
  private generateId(): string {
    return Math.random().toString().substring(2, 10);
  };
}
export class Todo {
  public userId: number;
  public id: number;
  public title: string;
  public completed: boolean;

  constructor(json?: any) {
    if (!json) {
      throw new Error('Need Json to create a Todo');
    }
    this.userId = json.id;
    this.id = json.id;
    this.title = json.title;
    this.completed = json.completed;
  }
}

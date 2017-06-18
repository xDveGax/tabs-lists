export class Album {
  public userId: number;
  public id: number;
  public title: string;

  constructor (json?: any) {
    if (!json) {
      throw new Error('Need Json to create a user');
    }
    this.userId = json.userId;
    this.id = json.id;
    this.title = json.title;
  }
}

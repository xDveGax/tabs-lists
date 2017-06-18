interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export class User {
  public id: number;
  public name: string;
  public username: string;
  public address: UserAddress;
  public phone: string;
  public website: string;
  public company: UserCompany;

  constructor(json?: any) {
    if (!json) {
      throw new Error('Need Json to create a user');
    }

    this.id = json.id;
    this.name = json.name;
    this.username = json.name;
    this.address = json.address;
    this.phone = json.phone;
    this.website = json.website;
    this.company = json.company;
  }
}

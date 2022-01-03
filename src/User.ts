import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  content: string = 'Content describing user...'

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: +faker.address.longitude(),
    };
  }
}

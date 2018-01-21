import { uuid } from '../../util/uuid';



export class User {
  id: string;
  name: string;
  imageUrl: string;


  constructor(name: string, imageUrl: string) {
    this.id = uuid();
    this.name = name;
    this.imageUrl = imageUrl;
  }

}

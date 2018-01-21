import { User } from '../user/user.model';
import { uuid } from '../../util/uuid';



 export class Message {
   id: string;
   author: User;
   text: string;

   
   constructor(author: User, text: string) {
     this.id = uuid();
     this.author = author;
     this.text = text;
   }
 }

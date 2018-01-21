import { Message } from '../message/message.model';
import { User } from '../user/user.model';
import { uuid } from '../../util/uuid';



 export class Dialog {

   id: string;
   messages: Message[];
   partner: User;
   isNewMessages: Boolean;


   constructor(partner: User, messages: Message[]) {
     this.id = uuid();
     this.messages = messages;
     this.partner = partner;
     this.isNewMessages = false;
   }
 }

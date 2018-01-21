import { Injectable } from '@angular/core';
import { User } from '../chat/user/user.model';
import { Dialog } from '../chat/dialog/dialog.model';


// Data for initialize chat
@Injectable()
export class InitService {

    constructor() {}


    getCurrentUser(){
        let me: User = new User('Me', 'assets/images/me.png'); 

        return me; 
    }


    getDialogs(){
        let messages1 = [];
        let messages2 = [];
        let messages3 = [];

        let partner1: User = new User('Smile', 'assets/images/smile.png');
        let partner2: User = new User('Spyder', 'assets/images/spyder.png');
        let partner3: User = new User('Girl', 'assets/images/girl.png');

        let dialogPartner1: Dialog = new Dialog(partner1, messages1);
        let dialogPartner2: Dialog = new Dialog(partner2, messages2);
        let dialogPartner3: Dialog = new Dialog(partner3, messages3);

        let dialogs = [];

        dialogs.push(dialogPartner1);
        dialogs.push(dialogPartner2);
        dialogs.push(dialogPartner3);

        return dialogs;    
    }
}

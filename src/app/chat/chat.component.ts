import { Component, OnInit } from '@angular/core';
import { User } from './user/user.model';
import { Dialog } from './dialog/dialog.model';
import { InitService } from '../data/init.service';


@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css'],
    providers:[ InitService ]
})
export class ChatComponent implements OnInit {

    current_dialog: Dialog;
    current_user: User;
    dialogs: Dialog[];

    constructor(private initService: InitService) {}

    ngOnInit() {
        this.current_user = this.initService.getCurrentUser();
        this.dialogs = this.initService.getDialogs();
    }

    // Handler event about active dialog
    fromChild(dialog){
        this.current_dialog = dialog;
    }

}

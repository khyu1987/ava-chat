import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Dialog} from '../dialog/dialog.model';
import {InitService} from '../../data/init.service';


@Component({
    selector: 'app-dialog-list',
    templateUrl: './dialog-list.component.html',
    styleUrls: ['./dialog-list.component.css'],
    providers: [InitService]
})
export class DialogListComponent implements OnInit {

    @Input() dialogs: Dialog[];
    @Input() current_dialog: Dialog;
    @Output() clicked_dialog = new EventEmitter<Dialog>();

    constructor(private initService: InitService) {}

    ngOnInit() {}

    // Event about change active dialog
    clicked(dialog){
        this.clicked_dialog.emit(dialog);
        dialog.isNewMessages = false;
        event.preventDefault;
    }


}

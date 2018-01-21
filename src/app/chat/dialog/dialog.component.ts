import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Dialog } from '../dialog/dialog.model';
import { User } from '../user/user.model';
import { Message } from '../message/message.model';
import { BotService } from '../bot/bot.service';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css'],
    providers: [BotService]
})
export class DialogComponent implements OnInit {

    @Input() current_dialog: Dialog;
    @Input() current_user: User;
    @Input() dialogs: Dialog[];
    draftMessage: Message;

    constructor(private el: ElementRef,
        private botService: BotService) { }

    ngOnInit() {
        this.draftMessage = new Message(null, null);
    }


    // Helper for hendle user input events
    onEnter(event: any): void {
        this.addMessage();
        event.preventDefault();
    }


    // Add user message to current dialog
    addMessage(): void {
        let dilogForAdding = this.current_dialog; 
        this.draftMessage.author = this.current_user;

        dilogForAdding.messages.push(this.draftMessage);
        this.draftMessage = new Message(null, null);

        setTimeout(() => {
            this.scrollToBottom();
        }, 2000);


        // Bot answer with delay
        setTimeout(() => {
            this.addBotAnswer(dilogForAdding);
        }, 3000);


    }


    // Add random bot answer to current dialog
    addBotAnswer(dialogForAdding: Dialog):void {

        let bot_msg = this.botService.getBotMessage();

        dialogForAdding.messages.push(bot_msg);
        dialogForAdding.isNewMessages = true;
        this.current_dialog.isNewMessages = false;
        this.draftMessage = new Message(null, null);

        setTimeout(() => {
            this.scrollToBottom();
        }, 2000);

    }

    // Scroll to last message
    scrollToBottom(): void {
        const scrollPane: any = this.el.nativeElement.querySelector('.messages-container');
        scrollPane.scrollTop = scrollPane.scrollHeight;
    }
}

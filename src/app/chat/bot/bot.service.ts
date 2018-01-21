import { Injectable } from '@angular/core';
import { User } from '../user/user.model';
import { Message } from '../message/message.model';


// Drafts for bot's answer 
const texts = [
"Hi! Could I help you?",
"Have a nice day!",
"I am a very clever Bot.",
"Wow, nice to see you again!",
"I like to chat to intelligent person like you!",
"Don't worry! Be happy!"
]


// Initialize a bot and get random answer
@Injectable()
export class BotService {

    constructor() {}

    getBotMessage(){
        let bot = new User('Bot', 'assets/images/bot.png');
        let text = texts[Math.floor(Math.random() * (texts.length))];
        let msg = new Message(bot, text);
           
        return msg;
    };
}



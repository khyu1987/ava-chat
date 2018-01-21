import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { DialogComponent } from './chat/dialog/dialog.component';
import { DialogListComponent } from './chat/dialog-list/dialog-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    DialogComponent,
    DialogListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

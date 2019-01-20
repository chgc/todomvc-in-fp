import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { TodoState } from '../todo/todo.state';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxsModule.forRoot([TodoState])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

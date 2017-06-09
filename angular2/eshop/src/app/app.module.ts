import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {DoublePipe} from './pipes/double.pipe';
import {MyDirective} from './user/directives/first.directive';
import {ColorDirective} from './user/directives/color.directive';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
	ColorDirective,
	MyDirective
	
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

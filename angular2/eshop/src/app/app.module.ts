import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {DoublePipe} from './pipes/double.pipe';
import {MyDirective} from './user/directives/first.directive';
import {ColorDirective} from './user/directives/color.directive';
import {MyHide} from './user/directives/myhide.directive';
import {MyHover} from './user/directives/hover.directive';
import {MyBoldDirective} from './user/directives/bold.directive';
import {LoopDirective} from './user/directives/loop.directive';
import {MyCondition} from './user/directives/condition.directive';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
	ColorDirective,
	MyDirective,
	MyHide,
	MyHover,
	MyBoldDirective,
	LoopDirective,
	MyCondition
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

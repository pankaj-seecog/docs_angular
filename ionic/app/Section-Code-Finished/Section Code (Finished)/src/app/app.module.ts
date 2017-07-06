import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {ReactiveFormsModule} from '@angular/forms';
import {UsersPage} from '../pages/users/users';
import {UserPage} from '../pages/users/user/user';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
	UsersPage,
    ContactPage,
    HomePage,
    TabsPage,
    UserPage	
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	UsersPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
	UserPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

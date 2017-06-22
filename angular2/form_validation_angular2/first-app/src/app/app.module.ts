import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { TelevisionComponent } from './television/television.component';
import { RadioComponent } from './radio/radio.component';
import { MicrovanComponent } from './microvan/microvan.component';
import { AcComponent } from './ac/ac.component';
import { OutinputComponent } from './outinput/outinput.component';
import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding.component';
import { LifeprocessComponent } from './lifeprocess.component';
import { FormValidation1Component } from './form-validation-1/form-validation-1.component';
import { FormValidation2Component } from './form-validation-2/form-validation-2.component';
import { FormValidationReactiveComponent } from './form-validation-reactive/form-validation-reactive.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TemplateValidation21stAprilComponent } from './template-validation-21st-april/template-validation-21st-april.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { HttpmoduleComponent } from './httpmodule/httpmodule.component';
import { Httpmodule2Component } from './httpmodule2/httpmodule2.component';
import { Observable1Component } from './observable1/observable1.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { ServersComponent } from './servers/servers.component';
import {Routes,RouterModule} from '@angular/router';
import { InfoComponent } from './info/info.component';
import {CapitalizePipe} from './home/duration.pipe';
import {ShortenPipe} from './home/shorten.pipe';
//import {DoublePipe} from './home/double.pipe';
import {PankajPipe} from './home/pankaj.pipe';
import { Filter2Component } from './filter-2/filter-2.component';
import {KeyPipe} from './filter-2/key.pipe';
import {DoublePipe} from './filter-2/double.pipe';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import {MyColor} from './directives/color.directive';
import { GrossComponent } from './gross/gross.component';
const appRoutes : Routes = [
{path : '',component : HomeComponent},
{path : 'users',component : UsersComponent},	
{path : 'users/:id',component : UserComponent},
{path : 'servers',component : ServersComponent},
{path : 'gross',component : GrossComponent},
{path : 'products',component : Filter2Component}
];

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    RefrigeratorComponent,
    TelevisionComponent,
    RadioComponent,
    MicrovanComponent,
    AcComponent,
    OutinputComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    LifeprocessComponent,
    FormValidation1Component,
    FormValidation2Component,
    FormValidationReactiveComponent,
    TemplateValidation21stAprilComponent,
    ReactiveFormValidationComponent,
    HttpmoduleComponent,
    Httpmodule2Component,
    Observable1Component,
    HomeComponent,
    UsersComponent,
	UserComponent,
    ServersComponent,
    InfoComponent,
	CapitalizePipe,
	ShortenPipe,
	//DoublePipe,
	PankajPipe,
	Filter2Component,
	KeyPipe,
	DoublePipe,
	TestcomponentComponent,
	MyColor,
	GrossComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	ReactiveFormsModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

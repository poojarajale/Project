import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactShowComponent } from './contact-show/contact-show.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ContactService} from './contact.service';
import { UserProfileComponent } from './Assignment/user-profile/user-profile.component';
import { InvoiceComponent } from './Assignment/invoice/invoice.component';
import { PageNotFoundComponent } from './Assignment/page-not-found/page-not-found.component'
import { CommonService } from './services/common.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactAddComponent,
    ContactEditComponent,
    ContactShowComponent,
    UserProfileComponent,
    InvoiceComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ContactService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

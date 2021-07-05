import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './Assignment/invoice/invoice.component';
import { PageNotFoundComponent } from './Assignment/page-not-found/page-not-found.component';
import { UserProfileComponent } from './Assignment/user-profile/user-profile.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactShowComponent } from './contact-show/contact-show.component'

//defining all routes
const routes: Routes = [
   { path: '',   redirectTo: '/UserProfile', pathMatch: 'full' },
  {path:'UserProfile',component:UserProfileComponent},
  {path:'invoice',component:InvoiceComponent},
  {path:'*',component:PageNotFoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

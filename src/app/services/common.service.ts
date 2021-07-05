import { Injectable } from '@angular/core';

import {  HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient, private router:Router) { }


  SubHeader = "Adept Mobile Dispatch System";
  

  dataUrl="http://localhost:3000/";
 
   HTTP_OPTIONS = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json',
     'Access-Control-Allow-Credentials' : 'true',
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
     'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
   }) }

   //get user profile data
  //  getUserProfile():any{
  //    return this.http.get(`${this.dataUrl}getUserProfileData`,this.HTTP_OPTIONS);
  //  }

  //post user profile data
  UserProfilePostData(userProfileData:any)
  {
    return this.http.post(`${this.dataUrl}addUserProfile`,userProfileData);
  }

// //post user profile data
// UserInvoicePostData(UserInvoice:any) {
 
//   return this.http.post(`${this.dataUrl}addInvoiceProfile`,userProfileData);
//  }
 
}









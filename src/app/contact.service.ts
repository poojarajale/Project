import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

   url='http://localhost:8000'

  constructor(private http: HttpClient,) { }

  addContact(contactData:any)
  {
    return this.http.post(`${this.url}/add`,contactData)
  }

  getUser() {
    return this.http.get<any>(`${this.url}/getall`);
  }

  getOne(id:any) {
    return this.http.get<any>(`${this.url}/getOne/${id}`);
    }
  

updateUser(id,updatedData){
    console.log("data from service is ",updatedData);
    return this.http.patch(`${this.url}/edit/${id}`,updatedData)
  }

  
  deleteUser(id:any) {
    return this.http.get<any>(`${this.url}/delete/${id}`);
  }
}

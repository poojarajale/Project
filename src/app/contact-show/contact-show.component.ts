import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {ContactService} from '../contact.service'


@Component({
  selector: 'app-contact-show',
  templateUrl: './contact-show.component.html',
  styleUrls: ['./contact-show.component.css']
})
export class ContactShowComponent implements OnInit {

  constructor(private cs:ContactService,private route: ActivatedRoute,) { }

 userData:any;
ngOnInit() {
    this.userData=this.cs.getUser()
    .subscribe((data)=>{
    this.userData=data;
  });
}
deleteOne(id:any) {
    this.cs.deleteUser(id).subscribe(res => {
      console.log("USer Deleted",res);
      // window.alert("User Successfully")
      
    });
}
  

}

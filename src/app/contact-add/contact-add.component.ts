import { Component, OnInit } from '@angular/core';
// ...
import { FormBuilder, FormGroup, FormArray, Validator, Validators } from '@angular/forms';
import {ContactService} from '../contact.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  contactForm: FormGroup;
  contact_details: FormArray;
  addmoreButton=true; arrayCount=1;

  get person_name() {
    return this.contactForm.get('person_name');
  }
  get company_name() {
    return this.contactForm.get('company_name');
  }
  get designation() {
    return this.contactForm.get('designation');
  }
  get contactData() {
    return this.contactForm.get('contact_details') as FormArray;
  }

  createContact(): FormGroup{
    return this.fb.group({
      flag:['',[Validators.required,]],
      type:['',[Validators.required,]],
      email_id:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone_no:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
    })
  }
  //function for deleting generated field
deleteContact(index) {
    this.arrayCount-=1;
    if (this.arrayCount<5){
      this.addmoreButton=true;
    }
    (<FormArray>this.contactForm.get('contact_details')).removeAt(index);

  }
  //function for adding dynamic field
  addContact():void{
    this.arrayCount+=1;
    if (this.arrayCount>=5){//restricting from to create more than 5 fields
      this.addmoreButton=false;
    }
    this.contact_details=this.contactForm.get('contact_details') as FormArray;
    this.contact_details.push(this.createContact());
  }

  constructor(private fb:FormBuilder, private router:Router,private contact_s:ContactService) { }

  
  onSubmit(){
    if(this.contactForm.valid){
      alert("Contact Register successful");
    
    console.log(this.contactForm.value);
    this.contact_s.addContact(this.contactForm.value)
    .subscribe(response => console.log('success!',response),
      error => console.log('error!',error));
      this.router.navigate(['getAll'])
    } 
  }


  ngOnInit(): void {
    this.contactForm = this.fb.group({
      person_name : ['', [Validators.required, Validators.minLength(3)]],
      company_name : ['', [Validators.required, Validators.minLength(3)]],
      designation :['', [Validators.required, Validators.minLength(3)]],
      contact_details :this.fb.array([this.createContact()])
     
    })
  }
}
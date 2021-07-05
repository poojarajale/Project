import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validator, Validators } from '@angular/forms';
import {ContactService} from '../contact.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  userData:any={}; updateForm: FormGroup; address: FormArray;  addable=true; arrayCount=1;

  constructor(private router: Router,private route : ActivatedRoute, private cs: ContactService, private fb : FormBuilder) { }
get person_name() {
    return this.updateForm.get('person_name');
  }
  get company_name() {
    return this.updateForm.get('company_name');
  }
  get designation() {
    return this.updateForm.get('designation');
  }
  get contactData() {
    return this.updateForm.get('contact_details') as FormArray;
  }


 ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.cs.getOne(params.id).subscribe(res=>{
        this.userData=res;
        console.log("ths is use data after read",this.userData);
        this.updateForm.patchValue({
          person_name: this.userData.person_name,
          company_name: this.userData.company_name,
          designation: this.userData.designation,
        });
        this.updateForm.setControl('contact_details',this.setContact(this.userData.contact_details))
        this.arrayCount=this.userData.contact.length;
        console.log("array length is ",this.arrayCount);
        
      })
    });




    this.updateForm = this.fb.group({
      person_name: ['', [Validators.required, Validators.minLength(3)]],
      company_name: ['', [Validators.required, Validators.minLength(3)]],
      designation: ['', [Validators.required, Validators.minLength(3)]],
      contact_details: this.fb.array([this.createContact()])
    })
   

  }
  setContact(contact_details){
    // console.log("set address",address)
    const formArray=new FormArray([]);
    contact_details.forEach(element => {
      formArray.push(this.fb.group({
        flag: element.flag,
        type: element.type,
        email_id : element.email_id,
        phone_no : element.phone_no,
      }))
    });
    return formArray;
  }






  addContact() {
    this.arrayCount+=1;
    if (this.arrayCount>=5){
      this.addable=false;
    }
    this.address=this.updateForm.get('contact_details') as FormArray;
    this.address.push(this.fb.group({
      flag: ['', [Validators.required,]],
      type: ['', [Validators.required,Validators.minLength(3)]],
      email_id: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone_no: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    }));
  }

  createContact(){
    return this.fb.group({
      flag: ['', [Validators.required,]],
      type: ['', [Validators.required,Validators.minLength(3)]],
      email_id: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone_no: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    });
  }


  deleteContact(index) {
    this.arrayCount-=1;
    if (this.arrayCount<5){
      this.addable=true;
    }
    (<FormArray>this.updateForm.get('contact_details')).removeAt(index);
  }

  onUpdate(){
    // console.log(this.updateForm.value);
    this.cs.updateUser(this.userData._id,this.updateForm.value).subscribe(res=>{
       window.alert("Data updated Successfully")
      console.log(res)
      this.router.navigate(['getAll'])
    },
    error=>{
      window.alert("Please Try Again.")
    })

  }

}

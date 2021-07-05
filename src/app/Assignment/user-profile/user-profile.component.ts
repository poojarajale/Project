import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validator, Validators } from '@angular/forms';
import { CommonService } from "../../services/common.service";
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  // membership: FormArray;
  userProfileForm: FormGroup;
  submitted = false;


  constructor(private fb:FormBuilder, private router:Router,private commonService:CommonService) { }


  ngOnInit(): void {
    this.userProfileForm = this.fb.group({
      user_name: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['',[Validators.required]],
      birth_date: ['', [Validators.required]],
      email_id: ['', [Validators.required, Validators.email]],
      mobile: ['',[Validators.required]],
      cust_id: ['', Validators.required],
      membership:['', Validators.required]
      });

    } //end ngOnInit


 // convenience getter for easy access to form fields
 get f() { return this.userProfileForm.controls; }

// get user_name() {return this.userProfileForm.get('user_name');}
// get Gender() {return this.userProfileForm.get('gender');}
// get birth_date() {return this.userProfileForm.get('birth_date');}
// get email_id() {return this.userProfileForm.get('email_id');}
// get mobile() {return this.userProfileForm.get('mobile');}
// get cust_id() {return this.userProfileForm.get('cust_id');}
// get membership() {return this.userProfileForm.get('membership')}

 // Getter method to access form control

 //Array to select Membership
//  createMembership(): FormGroup{
//   return this.fb.group({
//     Classic:[''],
//     Silver:[''],
//     Gold:['']
//   })
// }


//Submit Function
onSubmit(){
  this.submitted = true;
  if(this.userProfileForm.invalid){
    return;
  }
  else{
    alert("userProfile data Register successful");
   console.log(this.userProfileForm.value);
   var data=this.userProfileForm.value;
   this.commonService.UserProfilePostData(data)
   .subscribe();
    //  response => console.log('success!',response),
    // error => console.log('error!',error));
   // this.router.navigate(['getAll']) UserProfilePostData
  } 
}


//clear data
onReset() {
  this.submitted = false;
  this.userProfileForm.reset();
}

}







//   onSubmit() {
//     this.submitted = true;
//     // stop here if form is invalid
//     if (this.userProfileForm.invalid) {
//    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userProfileForm.value, null, 4));
//     }  
// }
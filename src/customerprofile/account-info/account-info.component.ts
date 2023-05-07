import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomerprofileService } from '../Services/customerprofile.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {

errorMessage:any;
CustomerInfo:any;
ApplicationuserId:any;

  CustomerInfoForm=this.fb.group({
    email:[''],
    fName:[''],
    lName:[''],
    gender:['']
  })

  constructor(public http: HttpClient, private fb:FormBuilder, 
    private customerServ:CustomerprofileService) { }

    ngOnInit(): void {

      this.ApplicationuserId=localStorage.getItem('ApplicationUserId')
      this.customerServ.GetCustomerInfo(this.ApplicationuserId).subscribe({
            next:data=>{
              this.CustomerInfo = data;
            },
            error:err=>console.log(err.error.message)
          });
    }

ChangeEmailSubmit(newEmail:any){
  this.customerServ.UpdateEmail(newEmail,this.ApplicationuserId).subscribe({
    next:data=>console.log(data),
    error:err=>console.log(err.error.message)
  })
}


//Account Info Form

get email()
{
  return this.CustomerInfoForm.get('email');
}
get fName()
{
  return this.CustomerInfoForm.get('fName');
}
get lName()
{
  return this.CustomerInfoForm.get('lName');
}
get gender()
{
  return this.CustomerInfoForm.get('gender');
}

display='none';

openEmailModal(){
  this.display='block';
}

onCloseEmailHandled(){
  this.display='none';
}

}

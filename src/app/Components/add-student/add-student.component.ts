import { Component } from '@angular/core';
// import { DemoStudentsService } from 'src/app/Services/demo-students.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'
// import { Navigation, Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent
{
  data:any;

  constructor(private dialogRef: MatDialogRef<AddStudentComponent>) {}
  add(name:any,phone:any,addressCity:any,addressStreet:any,addressAppartment:any,email:any){
    this.data={
      name,
      address:{
        addressCity,
        addressStreet,
        addressAppartment
      },
      phone,
      email
    }
    this.onSubmit()
  }
  onSubmit() {
    this.dialogRef.close(this.data);
  }
  name = new FormControl('');
  myValidation = new FormGroup({
    name: new FormControl("",Validators.required),
    email: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
    phone: new FormControl("",  Validators.required  ),
    addressC: new FormControl("", Validators.required),
    addressS: new FormControl("", Validators.required),
    addressA: new FormControl("", Validators.required),

  })


  // <form [formGroup]=”myValidation”>
    // <input type=“text” formControlName=“name” value=“name” >
    // <input type=“text” formControlName=“age” value=“age” >
    // <input type=“submit” value=“submit” >
  // </form>



  // this.myValidation.Valid===>> returns (True/False) wether the user entered valid data
  // use getter property to use it in HTML conditions
  // Example: get NameValid(){
  //       return this.name.length>3;
  //     }

}



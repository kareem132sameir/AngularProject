import { Component, Inject } from '@angular/core';
import {FormGroup,FormControl,Validators,FormsModule} from '@angular/forms'
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  obj:any;
  data:any;
  constructor(private dialogRef: MatDialogRef<EditStudentComponent>,@Inject(MAT_DIALOG_DATA) public IncomingData: any) {
    this.obj=this.IncomingData;
  }
  edit(name:any,phone:any,addressCity:any,addressStreet:any,addressAppartment:any,email:any){
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
  myValidation = new FormGroup({
    name: new FormControl({ value: this.IncomingData.name, disabled: true }, Validators.required),
    email: new FormControl(this.IncomingData.email, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
    phone: new FormControl(this.IncomingData.phone, Validators.required ),
    addressC: new FormControl(this.IncomingData.address.addressCity, Validators.required),
    addressS: new FormControl(this.IncomingData.address.addressStreet, Validators.required),
    addressA: new FormControl(this.IncomingData.address.addressAppartment, Validators.required),
  })
  get EmailValid(){
    return this.myValidation.controls["email"].valid;
  }
}



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { DataService } from '../../Services/data.service';
import { RegistrationService } from 'src/app/Services/registration.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  oldUser:any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: RegistrationService
  ) {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  signUp() {
    const name = this.signUpForm.get('name')?.value;
    const username = this.signUpForm.get('username')?.value;
    const email = this.signUpForm.get('email')?.value;
    const phone = this.signUpForm.get('phone')?.value;
    const password = this.signUpForm.get('password')?.value;

    let newStudent={name,username,email,phone,password};
    this.dataService.getUserByEmail(email).subscribe({
      next:(data) => {
        this.oldUser=data
        console.log(this.oldUser);
        // alert(oldUser)
        if(this.oldUser.length>0)
        {
          // alert('User already exists');
          alertify.set('notifier', 'position', 'top-center');

          alertify.error('User already exists,please pick another name!');

        }
        else
        {
          // alert("not");
          this.dataService.addUser(newStudent).subscribe();
          this.router.navigateByUrl("/login");
        }
      },
      error:(error) =>{ console.log(error)}
    });

  }
}


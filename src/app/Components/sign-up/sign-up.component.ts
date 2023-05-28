// import { Component } from '@angular/core';
// import { RegistrationService } from 'src/app/Services/registration.service';
// import {FormGroup} from '@angular/forms'
// import { Navigation, Router } from '@angular/router';

// @Component({
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.css']
// })
// export class SignUpComponent {

//   constructor(public myService:RegistrationService,public myrouter:Router){}
//   add(name:any,age:any,address:any,phone:any,email:any,password:any)
//   {
//     let newStudent={name,age,address,phone,email,password};
//     this.myService.addUser(newStudent).subscribe();
//     this.myrouter.navigateByUrl("/login");
//   }
// }

// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { DataService } from '../../Services/data.service';

// @Component({
//   selector: 'app-signup-up-page',
//   templateUrl: './signup-up-page.component.html',
//   styleUrls: ['./signup-up-page.component.css']
// })
// export class SignupUpPageComponent {
//   public signUpForm !: FormGroup
//   constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

//   ngOnInit(): void {
//     this.signUpForm = this.formBuilder.group({
//       email: [""],
//       password: [""]
//     })
//   }

//   signUp(){
//     this.http.post<any>("http://localhost:3000",this.signUpForm.value)
//     .subscribe(res=>{
//       alert('SIGNIN SUCCESFUL');
//       this.signUpForm.reset()
//     },err=>{      this.router.navigate(["login"])

//       alert("Something went wrong")
//     })
//   }
// }















// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { DataService } from '../../Services/data.service';

// @Component({
//   selector: 'app-signup-up-page',
//   templateUrl: './signup-up-page.component.html',
//   styleUrls: ['./signup-up-page.component.css']
// })
// export class SignupUpPageComponent implements OnInit {
//   signUpForm: FormGroup;
//   loginForm: FormGroup;

//   constructor(
//     private formBuilder: FormBuilder,
//     private router: Router,
//     private dataService: DataService
//   ) {
//     this.signUpForm = this.formBuilder.group({
//       email: ['', Validators.required],
//       password: ['', Validators.required]
//     });

//     this.loginForm = this.formBuilder.group({
//       email: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   ngOnInit(): void {}

//   signUp() {
//     const email = this.signUpForm.get('email')?.value;
//     const password = this.signUpForm.get('password')?.value;

//     this.dataService.register(email, password)
//       .subscribe(
//         () => {
//           alert('Registration successful');
//           this.signUpForm.reset();
//           // Redirect to login page or perform any other action
//         },
//         (error) => {
//           alert('Registration failed. Please try again.');
//           console.error(error);
//         }
//       );
//   }

//   // login() {
//   //   const email = this.loginForm.get('email')?.value;
//   //   const password = this.loginForm.get('password')?.value;

//   //   this.dataService.login(email, password)
//   //     .subscribe(
//   //       (response) => {
//   //         // Handle successful login
//   //         alert('Login successful');
//   //         this.loginForm.reset();
//   //         // Redirect to dashboard or perform any other action
//   //       },
//   //       (error) => {
//   //         // Handle login error
//   //         alert('Login failed. Please check your credentials.');
//   //         console.error(error);
//   //       }
//   //     );
//   // }
// }


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


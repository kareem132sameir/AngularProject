import { Component } from '@angular/core';
import { RegistrationService } from 'src/app/Services/registration.service';
import { Navigation, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../Services/AuthService';
import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(public myService:RegistrationService,public myrouter:Router,private authService: AuthService
    ){}

  user:any={email:"",password:""};

  login(email: any, entered_password: any) {


    this.myService.getAdminByEmail(email).subscribe({
      next:(data)=>
      {
        this.user=data;
        if(this.user.length>0)
        {
          if (this.user[0]["password"] === entered_password) {

            console.log("Logged in!!");
            this.authService.login(); // Set the logged-in state to true

alertify.set('notifier', 'position', 'top-right');
var msg = alertify.success('Current position: ' + alertify.get('notifier', 'position'));

msg.delay(5).setContent('Hello Admin, welcome to our site!');
this.myrouter.navigate(['/students/admin']);

            // alert("hello admin");
            // this.myrouter.navigate(['/students/admin']);
          }
        }
        else
        {
          this.myService.getUserByEmail(email).subscribe({
            next: (data) => {
              this.user = data;
              alertify.set('notifier', 'position', 'top-right');
              var msg = alertify.success('Current position: ' + alertify.get('notifier', 'position'));

              msg.delay(5).setContent('Hello There , Welcome to our site!');

                  ;          if(this.user.length<1)
              {
                // alert("Wrong password or E-mail!");
                alertify.set('notifier', 'position', 'top-right');
                var msg = alertify.error('Current position: ' + alertify.get('notifier', 'position'));

                msg.delay(5).setContent('Wrong Credentials,please input the right data !');
              }
              if (this.user[0]["password"] === entered_password) {
                this.authService.login(); // Set the logged-in state to true

                console.log("Logged in!!");
                this.myrouter.navigate(['/students']);
              }
              else {
                alert("Wrong password or E-mail!");
                console.log("Wrong password");
              }
            },
            error: (err) => {
              console.log(err);
            }
          });
        }
      }
    })

  }

  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}



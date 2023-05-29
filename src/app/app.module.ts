import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { StudentsComponent } from './Components/students/students.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import {HttpClientModule,HttpClient} from '@angular/common/http'
import { FormsModule,FormControl,FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EditStudentComponent } from './Components/edit-student/edit-student.component';
import { AlbumsComponent } from './Components/albums/albums.component';
import { PhotosComponent } from './Components/photos/photos.component';
// import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { StudentsUserComponent } from './Components/students-user/students-user.component';
// import {SignupUpPageComponent} from './Components/sign-up/sign-up.component'
import { AuthGuard } from './auth.guard';
import { FooterComponent } from './Components/footer/footer.component';
import { afterLoginGuardGuard } from './after-login-guard.guard';
import { HeaderLoggedInComponent } from './Components/header-logged-in/header-logged-in.component';

// import { FormControl,FormGroup,Validators } from '@angular/forms'

// import { UpdateStudentComponent } from './Components/update-student/update-student.component';
// import { AlbumsComponent } from './Components/albums/albums.component';
// import { PhotosComponent } from './Components/photos/photos.component';

// import { ModuleOfNg } from '@angular/core';
// import {ModuleOfNgb} from '@ng-bootstrap/ng-bootstrap';
// import { ModuleOfBrowser  } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsComponent,
    StudentDetailsComponent,
    ErrorComponent,
    AddStudentComponent,
    EditStudentComponent,
    AlbumsComponent,
    PhotosComponent,
    SignUpComponent,
    LogInComponent,
    StudentsUserComponent,
    FooterComponent,
    HeaderLoggedInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard,afterLoginGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

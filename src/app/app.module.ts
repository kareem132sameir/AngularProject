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
    PhotosComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

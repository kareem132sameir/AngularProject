// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { StudentsComponent } from './Components/students/students.component';
// import { StudentDetailsComponent } from './Components/student-details/student-details.component';
// import { AddStudentComponent } from './Components/add-student/add-student.component';
// import { ErrorComponent } from './Components/error/error.component';
// import { AlbumsComponent } from './Components/albums/albums.component';
// import { PhotosComponent } from './Components/photos/photos.component';
// import { EditStudentComponent } from './Components/edit-student/edit-student.component';
// import { LogInComponent } from './Components/log-in/log-in.component';
// import { SignUpComponent } from './Components/sign-up/sign-up.component';
// import { StudentsUserComponent } from './Components/students-user/students-user.component';

// // const routes: Routes = [
// //   {path:"",redirectTo:"students",pathMatch:"full"},
// //   {path:"students",component:StudentsComponent},
// //   {path:"studentdetails/:id",component:StudentDetailsComponent},
// //   {path:"addstudent",component:AddStudentComponent},
// //   {path:"**",component:ErrorComponent}
// // ];
// const routes: Routes = [
//   { path: "", redirectTo: "login", pathMatch: "full" },
//   { path: "login", component: LogInComponent },
//   { path: "register", component: SignUpComponent },
//   { path: "students", component: StudentsUserComponent},
//   { path: "students/admin", component: StudentsComponent },
//   {
//     path: "studentdetails/:id",
//     component: StudentDetailsComponent,
//     children: [
//       { path: "albums", component: AlbumsComponent },
//       { path: "photos", component: PhotosComponent }
//     ]
//   },
//   { path: "updatestudent/:id", component: EditStudentComponent },
//   { path: "addstudent", component: AddStudentComponent },
//   { path: "**", component: ErrorComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './Components/students/students.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { ErrorComponent } from './Components/error/error.component';
import { AlbumsComponent } from './Components/albums/albums.component';
import { PhotosComponent } from './Components/photos/photos.component';
import { EditStudentComponent } from './Components/edit-student/edit-student.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { StudentsUserComponent } from './Components/students-user/students-user.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: SignUpComponent },
  {
    path: 'students',
    component: StudentsUserComponent,
    canActivate: [AuthGuard] // Apply the AuthGuard to restrict access
  },
  {
    path: 'students/admin',
    component: StudentsComponent,
    canActivate: [AuthGuard] // Apply the AuthGuard to restrict access
  },
  {
    path: 'studentdetails/:id',
    component: StudentDetailsComponent,
    canActivate: [AuthGuard], // Apply the AuthGuard to restrict access
    children: [
      { path: 'albums', component: AlbumsComponent },
      { path: 'photos', component: PhotosComponent }
    ]
  },
  {
    path: 'updatestudent/:id',
    component: EditStudentComponent,
    canActivate: [AuthGuard] // Apply the AuthGuard to restrict access
  },
  {
    path: 'addstudent',
    component: AddStudentComponent,
    canActivate: [AuthGuard] // Apply the AuthGuard to restrict access
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

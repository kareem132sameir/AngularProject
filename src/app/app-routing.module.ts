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
import { afterLoginGuardGuard } from './after-login-guard.guard';
import { HeaderLoggedInComponent } from './Components/header-logged-in/header-logged-in.component';
import { HeaderComponent } from './Components/header/header.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: LogInComponent, canActivate: [afterLoginGuardGuard] },
//   { path: 'register', component: SignUpComponent, canActivate: [afterLoginGuardGuard] },
//   {
//     path: 'students',
//     component: StudentsUserComponent,
//     canActivate: [AuthGuard]
//   },
//   {
//     path: 'students/admin',
//     component: StudentsComponent,
//     canActivate: [AuthGuard]
//   },
//   {
//     path: 'studentdetails/:id',
//     component: StudentDetailsComponent,
//     canActivate: [AuthGuard],
//     children: [
//       { path: 'albums', component: AlbumsComponent },
//       { path: 'photos', component: PhotosComponent }
//     ]
//   },
//   {
//     path: 'updatestudent/:id',
//     component: EditStudentComponent,
//     canActivate: [AuthGuard]
//   },
//   {
//     path: 'addstudent',
//     component: AddStudentComponent,
//     canActivate: [AuthGuard]
//   },
//   { path: '**', component: ErrorComponent }
// ];

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: SignUpComponent },
  {
    path: 'students',
    component: StudentsUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'students/admin',
    component: StudentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'studentdetails/:id',
    component: StudentDetailsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'albums', component: AlbumsComponent },
      { path: 'photos', component: PhotosComponent }
    ]
  },
  {
    path: 'updatestudent/:id',
    component: EditStudentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addstudent',
    component: AddStudentComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

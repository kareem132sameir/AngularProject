import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './Components/students/students.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { ErrorComponent } from './Components/error/error.component';
import { AlbumsComponent } from './Components/albums/albums.component';
import { PhotosComponent } from './Components/photos/photos.component';
import { EditStudentComponent } from './Components/edit-student/edit-student.component';

// const routes: Routes = [
//   {path:"",redirectTo:"students",pathMatch:"full"},
//   {path:"students",component:StudentsComponent},
//   {path:"studentdetails/:id",component:StudentDetailsComponent},
//   {path:"addstudent",component:AddStudentComponent},
//   {path:"**",component:ErrorComponent}
// ];
const routes: Routes = [
  { path: "", redirectTo: "students", pathMatch: "full" },
  { path: "students", component: StudentsComponent },
  {
    path: "studentdetails/:id",
    component: StudentDetailsComponent,
    children: [
      { path: "albums", component: AlbumsComponent },
      { path: "photos", component: PhotosComponent }
    ]
  },
  { path: "updatestudent/:id", component: EditStudentComponent },
  { path: "addstudent", component: AddStudentComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

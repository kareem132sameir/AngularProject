// import {  Component,  Input,  OnInit,  OnChanges,  SimpleChanges,} from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { AddStudentComponent } from '../add-student/add-student.component';
// import { EditStudentComponent } from '../edit-student/edit-student.component';
// import {MatButtonModule} from '@angular/material/button';
// import {MatIconModule} from '@angular/material/icon';
// import {MatDividerModule} from '@angular/material/divider';


// @Component({
//   selector: 'app-students',
//   templateUrl: './students.component.html',
//   styleUrls: ['./students.component.css'],

// })
// export class StudentsComponent implements OnInit {
//   students: any = [];
//   newStudentsList: any = [];
//   editedStudent: any;
//   editedStudents: any = [];
//   // finalList:any;

//   // newStudent:any;
//   constructor(
//     public http: HttpClient,
//     public myRoute: ActivatedRoute,
//     private dialog: MatDialog
//   ) {}
//   OpenPopUp() {
//     const dialogConfig = new MatDialogConfig();
//     dialogConfig.disableClose = false;
//     // dialogConfig.panelClass = 'my-modal-container';
//     // dialogConfig.backdropClass = 'my-modal-backdrop';
//     dialogConfig.autoFocus = true;
//     dialogConfig.position = {
//       top: '-600px',
//       left: '340px',
//     };
//     // dialogConfig.hasBackdrop=false;
//     dialogConfig.height = '500px';
//     dialogConfig.width = '700px';
//     const dialogRef = this.dialog.open(AddStudentComponent, dialogConfig);
//     // this.dialog.open(AddStudentComponent,{
//     //   // 'top': '50px',
//     //     height: '400px',
//     //     width: '600px',
//     //   });
//     dialogRef.afterClosed().subscribe((result) => {
//       if (result.name) {
//         this.newStudentsList.push(result);
//       }
//     });
//   }
//   editStudent(student: any) {
//     let res;
//     const dialogConfig = new MatDialogConfig();
//     const dialogRef = this.dialog.open(EditStudentComponent, {data:student,position:{top: '-500px',left: '340px',},width:'700px',height: '500px'});
//     dialogRef.afterClosed().subscribe((result) => {this.editedStudent = result; });
//   }
//       // this.editedStudent=result;
//       // this.editedStudents = this.newStudentsList.filter(
//       //   (student:any) => {
//       //     return student.name!=this.editedStudent.name;
//       //   }
//       // )
//   editInAPI(){
//   }
//   editInStudents(s:any){
//     this.editStudent(s);
//     console.log(this.editedStudent);
//       // let idx = this.newStudentsList.findIndex(((st: any) => st.name == res.name));
//       // this.newStudentsList[idx] = this.editedStudent;
//   }
//   deleteStudent(s:any){
//     // let idx = this.newStudentsList.findIndex(((st: any) => st.name == s.name));
//     this.newStudentsList = this.newStudentsList.filter(
//         (student:any) => {
//           return student.name != s.name;
//         }
//       )
//     // this.newStudentsList[idx] = this.editedStudent;

//   }
//   ngOnInit(): void {
//     this.http.get('http://jsonplaceholder.typicode.com/users').subscribe({
//       next: (data) => {
//         this.students = data;
//         // console.log(this.students);
//       },
//       error: (e) => {
//         console.log(e);
//       },
//     });
//   }
// }

import {  Component,  Input,  OnInit,  OnChanges,  SimpleChanges,} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddStudentComponent } from '../add-student/add-student.component';
import { EditStudentComponent } from '../edit-student/edit-student.component';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],

})
export class StudentsComponent implements OnInit {
  students: any = [];
  newStudentsList: any = [];
  editedStudent: any;
  editedStudents: any = [];
  warn:any=0;
  // finalList:any;

  // newStudent:any;
  constructor(
    public http: HttpClient,
    public myRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}
  OpenPopUp() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    // dialogConfig.panelClass = 'my-modal-container';
    // dialogConfig.backdropClass = 'my-modal-backdrop';
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      top: '-600px',
      left: '340px',
    };
    // dialogConfig.hasBackdrop=false;
    dialogConfig.height = '500px';
    dialogConfig.width = '700px';
    const dialogRef = this.dialog.open(AddStudentComponent, dialogConfig);
    // this.dialog.open(AddStudentComponent,{
    //   // 'top': '50px',
    //     height: '400px',
    //     width: '600px',
    //   });
    dialogRef.afterClosed().subscribe((result) => {
      if (result.name) {
        this.newStudentsList.push(result);
      }
    });
  }
  warnFun(){
    this.warn=1;
  }
  editStudent(student: any) {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(EditStudentComponent, {
      data:student,
      position:{
        top: '-500px',
        left: '340px',
      },
      width:'700px',
      height: '500px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.editedStudent=result;
      // this.editedStudents = this.newStudentsList.filter(
      //   (student:any) => {
      //     return student.name!=this.editedStudent.name;
      //   }
      // )
      let idx1 = this.students.findIndex(((st: any) => st.name == this.editedStudent.name));
      if(idx1!=-1){
        this.students[idx1] = this.editedStudent;
        console.log(this.students[idx1]);
      }
      let idx2 = this.newStudentsList.findIndex(((st: any) => st.name == this.editedStudent.name));
      if(idx2!=-1){
        this.newStudentsList[idx2] = this.editedStudent;
      }
      console.log("idx 1:",idx1);
    });
  }
  deleteStudent(s:any){
    // let idx = this.newStudentsList.findIndex(((st: any) => st.name == s.name));
    this.students = this.students.filter(
      (student:any) => {
        return student.name != s.name;
      }
    )
    this.newStudentsList = this.newStudentsList.filter(
        (student:any) => {
          return student.name != s.name;
        }
      )
    // this.newStudentsList[idx] = this.editedStudent;

  }
  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe({
      next: (data) => {
        this.students = data;
        console.log(this.students);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}

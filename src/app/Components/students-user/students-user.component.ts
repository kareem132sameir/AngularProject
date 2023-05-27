import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddStudentComponent } from '../add-student/add-student.component';
import { EditStudentComponent } from '../edit-student/edit-student.component';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-students-user',
  templateUrl: './students-user.component.html',
  styleUrls: ['./students-user.component.css']
})



export class StudentsUserComponent implements OnInit {
  students: any = [];
  newStudentsList: any = [];
  editedStudent: any;
  editedStudents: any = [];
  isDialogOpen: boolean = false;

  constructor(public http: HttpClient, private dialog: MatDialog) {}

  OpenPopUp() {
    if (!this.isDialogOpen) {
      this.isDialogOpen = true;
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.position = {
        top: '-600px',
        left: '340px',
      };
      dialogConfig.height = '500px';
      dialogConfig.width = '700px';
  
      const dialogRef = this.dialog.open(AddStudentComponent, dialogConfig);
  
      dialogRef.afterClosed().subscribe((result) => {
        if (result && result.name) {
          // Handle the result
          this.newStudentsList.push(result);
          alertify.success('Added Successfully');
        }
        this.isDialogOpen = false;
      });
        }
      }

  editStudent(student: any) {
    if (!this.isDialogOpen) {
      this.isDialogOpen = true;
      const dialogConfig = new MatDialogConfig();
      const dialogRef = this.dialog.open(EditStudentComponent, {
        data: student,
        position: {
          top: '-500px',
          left: '340px',
        },
        width: '700px',
        height: '500px',
      });
      dialogRef.afterClosed().subscribe((result) => {
        this.isDialogOpen = false;
        this.editedStudent = result;
        let idx1 = this.students.findIndex((st: any) => st.name == this.editedStudent.name);
        if (idx1 != -1) {
          this.students[idx1] = this.editedStudent;
          alertify.success('Edited Successfully');
        }
        let idx2 = this.newStudentsList.findIndex((st: any) => st.name == this.editedStudent.name);
        if (idx2 != -1) {
          this.newStudentsList[idx2] = this.editedStudent;
          alertify.success('Edited Successfully');
        }
      });
    }
  }

  deleteStudent(s: any) {
    this.students = this.students.filter((student: any) => student.name != s.name);
    this.newStudentsList = this.newStudentsList.filter((student: any) => student.name != s.name);
    alertify.success('Deleted Successfully');
  }

  confirmDeletion(s: any) {
    let text = 'Do you really want to delete this User';
    if (confirm(text) == true) {
      this.deleteStudent(s);
    }
  }

  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe({
      next: (data) => {
        this.students = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}

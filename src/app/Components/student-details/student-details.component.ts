// import { Component ,OnInit} from '@angular/core';
// import { DemoStudentsService } from 'src/app/Services/demo-students.service';
// import {ActivatedRoute} from '@angular/router'


// @Component({
//   selector: 'app-student-details',
//   templateUrl: './student-details.component.html',
//   styleUrls: ['./student-details.component.css']
// })
// export class StudentDetailsComponent implements OnInit{

//   id:any;

//   studentData:any;

//   constructor(public myService:DemoStudentsService,public myRoute:ActivatedRoute)
//   {

//   }

//   ngOnInit(): void
//   {
//     this.id=this.myRoute.snapshot.params['id'];

//     this.myService.GetStudentByID(this.id).subscribe({
//       next:(data)=>{this.studentData=data},
//       error:(e)=>{console.log(e)}
//     })
//   }

// }
import { Component ,OnInit} from '@angular/core';
import { DemoStudentsService } from 'src/app/Services/demo-students.service';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{

  id:any;

  studentData:any;

  constructor(public myService:DemoStudentsService,public myRoute:ActivatedRoute)
  {

  }

  ngOnInit(): void
  {
    this.id=this.myRoute.snapshot.params['id'];

    this.myService.GetStudentByID(this.id).subscribe({
      next:(data)=>{this.studentData=data},
      error:(e)=>{console.log(e)}
    })
  }

}

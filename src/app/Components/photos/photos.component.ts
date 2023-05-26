import { Component ,OnInit} from '@angular/core';
import { DemoStudentsService } from 'src/app/Services/demo-students.service';
import {ActivatedRoute} from '@angular/router'



@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})

export class PhotosComponent implements OnInit{

  id:any;

  photoData:any;

  constructor(public myService:DemoStudentsService,public myRoute:ActivatedRoute)
  {

  }
  ngOnInit(): void
  {
    this.id = this.myRoute.parent?.snapshot.params['id'];
    console.log(this.id);
    this.myService.getPhotos(this.id).subscribe({
      next:(data)=>{this.photoData=data;},
      error:(e)=>{console.log(e)}
    })
  }

}

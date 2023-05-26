import { Component, OnInit } from '@angular/core';
import { DemoStudentsService } from 'src/app/Services/demo-students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  id: any;
  no_of_photos: any = []; // Initialize as an object to hold the photo counts for each album
  albumData: any;
  albumID: any;

  constructor(public myService: DemoStudentsService, public myRoute: ActivatedRoute) {}

  ngOnInit(): void
  {
    this.id = this.myRoute.parent?.snapshot.params['id'];
    console.log(this.id);
    this.myService.getAlbums(this.id).subscribe({
      next: (data) => {
        this.albumData = data; //array of user data
        console.log(this.albumData);
                // this.no_of_photos = this.albumData.length;
                // console.log(this.no_of_photos);
        // this.albumID = this.albumData.id;
        this.handleAlbumDataChanges();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  handleAlbumDataChanges() {
    if (this.albumData) {
      for (const item of this.albumData) {
        const itemId = item.id;
        // Perform actions with the itemId
        console.log('Album ID:', itemId);
        this.myService.getPhotos(itemId).subscribe({
            next: (data) =>
            {
              this.no_of_photos.push(data) ; // Store the photo count using the album ID as the index
              console.log(this.no_of_photos);
              console.log("--------->"+this.id);
            },
            error: (e) =>
            {
              console.log(e);
            }
          });
      }
    }
  }

  // Rest of your component code...

}

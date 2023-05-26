import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoStudentsService {

  Base_URL='https://jsonplaceholder.typicode.com/users';

  url_02='https://jsonplaceholder.typicode.com/photos?albumId=';

  url_03='https://jsonplaceholder.typicode.com/albums?userId=';

  constructor(private myClient:HttpClient) {}

  GetAllStudents()
  {
    return this.myClient.get(this.Base_URL);
  }
  GetStudentByID(id:any)
  {
    return this.myClient.get(this.Base_URL+"/"+id);
  }
  AddStudent(student:any)
  {
    return this.myClient.post(this.Base_URL,student);
  }
  updateStudent(id:any,student:any)
  {
    return this.myClient.put(this.Base_URL+"/"+id,student);
  }
  deleteStudent(id:any)
  {
    return this.myClient.delete(this.Base_URL+"/"+id);
  }
  getAlbums(id:any)
  {
    return this.myClient.get(this.url_03+id);
  }
  getPhotos(id:any)
  {
    return this.myClient.get(this.url_02+id);
  }
}

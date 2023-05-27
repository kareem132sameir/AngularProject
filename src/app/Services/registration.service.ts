import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  Base_URL='http://localhost:3000/users';

  second_url='http://localhost:3000/admins';

  constructor(private myClient:HttpClient) {}

  getAdminByEmail(email:string)
  {
    return this.myClient.get(`${this.second_url}?email=${email}`);
  }
  getAllUsers()
  {
    return this.myClient.get(this.Base_URL);
  }
  addUser(student:any)
  {
    return this.myClient.post(this.Base_URL,student);
  }
  getUserByEmail(email:string)
  {
    return this.myClient.get(`${this.Base_URL}?email=${email}`);
  }
  // GetStudentByID(id:any)
  // {
  //   return this.myClient.get(this.Base_URL+"/"+id);
  // }

  // updateStudent(id:any,student:any)
  // {
  //   return this.myClient.put(this.Base_URL+"/"+id,student);
  // }
  // deleteStudent(id:any)
  // {
  //   return this.myClient.delete(this.Base_URL+"/"+id);
  // }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Response } from '../model/Response';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseAPiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseAPiUrl}/user`;
  
  usuarios: User[] = [];

  constructor(private http: HttpClient) { }

getUsers(): Observable<Response<User[]>>{
  return this.http.get<Response<User[]>>(this.apiUrl);
}

creatUser(formData: FormData): Observable<FormData>{
  return this.http.post<FormData>(this.apiUrl, formData)
}

}

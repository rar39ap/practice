import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SampleService {

  body ={
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  };

  constructor(private http: HttpClient) { }
  getData(): Observable<todos> {
    // return of(this.body);
    
    return  this.http.get<todos>('https://jsonplaceholder.typicode.com/todos/1')
  }
}

export interface todos{
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}



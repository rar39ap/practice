import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Isubject } from './model/subject.model';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  readonly baseurl: string = 'http://localhost:3000/subjects';
  constructor(private http: HttpClient) {}

  getSubjects(): Observable<Isubject[]> {
    return this.http.get<Isubject[]>(this.baseurl);
  }
  delete(subjectID: number): Observable<any> {
    const url: string = `${this.baseurl}/${subjectID}`;
    return this.http.delete(url);
  }
  create(newSubject: Isubject): Observable<Isubject> {
    return this.http.post<Isubject>(this.baseurl, newSubject);
  }
}

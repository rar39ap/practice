import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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
  getEmployee(): Observable<employee> {
    const employee: employee = { id: 1, name: 'srinivas', dep: 'cse', salary: 0 };
    return of(employee);
  }
  getSalary(): Observable<salary> {
    const employee: salary = {
      employeeID: 1,
      month: 10,
      salary: 1000,
    };
    return of(employee);
  }

getEmployeeMonthSalary(): Observable<employee> {
  return this.getEmployee().pipe(
    switchMap((employee: employee) => 
      this.getSalary().pipe (map((salary: salary) => {
          employee.salary = salary.salary;
          return employee;
        }))
    )
  )
}

}

export interface employee {
  id: number;
  name: string;
  dep: string;
  salary: number;
}
export interface salary {
  employeeID: number;
  month: number;
  salary: number;
}

function switchMap(arg0: (employee: employee) => void): import("rxjs").OperatorFunction<employee, employee> {
  throw new Error('Function not implemented.');
}


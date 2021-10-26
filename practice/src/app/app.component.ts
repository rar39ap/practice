import { Component } from '@angular/core';
import { Isubject } from './Service/model/subject.model';
import { SubjectService } from './Service/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  shownewSubject: boolean = false;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  studentList: string[] = ['Ramala', 'Srinivasa', 'Reddy'];
  firstStudent: string = this.studentList[0];

  listNumbers: number[] = [1, 2, 3, 4, 5];
  subjectsList: Isubject[] = [];
  showNewSubject: boolean = false;

  constructor(private subjectsServices: SubjectService) {}

  ngOnInit(): void {
    this.getSubjects();
  }
  getSubjects(): void {
    this.subjectsServices.getSubjects().subscribe(
      (data) => (this.subjectsList = data),
      (error) => console.log(error)
    );
  }
  onDelete(subjectID: number): void {
    this.subjectsServices.delete(subjectID).subscribe(
      (data) => this.getSubjects(),
      (error) => console.log(error)
    );
  }
  // addNewSubject() {
  //   this.showNewSubject = true;
  // }
  onSave(newSubject: Isubject) {
    console.log(newSubject);
    this.subjectsServices.create(newSubject).subscribe(
      (data) => {
        this.getSubjects();
        this.showNewSubject = false;
      },
      (error) => console.log(error)
    );
  }
}

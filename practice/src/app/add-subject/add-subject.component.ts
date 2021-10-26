import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Isubject } from '../Service/model/subject.model';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss'],
})
export class AddSubjectComponent implements OnInit {
  @Output() save: EventEmitter<Isubject> = new EventEmitter;
  name: string = '';
  code: string = '';
  teachers: string = '';
  IsinSem: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSave() {
    const newSubject: Isubject = {
      name: this.name,
      code: this.code,
      Teachers: this.teachers.split(','),
      IsinSem: this.IsinSem,
    };
    this.save.emit(newSubject);
  }
}

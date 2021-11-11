import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-subjects',
  templateUrl: './list-subjects.component.html',
  styleUrls: ['./list-subjects.component.scss'],
})
export class ListSubjectsComponent implements OnInit {
  @Input() subject: any = 'default subject';
  @Output() delete: EventEmitter<number> = new EventEmitter();
  constructor() {}


  ngOnInit(): void {}
  onDelete(subjectID: number): void {
    this.delete.emit(subjectID);
  }
}

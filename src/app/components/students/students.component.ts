import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/models/student.type';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  @Input() student: Student | undefined;
  @Input() bgColor: string | undefined;
  @Output() editStudent: EventEmitter<void> = new EventEmitter<void>();
}

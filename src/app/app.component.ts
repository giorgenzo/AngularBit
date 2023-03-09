import { Component } from '@angular/core';
import { STUDENTS } from './data/students';
import { Student } from './models/student.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App Student';
  student = structuredClone(STUDENTS);
  selectedStudent: Student | undefined;
  mode: 'edit' | 'add' = 'edit';

  addStudent(): void {
    this.selectedStudent = new Student;
    this.mode = 'add';
  }

  handleAddStudent(newStudent: Student): void {
    this.student.unshift(newStudent);
    this.student.push(newStudent);
    this.selectedStudent = undefined;
  }

  editStudent(student: Student): void {
    this.selectedStudent = student;
    this.mode = 'edit';
  }

  handleEditStudent(student: Student): void {
    const studentIndex: number = this.student.findIndex((st: Student): boolean => st.nome === student.nome && st.cognome === student.cognome);
    if (studentIndex > 0) {
      this.student.splice(studentIndex, 1, student)
    }
    this.selectedStudent = undefined;
  }
}
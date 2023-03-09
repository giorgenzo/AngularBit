import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Student, StudentExperience } from 'src/app/models/student.type';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {
  @Input() student: Student | undefined;
  @Input() mode!: 'edit' | 'add';
  @Output() editStudent: EventEmitter<Student> = new EventEmitter<Student>();
  @Output() addStudent: EventEmitter<Student> = new EventEmitter<Student>();

  genderOptions = ['M', 'F'];
  studentViewModel: Student = new Student();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['student'].currentValue) {
      this.studentViewModel = structuredClone(changes['student'].currentValue);
      this.addHobby();
      this.addLingua();
      this.addExp();
    }
  }

  addHobby(): void {
    if (this.studentViewModel.hobbies.some(hobby => !hobby.name)) {
      return;
    }
    this.studentViewModel!.hobbies!.push({ name: "", icon: "" });
  }
  addLingua(): void {
    if (this.studentViewModel.lingue.some(lang => !lang.name)) {
      return;
    }
    this.studentViewModel!.lingue!.push({ name: "", icon: "" });
  }
  addExp(): void {
    if (this.studentViewModel.esperienze.some(exp => !exp.nome)) {
      return;
    }
    this.studentViewModel!.esperienze!.push({ nome: "", descrizione: "", inizio: new Date(), fine: new Date(), tags: [''] });
  }
  addTag(exp: StudentExperience): void{
    if(exp.tags.some((tag) => !tag)){
      return;
    }
    exp.tags.push('');
  }
  tagsTrackByFn(index: number): number{
    return index;
  }

  saveChanges(): void {
    this.studentViewModel = {
      ...this.studentViewModel,
      hobbies: this.studentViewModel!.hobbies.filter(hobby => !!hobby.name),
      lingue: this.studentViewModel!.lingue.filter(language => !!language.name),
      esperienze: this.studentViewModel!.esperienze.filter(exp => !!exp.nome).map((exp) => ({
        ...exp,
        tags: exp.tags.filter((tag) => !!tag)})),
    } as Student;

    if (this.mode === 'add') {
      this.addStudent.emit(this.studentViewModel);
    } else {
      this.editStudent.emit(this.studentViewModel);
    }
  }
}

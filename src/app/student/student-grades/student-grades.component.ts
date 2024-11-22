import { Component } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';

@Component({
  selector: 'app-student-grades',
  standalone: true,
  imports: [AsideComponent],
  templateUrl: './student-grades.component.html',
  styleUrl: './student-grades.component.css',
})
export class StudentGradesComponent {}

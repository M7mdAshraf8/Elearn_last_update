import { Component } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';

@Component({
  selector: 'app-student-attendence',
  standalone: true,
  imports: [AsideComponent],
  templateUrl: './student-attendence.component.html',
  styleUrl: './student-attendence.component.css',
})
export class StudentAttendenceComponent {}

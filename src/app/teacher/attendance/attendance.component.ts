import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../aside/aside.component';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [AttendanceComponent,RouterModule,AsideComponent],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent {

}

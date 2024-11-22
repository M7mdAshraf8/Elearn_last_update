import { Component } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { DataService } from '../data.service';
import { NgClass, NgIf } from '@angular/common';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-student-home',
  standalone: true,
  imports: [AsideComponent, NgClass, NgIf],
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.css',
})
export class StudentHomeComponent {
  enrolledCourseIds: string[] = [];
  enrolledCourses: any[] = [];
  loginUser: any;

  constructor(
    private _studentData: ServerService,
    private server: ServerService
  ) {}

  ngOnInit() {
    this.server.getLogin().subscribe((res: any) => {
      this.loginUser = res;
      this.enrolledCourseIds = res.enrolledCourses || [];
      this.fetchCourses();
      console.log(this.loginUser);
    });
  }

  fetchCourses() {
    this.server.getCourses().subscribe((res: any[]) => {
      // Filter courses based on the enrolled course IDs
      this.enrolledCourses = res.filter((course) =>
        this.enrolledCourseIds.includes(course.id)
      );
      console.log(this.enrolledCourses);
    });
  }
}

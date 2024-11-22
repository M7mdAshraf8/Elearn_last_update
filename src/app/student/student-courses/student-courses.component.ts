import { Component } from '@angular/core';
import { StudentCardsComponent } from '../student-cards/student-cards.component';
import { AsideComponent } from '../aside/aside.component';
import { DataService } from '../data.service';
import { RouterModule } from '@angular/router';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-student-courses',
  standalone: true,
  imports: [StudentCardsComponent, AsideComponent, RouterModule],
  templateUrl: './student-courses.component.html',
  styleUrl: './student-courses.component.css',
})
export class StudentCoursesComponent {
  enrolledCourseIds: string[] = [];
  enrolledCourses: any[] = [];
  loginUser: any;

  constructor(private server: ServerService) {}

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

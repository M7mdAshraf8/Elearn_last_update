import { Component, model } from '@angular/core';
import { ServerService } from '../../server.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { AsideComponent } from '../aside/aside.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-enroll-course',
  standalone: true,
  imports: [NgIf, NgFor, AsideComponent, AsyncPipe],
  templateUrl: './enroll-course.component.html',
  styleUrl: './enroll-course.component.css',
})
export class EnrollCourseComponent {
  loginUser: any;
  courses = new BehaviorSubject<any[]>([]);
  enrolledCourses: any[] = [];

  constructor(private server: ServerService) {}

  ngOnInit(): void {
    this.server.getLogin().subscribe((res: any) => {
      this.loginUser = res;
      this.enrolledCourses = res.enrolledCourses || [];
    });
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.server.getCourses().subscribe((res) => {
      const availableCourses = res.filter(
        (course) => !this.enrolledCourses.includes(course.id)
      );
      this.courses.next(availableCourses);
    });
  }

  enroll(courseId: any): void {
    // Find the course that the user wants to enroll in
    this.server.getCourses().subscribe((courses: any[]) => {
      const courseToEnroll = courses.find((course) => course.id === courseId);

      if (courseToEnroll) {
        // Increment the student count for the course
        courseToEnroll.students += 1;

        // Update the course data on the server with the new student count
        this.server
          .updateCourses(courseId, courseToEnroll)
          .subscribe((updatedCourse) => {
            console.log('Course student count updated:', updatedCourse);

            // Proceed with adding the course to the user's enrolled courses
            this.enrolledCourses.push(courseId);

            const userModel = {
              ...this.loginUser,
              enrolledCourses: this.enrolledCourses,
            };

            this.server.login(userModel).subscribe((res) => {});

            // Update the user data on the server to save the enrolled course
            this.server
              .updateData(this.loginUser.userId, 'students', userModel)
              .subscribe(() => {
                alert('Course Enrolled');
                this.fetchCourses(); // Refresh the available courses list
              });
          });
      }
    });
  }
}

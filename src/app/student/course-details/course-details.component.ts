import { Component, model } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../../server.service';
import { AsideComponent } from '../aside/aside.component';
import { NgIf } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [AsideComponent, NgIf],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent {
  courseId: string | null = null;
  course: any;
  loginUser: any;
  enrolledCourses: any[] = [];

  constructor(
    private server: ServerService,
    private _activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe((param) => {
      this.courseId = param['id'];

      this.server.getLogin().subscribe((userData: any) => {
        this.loginUser = userData;
        this.enrolledCourses = userData.enrolledCourses;

        if (this.loginUser && this.loginUser.enrolledCourses) {
          this.fetchCourseDetails();
        }
      });
    });
  }

  fetchCourseDetails(): void {
    this.server.getCourses().subscribe((courses: any[]) => {
      this.course = courses.find((item) => item.id === this.courseId);
      console.log('Course details:', this.course);
    });
  }

  removeCourse(id: any) {
    // Find the course that the user wants to remove
    this.server.getCourses().subscribe((courses: any[]) => {
      const courseToRemove = courses.find((course) => course.id === id);

      if (courseToRemove && courseToRemove.students > 0) {
        // Decrement the student count for the course
        courseToRemove.students -= 1;

        // Update the course data on the server with the new student count
        this.server
          .updateCourses(id, courseToRemove)
          .subscribe((updatedCourse) => {
            console.log(
              'Course student count updated after removal:',
              updatedCourse
            );

            // Proceed with removing the course from the user's enrolled courses
            const updatedCourses = this.enrolledCourses.filter(
              (courseId) => courseId !== id
            );

            // Update the enrolledCourses array in the local user data
            this.enrolledCourses = updatedCourses;

            // Create a model with the updated enrolledCourses array to send to the server
            const model = {
              ...this.loginUser,
              enrolledCourses: this.enrolledCourses,
            };

            // Send the updated user data to the server
            this.server
              .updateData(this.loginUser.userId, 'students', model)
              .subscribe(() => {
                console.log('Updated enrolled courses:', model.enrolledCourses);
                alert('Course removed successfully');
                this.router.navigate(['/student/courses']);
              });

            // Refresh the login data to reflect the updated enrolled courses
            this.server.login(model).subscribe();
          });
      } else {
        alert('No students enrolled in this course to decrease');
      }
    });
  }
}

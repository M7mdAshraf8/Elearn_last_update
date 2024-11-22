import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../aside/profile.service';
import { ServerService } from '../../server.service';
import { NgIf } from '@angular/common';
import { AsideComponent } from '../../teacher/aside/aside.component';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [NgIf, AsideComponent],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css',
})
export class CardDetailsComponent {
  courseId: string | null = null;
  course: any;
  loginUser: any;

  constructor(
    private server: ServerService,
    private _activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((param) => {
      this.courseId = param['id'];

      this.server.getLogin().subscribe((userData) => {
        this.loginUser = userData;

        if (this.loginUser && this.loginUser.courses) {
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

  removeCourse(): void {
    if (this.courseId) {
      this.server.deleteCourse(this.courseId).subscribe(() => {
        console.log('Course deleted successfully');
        alert('Course has been removed.');

        // Redirect to another page after deletion, e.g., teacher dashboard
        this.router.navigate(['/teacher/courses']);
      });
    }
  }
}

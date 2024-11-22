import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../aside/aside.component';
import { ProfileService } from '../aside/profile.service';
import { CardComponent } from '../card/card.component';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CoursesComponent, RouterModule, AsideComponent, CardComponent],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'], // Fixed typo here
})
export class CoursesComponent {
  loginUser: any;
  courses: string[] = []; // Store course IDs from the logged-in user
  cards: any[] = []; // Store filtered course objects

  constructor(
    private _cardservice: ProfileService,
    private server: ServerService
  ) {}

  ngOnInit() {
    this.server.getLogin().subscribe((res) => {
      this.loginUser = res;
      this.courses = this.loginUser.courses || [];

      this.fetchCourses();
    });
  }

  fetchCourses() {
    this.server.getCourses().subscribe((res: any[]) => {
      this.cards = res.filter((course) => this.courses.includes(course.id));
      console.log(this.cards);
    });
  }
}

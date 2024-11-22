import { Component, Input } from '@angular/core';
import { DetailsCourses } from '../../detailscourses.service';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class MainCourseDetailsComponent {
  @Input() id: any;
  course: any;
  constructor(private _courseData: DetailsCourses) {}

  ngOnInit(): void {
    this.course = this._courseData.show(this.id);
    console.log(this.course);
  }
}

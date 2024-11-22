import { Component} from '@angular/core';
import { CoursesService } from '../courses.service';
import { Icourses } from '../icources';
import { CourceCardComponent } from "../cource-card/cource-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cource-list',
  standalone: true,
  imports: [CourceCardComponent , CommonModule],
  templateUrl: './cource-list.component.html',
  styleUrl: './cource-list.component.css'
})
export class CourceListComponent {
  courses: Icourses[] = [];
  currentIndex: number = 0;
  autoSlide: any;

  constructor(private _coursesService: CoursesService) {  
      this.courses = this._coursesService.index();
      this.startAutoSlide();
      window.addEventListener('resize', () => this.getCoursesForDisplay());
  }
  
  startAutoSlide() {
      this.autoSlide = setInterval(() => {
          this.nextCourses();
      }, 4000);
  }

  stopAutoSlide() {
      clearInterval(this.autoSlide);
  }

  getCoursesForDisplay() {
    let coursesToDisplay = 4; // Default for large screens

    if (window.innerWidth > 600 && window.innerWidth < 1000) {
        coursesToDisplay = 2; // Tablets
    } else if (window.innerWidth < 600) {
        coursesToDisplay = 1; // Mobile devices
    }

    const displayedCourses = [];
    for (let i = 0; i < coursesToDisplay; i++) {
        const courseIndex = (this.currentIndex + i) % this.courses.length;
        displayedCourses.push(this.courses[courseIndex]);
    }
    return displayedCourses;
}

  nextCourses() {
      this.currentIndex = (this.currentIndex + 1) % this.courses.length;
  }

  prevCourses() {
      this.currentIndex = (this.currentIndex - 1 + this.courses.length) % this.courses.length; 
  }
}

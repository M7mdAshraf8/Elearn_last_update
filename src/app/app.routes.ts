import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { StudentCoursesComponent } from './student/student-courses/student-courses.component';
import { StudentGradesComponent } from './student/student-grades/student-grades.component';
import { StudentAttendenceComponent } from './student/student-attendence/student-attendence.component';
import { StudentSettingsComponent } from './student/student-settings/student-settings.component';
import { CoursesComponent } from './teacher/courses/courses.component';
import { ProfileComponent } from './teacher/profile/profile.component';
import { AttendanceComponent } from './teacher/attendance/attendance.component';
import { SettingComponent } from './teacher/setting/setting.component';
import { CardDetailsComponent } from './teacher/card-details/card-details.component';
import { CourseDetailsComponent } from './student/course-details/course-details.component';
import { MainCourseDetailsComponent } from './cources/courses-details/course-details.component';
import { NewCourseComponent } from './teacher/new-course/new-course.component';
import { EnrollCourseComponent } from './student/enroll-course/enroll-course.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'student', component: StudentHomeComponent },
  { path: 'courses/:id', component: MainCourseDetailsComponent },
  { path: 'student/home', component: StudentHomeComponent },
  { path: 'student/courses/:id', component: CourseDetailsComponent },
  { path: 'student/courses', component: StudentCoursesComponent },
  { path: 'student/enroll-course', component: EnrollCourseComponent },
  { path: 'student/grades', component: StudentGradesComponent },
  { path: 'student/attendence', component: StudentAttendenceComponent },
  { path: 'student/settings', component: StudentSettingsComponent },
  // { path: '', redirectTo: '/teacher', pathMatch: 'full' },
  { path: 'teacher', component: ProfileComponent },
  { path: 'teacher/profile', component: ProfileComponent },
  { path: 'teacher/courses', component: CoursesComponent },
  { path: 'teacher/courses/:id', component: CardDetailsComponent },
  { path: 'teacher/attendance', component: AttendanceComponent },
  { path: 'teacher/setting', component: SettingComponent },
  // {path:'**' , component:NotFoundComponent}
  { path: 'teacher/new-course', component: NewCourseComponent },
];

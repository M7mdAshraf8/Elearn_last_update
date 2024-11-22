import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  user = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) {}

  addUser(model: any, type: any) {
    return this.http.post('http://localhost:3000/' + type, model);
  }

  updateData(id: any, type: any, model: any) {
    return this.http.put('http://localhost:3000/' + type + '/' + id, model);
  }

  login(model: any) {
    return this.http.put('http://localhost:3000/login/1', model);
  }

  getUsers(type: string) {
    return this.http.get('http://localhost:3000/' + type);
  }

  getLogin() {
    return this.http.get('http://localhost:3000/login/1');
  }

  addToCourses(model: any) {
    return this.http.post('http://localhost:3000/courses', model);
  }

  getCourses() {
    return this.http.get<Course[]>('http://localhost:3000/courses');
  }

  updateCourses(id: any, model: any) {
    return this.http.put('http://localhost:3000/courses/' + id, model);
  }

  deleteCourse(courseId: string) {
    return this.http.delete(`http://localhost:3000/courses/${courseId}`);
  }
}

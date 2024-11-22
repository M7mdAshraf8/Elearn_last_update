import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ServerService } from '../../server.service';
import { min } from 'rxjs';
import { AsideComponent } from '../../teacher/aside/aside.component';

@Component({
  selector: 'app-new-course',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, AsideComponent],
  templateUrl: './new-course.component.html',
  styleUrl: './new-course.component.css',
})
export class NewCourseComponent {
  courseForm!: FormGroup;
  loginUser!: any;
  courses: any[] = [];

  constructor(private server: ServerService) {
    this.server.user.subscribe((res) => {
      this.loginUser = res;
      this.courses = res?.courses ? res.courses : [];
      console.log(this.courses);
    });
  }

  ngOnInit() {
    this.courseForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      numberOfLessons: new FormControl('', [
        Validators.required,
        Validators.min(1),
      ]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      hasDiscount: new FormControl(false),
      discountAmount: new FormControl({ value: '', disabled: true }, [
        Validators.min(0),
        Validators.max(100),
      ]),
      imageUrl: new FormControl('', Validators.required),
    });

    this.courseForm.get('hasDiscount')?.valueChanges.subscribe((checked) => {
      const discountControl = this.courseForm.get('discountAmount');
      if (checked) {
        discountControl?.enable();
      } else {
        discountControl?.disable();
        discountControl?.reset();
      }
    });
  }

  generateRandomId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  onSubmit() {
    const newCourse = {
      id: this.generateRandomId(),
      name: this.courseForm.get('name')?.value,
      teacher: this.loginUser.username,
      description: this.courseForm.get('description')?.value,
      numberOfLessons: this.courseForm.get('numberOfLessons')?.value,
      students: 0,
      price: this.courseForm.get('price')?.value,
      hasDiscount: this.courseForm.get('hasDiscount')?.value,
      discountAmount: this.courseForm.get('discountAmount')?.value,
      finalPrice:
        this.courseForm.get('price')?.value -
        (this.courseForm.get('price')?.value *
          this.courseForm.get('discountAmount')?.value) /
          100,
      image: this.courseForm.get('imageUrl')?.value,
    };

    this.courses.push(newCourse.id);

    const model = {
      username: this.loginUser.username,
      email: this.loginUser.email,
      phone: this.loginUser.phone,
      role: this.loginUser.role,
      userId: this.loginUser.userId,
      password: this.loginUser.password,
      courses: this.courses,
    };

    console.log(model);
    console.log(this.courses);

    this.server
      .updateData(this.loginUser.userId, this.loginUser.role, model)
      .subscribe((res) => alert('done'));
    this.server.login(model).subscribe((res) => {});
    this.server.addToCourses(newCourse).subscribe((res) => {});
  }
}

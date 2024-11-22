import { NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import bootstrap, { Modal } from 'bootstrap';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from '../server.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  loginForm!: FormGroup;
  signUpForm!: FormGroup;
  isLoginForm = true;
  users: any[] = [];
  type: string = 'students';
  showenForm = new BehaviorSubject<string>('login');
  iconeStatus: any = 'hide';

  @ViewChild('formModal') formModal!: ElementRef;

  constructor(private _server: ServerService, private _router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });

    this.signUpForm = new FormGroup({
      username: new FormControl('', [
        // Change here
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),

      type: new FormControl(this.type),
    });
    this.getUsers();
  }

  getRule(event: any) {
    this.type = event.target.value;
    this.getUsers();
  }

  getUsers() {
    this._server.getUsers(this.type).subscribe((res: any) => {
      this.users = res;
    });
  }

  loginSubmit() {
    let index = this.users.findIndex(
      (item) =>
        item.email === this.loginForm.value.email &&
        item.password === this.loginForm.value.password
    );

    if (index === -1) {
      alert('User Not Exist');
    } else {
      const model = {
        username: this.users[index].username,
        email: this.users[index].email,
        password: this.users[index].password,
        phone: this.users[index].phone,
        role: this.type,
        userId: this.users[index].id,
        courses: this.users[index].courses,
        enrolledCourses: this.users[index].enrolledCourses,
      };
      console.log(model);
      alert('User Exist');
      this._server.login(model).subscribe((res) => {
        this._server.user.next(res);
      });
      if (this.type === 'students') {
        this._router.navigate(['/student']);
      } else {
        this._router.navigate(['/teacher']);
      }
    }
  }

  signUpSubmit() {
    const model = {
      role: this.type,
      username: this.signUpForm.value.username,
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password,
      phone: this.signUpForm.value.phone,
    };

    let index = this.users.findIndex(
      (item) => item.email === this.signUpForm.value.email
    );

    if (index != -1) {
      alert('this  email is already exist');
    } else {
      alert('account  created successfully');
      this._server.addUser(model, this.type).subscribe((res) => {
        console.log(res);
      });
    }
  }

  toggleShowenForm() {
    if (this.showenForm.getValue() === 'login') {
      this.showenForm.next('sign-up');
    } else {
      this.showenForm.next('login');
    }
  }

  togglePassword(passwordField: HTMLInputElement, toggleIcon: HTMLElement) {
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      toggleIcon.classList.remove('fa-eye-slash');
      toggleIcon.classList.add('fa-eye');
    } else {
      passwordField.type = 'password';
      toggleIcon.classList.remove('fa-eye');
      toggleIcon.classList.add('fa-eye-slash');
    }
  }
  toggleCPassword(passwordCField: HTMLInputElement, toggleIconC: HTMLElement) {
    if (passwordCField.type === 'password') {
      passwordCField.type = 'text';
      toggleIconC.classList.remove('fa-eye-slash');
      toggleIconC.classList.add('fa-eye');
    } else {
      passwordCField.type = 'password';
      toggleIconC.classList.remove('fa-eye');
      toggleIconC.classList.add('fa-eye-slash');
    }
  }
}

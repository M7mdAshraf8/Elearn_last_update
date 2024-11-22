import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../aside/aside.component';
import { ProfileService } from '../aside/profile.service';
import { ServerService } from '../../server.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [
    SettingComponent,
    RouterModule,
    AsideComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css',
})
export class SettingComponent {
  teacherData: any;

  formData!: FormGroup;
  loginUser!: any;

  constructor(private server: ServerService) {
    this.server.user.subscribe((res) => {
      if (res && res.role) {
        this.loginUser = res;
      }
    });
  }

  ngOnInit() {
    this.formData = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.minLength(5)]),
      confirmPassword: new FormControl('', [Validators.minLength(5)]),
    });

    this.server.getLogin().subscribe((res) => {
      this.teacherData = res;
      this.updateFormWithData(this.teacherData); // Update form fields with fetched data
    });
  }

  updateFormWithData(data: any) {
    this.formData.patchValue({
      firstName: data.username || '', // If data.firstName exists, use it. Otherwise, keep it as an empty string.
      email: data.email || '',
      phone: data.phone || '',
    });
  }

  updateData() {
    const model: {
      username: any;
      email: any;
      phone: any;
      role: any;
      userId: any;
      password?: string; // Make password optional
    } = {
      username: this.formData.value.firstName,
      email: this.formData.value.email,
      phone: this.formData.value.phone,
      role: this.loginUser.role,
      userId: this.loginUser.userId,
    };

    // Add password only if it's provided (i.e., not empty)
    if (this.formData.value.password) {
      model.password = this.formData.value.password;
    } else {
      model.password = this.loginUser.password;
    }

    this.server
      .updateData(this.loginUser.userId, this.loginUser.role, model)
      .subscribe((res) => {
        this.server.login(model).subscribe((res) => console.log(res));
        alert('Data Successfully Updated');
      });
  }
}

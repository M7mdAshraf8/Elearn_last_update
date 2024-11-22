import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../aside/aside.component';
import { ProfileService } from '../aside/profile.service';
import { FormsModule } from '@angular/forms';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileComponent, RouterModule, AsideComponent, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  teacherData!: any;
  Teacherprofile: any;

  constructor(
    private server: ServerService,
    private profileservice: ProfileService
  ) {}

  /**image */
  get profileImg(): string {
    return this.profileservice.profileImg;
  }
  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileservice.profileImg = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  ngOnInit() {
    this.server.getLogin().subscribe((res) => (this.teacherData = res));
    this.Teacherprofile = this.profileservice.index();
  }

  // constructor(private profileservice: ProfileService) {}
  // /**image */
  // get profileImg(): string {
  //   return this.profileservice.profileImg;
  // }
  // triggerFileInput() {
  //   const fileInput = document.getElementById('fileInput') as HTMLInputElement;
  //   fileInput.click();
  // }
  // onFileSelected(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       this.profileservice.profileImg = e.target.result;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }
  // /**info */
  // ngOnInit() {
  //   this.Teacherprofile = this.profileservice.index();
  // }
}

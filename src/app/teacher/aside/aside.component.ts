import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileService } from './profile.service';


@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [AsideComponent,RouterModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  
  constructor(private imgservice: ProfileService) {}

  get profileImg() {
    return this.imgservice.profileImg;
  }

}

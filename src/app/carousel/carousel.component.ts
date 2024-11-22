import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  detailsCara = [
    {
      img: 'assets/img/img_bg_1.jpg.webp',
      title: 'Education is a Key to Success',
    },
    {
      img: 'assets/img/img_bg_2.jpg.webp',
      title: 'Best Online Learning System',
    },
    {
      img: 'assets/img/img_bg_3.jpg.webp',
      title: 'Online Free Course',
    },
    {
      img: 'assets/img/img_bg_4.jpg.webp',
      title: 'Best Online Learning Center',
    },
  ];

  user: any = null;

  constructor(private service: ServerService) {
    this.service.user.subscribe((res) => {
      if (res && res.role) {
        this.user = res;
      }
    });
  }

  logOut() {
    const model = {};
    this.service.login(model).subscribe((res) => {
      this.user = null;
      this.service.user.next(res);
    });
  }
}

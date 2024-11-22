import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { ServerService } from '../server.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, FormComponent, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  user: any = null;

  constructor(private service: ServerService, private router: Router) {
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
    this.router.navigate(['/home']);
  }
}

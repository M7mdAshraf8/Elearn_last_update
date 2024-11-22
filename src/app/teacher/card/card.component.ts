import { Component, Input } from '@angular/core';
import { ProfileService } from '../aside/profile.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CardDetailsComponent } from '../card-details/card-details.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardDetailsComponent, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() carditem: any;

  constructor(private router: Router) {}

  redirectToDetails(id: any) {
    this.router.navigate(['teacher/courses', id]);
    console.log(id);
  }
}

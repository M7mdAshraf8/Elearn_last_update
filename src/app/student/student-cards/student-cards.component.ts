import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-cards',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './student-cards.component.html',
  styleUrl: './student-cards.component.css',
})
export class StudentCardsComponent {
  @Input() cardItems: any;
}

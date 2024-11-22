import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { CourceListComponent } from "../cources/cource-list/cource-list.component";
import { CourceCardComponent } from "../cources/cource-card/cource-card.component";
import { TeamListComponent } from "../teamArea/team-list/team-list.component";
import { StatsComponent } from "../stats/stats.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CourceListComponent, TeamListComponent, StatsComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

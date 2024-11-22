import { Component } from '@angular/core';
import { Iteam } from '../iteam';
import { TeamService } from '../team.service';
import { TeamCardComponent } from "../team-card/team-card.component";

@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [TeamCardComponent],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css'
})
export class TeamListComponent {
  teams:Iteam[];
	constructor(private _teamService:TeamService){   
		this.teams=_teamService.index()		
	}
}

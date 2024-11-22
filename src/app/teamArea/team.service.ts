import { Injectable } from '@angular/core';
import { Iteam } from './iteam';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamList:Iteam[]=[
  {
    id:1,
    img: "assets/img/gallery/team1.png",
    name_teacher: "Alexa Janathon",
    position: "Inctructor",
    social_facebook: "#",
    social_twitter: "#",
    social_globe: "#"
  } , 
  {
    id:2,
    img: "assets/img/gallery/team2.png",
    name_teacher: "Janathon Smith",
    position: "Inctructor",
    social_facebook: "#",
    social_twitter: "#",
    social_globe: "#"
  } , 
  {
    id:3,
    img: "assets/img/gallery/team3.png",
    name_teacher: "Alexa MacCalum",
    position: "Inctructor",
    social_facebook: "#",
    social_twitter: "#",
    social_globe: "#"
  },
  {
    id:4,
    img: "assets/img/gallery/team4.png",
    name_teacher: "Alexa j Watson",
    position: "Inctructor",
    social_facebook: "#",
    social_twitter: "#",
    social_globe: "#"
  }
  ]
  index()
	{	
		return this.teamList
	}

  show(_id:number)
	{	
		return this.teamList.find(item => item.id=_id)	
	}
}

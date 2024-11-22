import { Component, Input, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cource-card',
  standalone: true,
  imports: [],
  templateUrl: './cource-card.component.html',
  styleUrl: './cource-card.component.css'
})
export class CourceCardComponent {
  @Input() courseItem:any;
  constructor(private router:Router){}

redirectToDetails(id:any){
 this.router.navigate(['/courses',id]);
}
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {
  studentData: any;
  constructor(private _studentData: DataService) {}

  ngOnInit() {
    this.studentData = this._studentData.index();
  }
}

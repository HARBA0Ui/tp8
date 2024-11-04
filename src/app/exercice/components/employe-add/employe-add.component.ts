import { Component } from '@angular/core';
import { EmployeListComponent } from "../employe-list/employe-list.component";


@Component({
  selector: 'app-employe-add',
  standalone: true,
  imports: [EmployeListComponent],
  templateUrl: './employe-add.component.html',
  styleUrl: './employe-add.component.css'
})
export class EmployeAddComponent {

}

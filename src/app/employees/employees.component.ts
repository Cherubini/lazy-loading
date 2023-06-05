import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

}

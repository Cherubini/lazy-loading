import { NgModule } from '@angular/core';
import { ClientsComponent } from './clients.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    SharedModule
  ],
  exports:[
    ClientsComponent
  ]
})
export class ClientsModule { }

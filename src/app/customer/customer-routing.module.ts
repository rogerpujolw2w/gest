import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerdataComponent } from './customerdata/customerdata.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
//import { CustomerlistComponent } from './customer/customerlist/customerlist.component';

const routes: Routes = [
  {path: 'detail/:id' , component: CustomerdataComponent},
  {path: '', component: CustomerlistComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

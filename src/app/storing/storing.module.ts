import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoringRoutingModule } from './storing-routing.module';
import { StoringlistComponent } from './storinglist/storinglist.component';
import { StoringincommingComponent } from './storingincomming/storingincomming.component';
import { StoringoutgoingComponent } from './storingoutgoing/storingoutgoing.component';

@NgModule({
  declarations: [StoringlistComponent, StoringincommingComponent, StoringoutgoingComponent],
  imports: [
    CommonModule,
    StoringRoutingModule
  ],
  exports: [StoringlistComponent, StoringincommingComponent, StoringoutgoingComponent]
})
export class StoringModule { }

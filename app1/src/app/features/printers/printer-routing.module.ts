import { PrinterCreateComponent } from './printer-create/printer-create.component';
import { PrinterListComponent } from './printer-list/printer-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: PrinterListComponent
  },
  {
    path: 'create',
    component: PrinterCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintersRoutingModule {}

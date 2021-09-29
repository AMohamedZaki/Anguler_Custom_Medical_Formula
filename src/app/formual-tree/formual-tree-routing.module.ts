import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormualTreeComponent } from './components/formual-tree/formual-tree.component';

const routes: Routes = [{ path: '', component: FormualTreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormualTreeRoutingModule { }

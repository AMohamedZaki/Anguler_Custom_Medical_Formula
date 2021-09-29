import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaComponent } from './components/formula/formula.component';
import { MainComponent } from './main/main.component';
import { TagsTestComponent } from './tags-test/tags-test.component';

const routes: Routes = [
  {
    path: 'tags',
    component: TagsTestComponent,
  },
  {
    path: 'formula',
    component: FormulaComponent,
  },
  { path: '', loadChildren: () => import('./formual-tree/formual-tree.module').then(m => m.FormualTreeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaComponent } from './formula/formula.component';
import { MainComponent } from './main/main.component';
import { TagsTestComponent } from './tags-test/tags-test.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'tags',
    component: TagsTestComponent,
  },
  {
    path: 'formula',
    component: FormulaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

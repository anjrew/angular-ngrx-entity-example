import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityExamplePageComponent } from './modules/entity-example/components/pages/entity-example-page/entity-example-page.component';

const routes: Routes = [
  {
    path: '',
    component: EntityExamplePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

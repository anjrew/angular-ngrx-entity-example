import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityExampleRoutingModule } from './entity-example-routing.module';
import { EntityExamplePageComponent } from './components/pages/entity-example-page/entity-example-page.component';
import { StoreModule } from '@ngrx/store';
import { entityExamplePageReducer } from './components/pages/entity-example-page/store/entity-example-page.reducer';
import { ENTITY_EXAMPLE_PAGE_STATE_SELECTOR_KEY } from './components/pages/entity-example-page/store/entity-example-page.state';


@NgModule({
  declarations: [EntityExamplePageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(ENTITY_EXAMPLE_PAGE_STATE_SELECTOR_KEY, entityExamplePageReducer),
    EntityExampleRoutingModule
  ]
})
export class EntityExampleModule { }

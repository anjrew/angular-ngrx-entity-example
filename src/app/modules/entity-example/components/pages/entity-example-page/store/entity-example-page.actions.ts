import { createAction, props } from '@ngrx/store';
import { ExampleEntity } from './entity-example-page.state';

export const initialize = createAction(
  '[entity-example-page] initialize'
);

/* Basic CRUD operations for the actions are created for manipulating the data */
export const CREATE = createAction(
  '[entity-example-page] CREATE',
  props<{entity: ExampleEntity}>()
);

export const UPDATE = createAction(
  '[entity-example-page] UPDATE',
  props<{changes: Partial<ExampleEntity>}>()
);

export const DELETE = createAction(
  '[entity-example-page] DELETE',
   props<{id: number}>()
);


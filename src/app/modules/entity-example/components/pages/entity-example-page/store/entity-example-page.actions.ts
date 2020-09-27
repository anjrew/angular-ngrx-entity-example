import { createAction, props } from '@ngrx/store';
import { ExampleEntity } from './entity-example-page.state';

export const initialize = createAction(
  '[entity-example-page] initialize'
);

export const CREATE = createAction(
  '[NameSpace] CREATE',
  props<{entity: ExampleEntity}>()
);

export const UPDATE = createAction(
  '[NameSpace] UPDATE',
  props<{changes: Partial<ExampleEntity>}>()
);

export const DELETE = createAction(
  '[NameSpace] DELETE',
   props<{id: number}>()
);


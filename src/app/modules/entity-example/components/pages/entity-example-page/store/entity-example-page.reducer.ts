import { createReducer, on } from '@ngrx/store';
import { initialState, exampleEntityAdapter } from './entity-example-page.state';
import * as Actions from './entity-example-page.actions';



export const entityExamplePageReducer = createReducer(

  initialState,

  on(
    Actions.initialize,
    (state) => ({...state}),
  ),

  on(
    Actions.CREATE,
    (state, action) => exampleEntityAdapter.addOne(action.entity, state),
  ),

  on(
    Actions.UPDATE,
    (state, action) => exampleEntityAdapter.updateOne({ id: action.changes.id, changes:action.changes }, state)
  ),

  on(
    Actions.DELETE,
    (state, action) => exampleEntityAdapter.removeOne(action.id, state)
  )
);

import { createReducer, on } from '@ngrx/store';
import { initialState, exampleEntityAdapter } from './entity-example-page.state';
import * as Actions from './entity-example-page.actions';



export const entityExamplePageReducer = createReducer(

  initialState,

  on(
    Actions.initialize,
    (state) => ({...state}),
  ),

  /* Use predefined methods for manipulating the data */
  on(
    Actions.CREATE,
    (state, action) => ({ ...state, entities: exampleEntityAdapter.addOne(action.entity, state.entities) }),
  ),

  on(
    Actions.UPDATE,
    (state, action) => ({ ...state, entities: exampleEntityAdapter.updateOne({ id: action.changes.id, changes: action.changes }, state.entities) })
  ),

  on(
    Actions.DELETE,
    (state, action) => ({ ...state, entities:  exampleEntityAdapter.removeOne(action.id,  state.entities) })
    ),
);
